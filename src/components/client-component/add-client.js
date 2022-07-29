import {Button, Form, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import Select from 'react-select'
import jwt from "jwt-decode";

const AddClient = ({refresh,clientsList}) => {

    const situation = [
        {
            value:"Non assujetie", label:"Non assujetie"
        },
        {
            value:"Assujetie", label:"Assujetie"
        },{
            value:"exonoré", label:"exonoré"
        }

    ]
    const typeClien = [
        {
            value:"Personne physique", label:"Personne physique"
        },
        {
            value:"Personne morale", label:"Personne morale"
        }
    ]
    const [collaborateur,setCollaborateur] = useState("");
    const [codeClient,setCodeClient] = useState("");
    const [nom,setNom] = useState("");
    const [typeClient,setTypeClient] = useState("");
    const [situationFisc,setSituationFisc] = useState("");
    const [cin,setCin] = useState("");
    const [ville,setVille] = useState("");
    const [rue,setRue] = useState("");
    const [numero,setNumero] = useState("");
    const [codeP,setCodeP] = useState("");
    const [adresse,setAdresse] = useState("");
    const [activiteCont,setActiviteCont] = useState("");
    const [tel,setTel] = useState("");
    const [fax,setFax] = useState("");
    const [email,setEmail] = useState("");
    const [show, setShow] = useState(false);
    const [options,setOptions] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)

        const token = localStorage.getItem('token')
        const option = []
        if (token) {
            const Collaborateurs = jwt(token)
            if (!Collaborateurs) {
                localStorage.removeItem('token')
                //   history.push('/login')
            } else {
                fetch('http://localhost:5000/collaborateurs',{
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization" : `Bearer ${token}`
                    },
                }) .then(res => {
                    return res.json();
                })
                    .then(res => {
                        res.map((res) => {
                            console.log(res)
                            console.log(option)
                            if(option.indexOf(res.cin) === -1){
                                console.log("le")
                                option.push({
                                    value: res.cin,
                                    label: res.cin+":"+res.nom,
                                })
                                setOptions(option)
                            }

                        })
                    }).catch(err =>{
                    console.log("errrrr");
                })
            }
        }
    };

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const nomTape = nom;
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
        fetch('http://localhost:5000/clients/find/'+nomTape)
            .then((response) => response.json())
            .then((e) => {
                const cpt = parseInt(e)+1;
                alert(cpt+"ena")
                let codeClient = nomTape[0]+cpt;
                setCodeClient(codeClient)
                //setCodeClient(n)
                const client = {
                    collaborateur,
                    codeClient,
                    nom,
                    typeClient,
                    situationFisc,
                    cin,
                    ville,
                    rue,
                    numero,
                    codeP,
                    adresse,
                    activiteCont,
                    tel,
                    fax,
                    email};
                alert(codeClient)
                fetch('http://localhost:5000/clients/add',{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body: JSON.stringify(client)
                }).then(() => {console.log("new client added");
                  //  handleClose();
                    //refresh();
            })
      //  event.preventDefault()

                // setX(x+1);
            })
        }
        event.preventDefault()
        setValidated(true);


    };
    return(
        <div className="row">
            <div className="col-12">
                <Button variant="btn btn-outline-secondary" onClick={handleShow} style={{float:"right"}}>
                    Ajouter un client
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Ajouter un client</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Collaborateur</Form.Label>
                                <Select options={options}   onChange={(e) => setCollaborateur(e.value)} />
                                <Form.Control.Feedback type="invalid">
                                    Le collab  est obligatoire!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nom Complet</Form.Label>
                                <Form.Control type="text" placeholder="Entrer un nom .." required minLength="3"
                                              onChange={(e) => setNom(e.target.value)}/>
                                <Form.Text className="text-muted">
                                    minimum 3 caractères
                                </Form.Text>
                                <Form.Control.Feedback type="invalid">
                                    Le nom  est obligatoire!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>CIN</Form.Label>
                                <Form.Control type="text" placeholder="Entrer un cin .." required minLength="8"
                                              onChange={(e) => setCin(e.target.value)}/>
                                <Form.Text className="text-muted">
                                    minimum 8 caractères
                                </Form.Text>
                                <Form.Control.Feedback type="invalid">
                                    cin  est obligatoire!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Situation fiscale</Form.Label>
                                <Select options={situation} onChange={(e) => setSituationFisc(e.value)}/>
                                <Form.Control.Feedback type="invalid">
                                    La situation  est obligatoire!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Type client</Form.Label>
                                <Select options={typeClien} onChange={(e) => setTypeClient(e.value)} />
                                <Form.Control.Feedback type="invalid">
                                    Le type  est obligatoire!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Ville</Form.Label>
                                <Form.Control type="text" placeholder="Entrer la ville .." required minLength="3"
                                              onChange={(e) => setVille(e.target.value)}/>
                                <Form.Text className="text-muted">
                                    minimum 3 caractères
                                </Form.Text>
                                <Form.Control.Feedback type="invalid">
                                    La ville  est obligatoire!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Rue</Form.Label>
                                <Form.Control type="text" placeholder="Entrer la rue .." required minLength="3"
                                              onChange={(e) => setRue(e.target.value)}/>
                                <Form.Text className="text-muted">
                                    minimum 3 caractères
                                </Form.Text>
                                <Form.Control.Feedback type="invalid">
                                    La rue  est obligatoire!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Numéro</Form.Label>
                                <Form.Control type="number" placeholder="Entrer un numero .." required minLength="1"
                                              onChange={(e) => setNumero(e.target.value)}/>
                                <Form.Text className="text-muted">
                                    minimum 1 caractères
                                </Form.Text>
                                <Form.Control.Feedback type="invalid">
                                    Le nom  est obligatoire!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Code postal</Form.Label>
                                <Form.Control type="number" placeholder="Entrer un nom .." required minLength="4" maxLength="4"
                                              onChange={(e) => setCodeP(e.target.value)}/>
                                <Form.Text className="text-muted">
                                    minimum 4 caractères
                                </Form.Text>
                                <Form.Control.Feedback type="invalid">
                                    Le code postal  est obligatoire!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Adresse</Form.Label>
                                <Form.Control type="text" placeholder="Entrer un nom .." required minLength="3"
                                              onChange={(e) => setAdresse(e.target.value)}/>
                                <Form.Text className="text-muted">
                                    minimum 3 caractères
                                </Form.Text>
                                <Form.Control.Feedback type="invalid">
                                    L'adresse  est obligatoire!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Activité contribuale</Form.Label>
                                <Form.Control type="text" placeholder="Entrer un nom .." required minLength="3"
                                              onChange={(e) => setActiviteCont(e.target.value)}/>
                                <Form.Text className="text-muted">
                                    minimum 3 caractères
                                </Form.Text>
                                <Form.Control.Feedback type="invalid">
                                    L'activité  est obligatoire!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Tel</Form.Label>
                                <Form.Control type="number" placeholder="Entrer un tel .." required minLength="3"
                                              onChange={(e) => setTel(e.target.value)}/>
                                <Form.Text className="text-muted">
                                    minimum 3 caractères
                                </Form.Text>
                                <Form.Control.Feedback type="invalid">
                                    Le tel  est obligatoire!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Fax</Form.Label>
                                <Form.Control type="number" placeholder="Entrer un fax .." required minLength="3"
                                              onChange={(e) => setFax(e.target.value)}/>
                                <Form.Text className="text-muted">
                                    minimum 3 caractères
                                </Form.Text>
                                <Form.Control.Feedback type="invalid">
                                    Le fax  est obligatoire!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Entrer un email .." required minLength="3"
                                              onChange={(e) => setEmail(e.target.value)}/>
                                <Form.Text className="text-muted">
                                    minimum 3 caractères
                                </Form.Text>
                                <Form.Control.Feedback type="invalid">
                                    L'email  est obligatoire!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <hr/>
                            <div style={{float: "right"}}>
                                <Button variant="btn btn-outline-primary mr-2" type="submit">
                                    Ajouter
                                </Button>
                                <Button variant="btn btn-outline-secondary" onClick={handleClose}>
                                    Annuler
                                </Button>
                            </div>

                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>

    )
}
export default AddClient;