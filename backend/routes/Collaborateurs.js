const router = require('express').Router();
let Collaborateur = require('../model/Collaborateur'); //le model collaborateur
//sconst asyncHandler = require('express-async-handler')
const {protect} = require('../middleware/authMiddleware');

//get requests
router.route('/').get(protect,(req, res)=> {
    Collaborateur.find() //mongoose method
        .then(Collaborateurs => res.json(Collaborateurs))
        .catch(err => res.status(400).json('Error: ' + err));
});
//http post
router.route('/add').post( (req, res) => {
   
    const nom = req.body.nom;
    const cin = req.body.cin;
    const ville = req.body.ville;
    const rue = req.body.rue;
    const num = req.body.num;
    const code_postale = req.body.code_postale;
    const activite = req.body.activite;
    const tel = req.body.tel;
    const email = req.body.email;
    const matricule = req.body.matricule;
  
    const collaborateur = new Collaborateur({nom,cin,ville,rue,num,code_postale,activite,tel,email,matricule});
    
    
    collaborateur.save()
        .then(() => res.json('collab added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});


//delete
router.route('/:id').delete((req, res) => {
    Collaborateur.findByIdAndDelete(req.params.id)
        .then(() => res.json('collaborateur deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update
router.put('/:id', (req, res) => {
    Collaborateur.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.json("collaborateur updated");
        })
        .catch(function (err) {
            res.status(422).send("Collaborateur update failed.");
        });
});


module.exports = router;