const router = require('express').Router();
//sconst asyncHandler = require('express-async-handler')
let Primegreffier = require('../model/Primegreffier'); //le model greffier

const {protect} = require('../middleware/authMiddleware');


//get requests
router.route('/').get(protect,(req, res)=> {
    Primegreffier.find() //mongoose method
        .then(Primegreffiers => res.json(Primegreffiers))
        .catch(err => res.status(400).json('Error: ' + err));
});


//http post
router.route('/add').post( (req, res) => {
   
    const libelle = req.body.libelle;
    const montant = req.body.montant;
    const dissociable = req.body.dissociable;
    const impot = req.body.impot;
    const mensuel = req.body.mensuel;
    
    const primegreffier = new Primegreffier({libelle,montant,dissociable,impot,mensuel});
    
    
    primegreffier.save()
        .then(() => res.json('prime greffier added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});


//delete
router.route('/:id').delete((req, res) => {
    Primegreffier.findByIdAndDelete(req.params.id)
        .then(() => res.json('prime greffier deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


//update
router.put('/:id', (req, res) => {
    Primegreffier.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.json("Prime greffier updated");
        })
        .catch(function (err) {
            res.status(422).send("Prime greffier update failed.");
        });
});

module.exports = router;