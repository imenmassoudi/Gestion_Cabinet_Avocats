const router = require('express').Router()
let Param_global = require('../model/Param_global') //le model Param_global
let Recette_Fin = require('../model/Recette_finance') //le model Recette_finance
let HonoraireExtra = require('../model/HonoraireExtra')
let Timbre = require('../model/Timbre')

const { protect } = require('../middleware/authMiddleware')

//get parametre global requests
router.route('/global').get((req, res) => {
  Param_global.find() //mongoose method
    .then((param) => res.json(param))
    .catch((err) => res.status(400).json('Error: ' + err))
})

//put parametre global requests
router.route('/global').put((req, res) => {
  Param_global.findByIdAndUpdate(
    '62c5813798bb3cc39588e87e', //where id = ...
    {
      $set: {
        tva: req.body.tva,
        timbre: req.body.timbre,
        photocopie: req.body.photocopie,
        transport: req.body.transport,
      },
    },
    {
      upsert: false,
    }
  )
    .then((result) => {
      console.log(result)
      res.json({ result: 'success' })
    })
    .catch((error) => res.json(error))
})

////get honoraireExtra
router.route('/honoraireExtra').get((req, res) => {
  HonoraireExtra.find() //mongoose method
    .then((honoraireExtra) => res.json(honoraireExtra))
    .catch((err) => res.status(400).json('Error: ' + err))
})
//get honoraireExtra by ID
router.route('/honoraireExtra/:id').get((req, res) => {
  const id = req.params.id
  console.log(req.params.id)

  HonoraireExtra.findById(id).then((HonoraireExtra) => res.json(HonoraireExtra))
})
//post honoraireExtra
router.route('/honoraireExtra').post((req, res) => {
  const libelle_arabe = req.body.libelle_arabe
  const libelle_francais = req.body.libelle_francais
  const montant = req.body.montant
  const newHonoraireExtra = new HonoraireExtra({
    libelle_arabe,
    libelle_francais,
    montant,
  })
  newHonoraireExtra
    .save()
    .then(() => res.json('HonoraireExtra added!'))
    .catch((err) => res.status(400).json('Error: ' + err))
})
//delete honoraireExtra
router.route('/honoraireExtra/:id').delete((req, res) => {
  HonoraireExtra.findByIdAndDelete(req.params.id)
    .then(() => res.json('HonoraireExtra deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err))
})
//put honoraireExtra
router.route('/honoraireExtra/:id').put((req, res) => {
  HonoraireExtra.findByIdAndUpdate(
    req.params.id, //where id = ...
    {
      $set: {
        libelle_arabe: req.body.libelle_arabe,
        libelle_francais: req.body.libelle_francais,
        montant: req.body.montant,
      },
    },
    {
      upsert: false,
    }
  )
    .then((result) => {
      console.log(result)
      res.json({ result: 'success' })
    })
    .catch((error) => res.json(error))
})

//get recette fin requests
router.route('/recette_fin').get((req, res) => {
  Recette_Fin.find() //mongoose method
    .then((recette_fin) => res.json(recette_fin))
    .catch((err) => res.status(400).json('Error: ' + err))
})
//get recette_fin by ID
router.route('/recette_fin/:id').get((req, res) => {
  const id = req.params.id
  console.log(req.params.id)

  Recette_Fin.findById(id).then((recette_fin) => res.json(recette_fin))
})
//post recette_fin
router.route('/recette_fin').post((req, res) => {
  const libelle = req.body.libelle
  const montant = req.body.montant
  const newRecette_Fin = new Recette_Fin({
    libelle,
    montant,
  })
  newRecette_Fin
    .save()
    .then(() => res.json('Recette finance added!'))
    .catch((err) => res.status(400).json('Error: ' + err))
})
//delete Recette_Fin
router.route('/recette_fin/:id').delete((req, res) => {
  Recette_Fin.findByIdAndDelete(req.params.id)
    .then(() => res.json('Recette finance deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err))
})
//put recette_fin
router.route('/recette_fin/:id').put((req, res) => {
  Recette_Fin.findByIdAndUpdate(
    req.params.id, //where id = ...
    {
      $set: {
        libelle: req.body.libelle,
        montant: req.body.montant,
      },
    },
    {
      upsert: false,
    }
  )
    .then((result) => {
      console.log(result)
      res.json({ result: 'success' })
    })
    .catch((error) => res.json(error))
})

//get timbre requests
router.route('/timbre').get((req, res) => {
  Timbre.find() //mongoose method
    .then((timbre) => res.json(timbre))
    .catch((err) => res.status(400).json('Error: ' + err))
})
//get timbre by ID
router.route('/timbre/:id').get((req, res) => {
  const id = req.params.id
  console.log(req.params.id)

  Timbre.findById(id).then((Timbre) => res.json(Timbre))
})
//post recette_fin
router.route('/timbre').post((req, res) => {
  const libelle = req.body.libelle
  const montant = req.body.montant
  const newTimbre = new Timbre({
    libelle,
    montant,
  })
  newTimbre
    .save()
    .then(() => res.json('Timbre added!'))
    .catch((err) => res.status(400).json('Error: ' + err))
})
//delete Recette_Fin
router.route('/timbre/:id').delete((req, res) => {
  Timbre.findByIdAndDelete(req.params.id)
    .then(() => res.json('Timbre deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err))
})
//put recette_fin
router.route('/timbre/:id').put((req, res) => {
  Timbre.findByIdAndUpdate(
    req.params.id, //where id = ...
    {
      $set: {
        libelle: req.body.libelle,
        montant: req.body.montant,
      },
    },
    {
      upsert: false,
    }
  )
    .then((result) => {
      console.log(result)
      res.json({ result: 'success' })
    })
    .catch((error) => res.json(error))
})
module.exports = router