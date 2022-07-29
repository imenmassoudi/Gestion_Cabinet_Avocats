const router = require('express').Router();
let SousDossiers = require('../model/SousDossier');
const {protect} = require('../middleware/authMiddleware')


//get requests
router.route('/').get((req, res)=> {
    SousDossiers.find() //mongoose method
        .then(d => res.json(d))
        .catch(err => res.status(400).json('Error: ' + err));
});
//http post
router.route('/add').post( (req, res) => {
    const lieu = req.body.lieu;
    const typeDossier = req.body.typeDossier
    const mission = req.body.mission
    const emplacement = req.body.emplacement
    const service = req.body.service
    const observation = req.body.observation
    const numAffaire = req.body.numAffaire
    const idDossier = req.body.idDossier
    const newDossier = new SousDossiers({
        typeDossier,
        mission,
        emplacement,
        lieu,
        service,
        observation,
        numAffaire,
        idDossier});

    newDossier.save()
        .then(() => res.json('dossier added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete
router.route('/:id').delete((req, res) => {
    SousDossiers.findByIdAndDelete(req.params.id)
        .then(() => res.json('dossier deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.put('/:id', (req, res) => {
    SousDossiers.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.json("Crud updated");
        })
        .catch(function (err) {
            res.status(422).send("Crud update failed.");
        });
});

module.exports = router;