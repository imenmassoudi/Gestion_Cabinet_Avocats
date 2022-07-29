import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";

const AddUser = (refresh) => {
    const [username,setUserName] = useState("");
    const [nom,setNom] = useState("");
    const [prenom,setPrenom] = useState("");
    const [mdp,setMdp] = useState("");
    const [mdpConf,setMdpConf] = useState("");
    const [show, setShow] = useState(false);
    const [verif,setVerif] = useState("hidden");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        const user = {username,nom,prenom,mdp};
        if (form.checkValidity() === false || mdp !== mdpConf) {
            if(mdp !== mdpConf){
                setVerif("visible")
            }
            alert("mdp: "+mdp+" "+mdpConf)
            event.preventDefault();
            event.stopPropagation();
        }
        else{

            fetch('http://localhost:5000/users/add',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(user)
            }).then(() => {console.log("new blog added");
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
              <Button variant="btn btn-outline-secondary" onClick={handleShow} style={{float:"right"}}>
                  Ajouter un utilisateur
              </Button>
              <Modal show={show} onHide={handleClose}>
                  <Modal.Header>
                      <Modal.Title>Ajouter un utilisateur</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <Form noValidate validated={validated} onSubmit={handleSubmit}>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Nom d'utilisateur</Form.Label>
                              <Form.Control type="text" placeholder="Entrer un nom d'utilisateur" required minLength="3"
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
                              <Form.Control type="text" placeholder="Nom" required
                                            onChange={(e) => setNom(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le nom est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Prénom</Form.Label>
                              <Form.Control type="text" placeholder="Prenom" required
                                            onChange={(e) => setPrenom(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le prénom est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Mot de passe</Form.Label>
                              <Form.Control type="password" placeholder="mot de passe ..." required
                                            onChange={(e) => setMdp(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le mot de passe est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Confirmer mot de passe</Form.Label>
                              <Form.Control type="password" placeholder="confirmer mot de passe ..." required
                                            onChange={(e) => setMdpConf(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le mot de passe est obligatoire!
                              </Form.Control.Feedback>
                              <div className="alert alert-danger" role="alert" style={{visibility:verif}}>
                                  Vérifier le mot de passe saisi
                              </div>
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
export default AddUser;