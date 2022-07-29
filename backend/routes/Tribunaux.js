const router = require('express').Router();
let Tribunaux = require('../model/Tribunaux');
const {protect} = require('../middleware/authMiddleware')


//get requests
router.route('/').get(protect,(req, res)=> {
    Tribunaux.find() //mongoose method
        .then(trib => res.json(trib))
        .catch(err => res.status(400).json('Error: ' + err));
});
//http post
router.route('/add').post( (req, res) => {
    const lieu = req.body.lieu;
    const newTrib = new Tribunaux({
        lieu});

    newTrib.save()
        .then(() => res.json('trib added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete
router.route('/:id').delete((req, res) => {
    Tribunaux.findByIdAndDelete(req.params.id)
        .then(() => res.json('trib deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.put('/:id', (req, res) => {
    Tribunaux.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.json("Crud updated");
        })
        .catch(function (err) {
            res.status(422).send("Crud update failed.");
        });
});

module.exports = router;