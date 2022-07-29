const router = require('express').Router();
let Services = require('../model/Services');
const {protect} = require('../middleware/authMiddleware')


//get requests
router.route('/').get((req, res)=> {
    Services.find() //mongoose method
        .then(Service => res.json(Service))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get by ID
router.route('/:id').get(protect,(req, res)=> {
    const id = req.params.id;
    console.log(req.params.id)

    Services.find({idTrib:id})
        .then(
            Service => res.json(Service)
        )
});
//http post
router.route('/add').post( (req, res) => {
    const libelle = req.body.libelle;
    const joursAud = req.body.joursAud;
    const joursCour = req.body.joursCour;
    const idTrib = req.body.idTrib
    const newService = new Services({
        libelle,
        joursAud,
        joursCour,
        idTrib
    });

    newService.save()
        .then(() => res.json('serv added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete
router.route('/:id').delete((req, res) => {
    Services.findByIdAndDelete(req.params.id)
        .then(() => res.json('serv deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.put('/:id', (req, res) => {
    Services.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.json("Crud updated");
        })
        .catch(function (err) {
            res.status(422).send("Crud update failed.");
        });
});


module.exports = router;