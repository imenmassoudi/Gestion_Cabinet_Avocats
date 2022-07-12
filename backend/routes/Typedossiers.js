const router = require('express').Router();
//sconst asyncHandler = require('express-async-handler')
let Typedossier = require('../model/Typedossier'); //le model greffier

const {protect} = require('../middleware/authMiddleware');


//get requests
router.route('/').get(protect,(req, res)=> {
    Typedossier.find() //mongoose method
        .then(Typedossiers => res.json(Typedossiers))
        .catch(err => res.status(400).json('Error: ' + err));
});


//http post
router.route('/add').post( (req, res) => {
   
    const libelle = req.body.libelle;
    
    
    const typedossier = new Typedossier({libelle});
    
    
    typedossier.save()
        .then(() => res.json('type dossier added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});


//delete
router.route('/:id').delete((req, res) => {
    Typedossier.findByIdAndDelete(req.params.id)
        .then(() => res.json('type dossier deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


//update
router.put('/:id', (req, res) => {
    Typedossier.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.json("type dossier updated");
        })
        .catch(function (err) {
            res.status(422).send("type dossier update failed.");
        });
});

module.exports = router;