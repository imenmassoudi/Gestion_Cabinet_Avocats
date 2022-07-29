const router = require('express').Router();
//sconst asyncHandler = require('express-async-handler')
let Emplacement = require('../model/Emplacement'); //le model greffier

const {protect} = require('../middleware/authMiddleware');


//get requests
router.route('/').get(protect,(req, res)=> {
    Emplacement.find() //mongoose method
        .then(Emplacements => res.json(Emplacements))
        .catch(err => res.status(400).json('Error: ' + err));
});


//http post
router.route('/add').post( (req, res) => {
   
    const libelle = req.body.libelle;
    
    
    const emplacement = new Emplacement({libelle});
    
    
    emplacement.save()
        .then(() => res.json('Emplacement dossier added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});


//delete
router.route('/:id').delete((req, res) => {
    Emplacement.findByIdAndDelete(req.params.id)
        .then(() => res.json('Emplacement dossier deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


//update
router.put('/:id', (req, res) => {
    Emplacement.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.json("Emplacement dossier updated");
        })
        .catch(function (err) {
            res.status(422).send("Emplacement dossier update failed.");
        });
});

module.exports = router;