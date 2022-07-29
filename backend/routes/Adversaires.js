const router = require('express').Router();
let Adversaire = require('../model/Adversaire');
//sconst asyncHandler = require('express-async-handler')
const {protect} = require('../middleware/authMiddleware');

//get requests
router.route('/').get(protect,(req, res)=> {
    Adversaire.find() //mongoose method
        .then(Adversaires => res.json(Adversaires))
        .catch(err => res.status(400).json('Error: ' + err));
});
//http post
router.route('/add').post( (req, res) => {
    const nom = req.body.nom;
    const registredecommerce = req.body.registredecommerce;
    const adresse = req.body.adresse;
    const adresseDesigne = req.body.adresseDesigne;
    const avocat = req.body.avocat;
    const adresseAvocat = req.body.adresseAvocat;
    const adversaire = new Adversaire ({nom,registredecommerce,adresse,adresseDesigne,avocat,adresseAvocat});
    
    
    adversaire.save()
        .then(() => res.json('Adversaire added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});


//delete
router.route('/:id').delete((req, res) => {
    Adversaire.findByIdAndDelete(req.params.id)
        .then(() => res.json('Adversaire deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;