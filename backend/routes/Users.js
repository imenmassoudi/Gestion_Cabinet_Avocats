const router = require('express').Router();
let User = require('../model/User'); //le model user
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
//sconst asyncHandler = require('express-async-handler')
const {protect} = require('../middleware/authMiddleware')
//get requests
router.route('/').get(protect,(req, res)=> {
    User.find() //mongoose method
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});
//http post
router.route('/add').post(async (req, res) => {
    const username = req.body.username;
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const md = req.body.mdp;
    // Hash password
    const salt =  bcrypt.genSaltSync(10)
    const mdp =  bcrypt.hashSync(md, salt)

    //const newUser = new User({username,nom,prenom,mdp});

    const user = await User.create({username,nom,prenom,mdp})
    if (user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            nom: user.nom,
            prenom: user.prenom,
            token: generateToken(user._id)

        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
});

//login
router.route('/login').post(async (req, res) => {
    const { username, pwd } = req.body
    console.log("aaaaa "+username+ "bbb"+pwd)
    // Check for user email
    const user = await User.findOne({ username })
    console.log(user.username)
    if (user && (await bcrypt.compare(pwd, user.mdp))) {
        res.json({
            username: user.username,
            nom: user.nom,
            prenom: user.prenom,
            token: generateToken(user._id)

        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})


//delete
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('user deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.json("Crud updated");
        })
        .catch(function (err) {
            res.status(422).send("Crud update failed.");
        });
});


// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}
module.exports = router;