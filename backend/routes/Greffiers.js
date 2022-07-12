const router = require('express').Router();
let Greffier = require('../model/Greffier'); //le model greffier
//sconst asyncHandler = require('express-async-handler')
let Primegreffier = require('../model/Primegreffier'); //le model greffier

const {protect} = require('../middleware/authMiddleware');


//get requests
router.route('/').get(protect,(req, res)=> {
    Greffier.find() //mongoose method
        .then(Greffiers => res.json(Greffiers))
        .catch(err => res.status(400).json('Error: ' + err));
});

//http post
router.route('/add').post( (req, res) => {
   
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const date_nais = req.body.date_nais;
    const adresse = req.body.adresse;
    const etat_civile = req.body.etat_civile;
    const nombre_e = req.body.nombre_e;
    const type_paye = req.body.type_paye;
    const base = req.body.base;
    const cin = req.body.cin;
    const tel = req.body.tel;
    const categorie = req.body.categorie;
    const echelon = req.body.echelon;
    const cnss = req.body.cnss;
    const contrat = req.body.contrat;
    const sexe = req.body.sexe;
    const date_emb = req.body.date_emb;
    const modalite = req.body.modalite;
    const actif = req.body.actif;
    const chef = req.body.chef;
    const gerant = req.body.gerant;
  
    const greffier = new Greffier({nom,prenom,date_nais,adresse,etat_civile,nombre_e,type_paye,base,cin,tel,categorie,echelon,cnss,contrat,sexe,date_emb,modalite,actif,chef,gerant});
    
    
    greffier.save()
        .then(() => res.json('greffier added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});


//delete
router.route('/:id').delete((req, res) => {
    Greffier.findByIdAndDelete(req.params.id)
        .then(() => res.json('greffier deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});



//update
router.put('/:id', (req, res) => {
    Greffier.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.json("Greffier updated");
        })
        .catch(function (err) {
            res.status(422).send("Greffier update failed.");
        });
});



module.exports = router;