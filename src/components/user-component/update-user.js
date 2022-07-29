import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";

const UpdateUser = ({refresh,id,data}) => {
    const [username,setUserName] = useState(data.username);
    const [nom,setNom] = useState(data.nom);
    const [prenom,setPrenom] = useState(data.prenom);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        const user = {username,nom,prenom};
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            fetch('http://localhost:5000/users/'+id,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(user)
            }).then(() => {console.log("updated");
                handleClose();
                refresh();
                // setX(x+1);
            })
        }
        setValidated(true);


    };
    return(
        <div className="row">
            <div className="col-12">
                <i className="fas fa-edit" onClick={handleShow} style={{color:"#005fff"}} />
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Modification</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nom d'utilisateur</Form.Label>
                                <Form.Control type="text" placeholder="Entrer un nom d'utilisateur" value={username} required minLength="3"
                                              onChange={(e) => setUserName(e.target.value)}/>
                                <Form.Text className="text-muted">
                                    minimum 3 caractères
                                </Form.Text>
                                <Form.Control.Feedback type="invalid">
                                    Le nom d'utilisateur est obligatoire!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control type="text" placeholder="Nom" required value={nom}
                                              onChange={(e) => setNom(e.target.value)}/>
                                <Form.Control.Feedback type="invalid">
                                    Le nom est obligatoire!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Prénom</Form.Label>
                                <Form.Control type="text" placeholder="Prenom" required value={prenom}
                                              onChange={(e) => setPrenom(e.target.value)}/>
                                <Form.Control.Feedback type="invalid">
                                    Le prénom est obligatoire!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <hr/>
                            <div style={{float: "right"}}>
                                <Button variant="btn btn-outline-primary mr-2" type="submit">
                                    Modifier
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
export default UpdateUser;