const router = require('express').Router();
let Reglement = require('../model/Reglements');
const {protect} = require('../middleware/authMiddleware')


//get requests
router.route('/').get((req, res)=> {
    Reglement.find() //mongoose method
        .then(Reglements => res.json(Reglements))
        .catch(err => res.status(400).json('Error: ' + err));
});
//http post
router.route('/add').post( (req, res) => {
    const montant = req.body.montant;
    const type = req.body.type;
    const bare = req.body.bare;
    const numOperation = req.body.numOperation;
    const banque = req.body.banque;
    const porteur = req.body.porteur;
    const echeance = req.body.echeance;
    const numAffaire = req.body.numAffaire;



    const reglement = new Reglement({montant,type,bare,numOperation,banque,porteur,echeance,numAffaire});

    reglement.save()
        .then(() => res.json('Reglement added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete
router.route('/:id').delete((req, res) => {
    Reglement.findByIdAndDelete(req.params.id)
        .then(() => res.json('Reglement deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.put('/:id', (req, res) => {
    Reglement.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.json("Crud updated");
        })
        .catch(function (err) {
            res.status(422).send("Crud update failed.");
        });
});

module.exports = router;







