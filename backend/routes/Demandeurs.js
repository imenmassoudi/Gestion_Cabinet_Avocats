const router = require('express').Router();
let Demandeur = require('../model/Demandeur');
const {protect} = require('../middleware/authMiddleware')


//get requests
router.route('/').get((req, res)=> {
    Demandeur.find() //mongoose method
        .then(Demandeurs => res.json(Demandeurs))
        .catch(err => res.status(400).json('Error: ' + err));
});
//http post
router.route('/add').post( (req, res) => {
    const nom = req.body.nom;
    const cin = req.body.cin;
    const adresse = req.body.adresse;
    const adressedesigne = req.body.adressedesigne;
    const tel = req.body.tel;
    const fax = req.body.fax;
    const numAffaire = req.body.numAffaire;



    const demandeur = new Demandeur({nom,cin,adresse,adressedesigne,tel,fax,numAffaire});

    demandeur.save()
        .then(() => res.json('demandeur added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete
router.route('/:id').delete((req, res) => {
    Demandeur.findByIdAndDelete(req.params.id)
        .then(() => res.json('demandeur deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.put('/:id', (req, res) => {
    Demandeur.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.json("Crud updated");
        })
        .catch(function (err) {
            res.status(422).send("Crud update failed.");
        });
});

module.exports = router;