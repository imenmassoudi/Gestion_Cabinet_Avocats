import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";

const AddCollaborateur = (refresh) => {
   
    const [nom,setNom] = useState("");
    const [cin,setCin] = useState("");
    const [ville,setVille] = useState("");
    const [rue,setRue] = useState("");
    const [num,setNum] = useState("");
    const [code_postale,setCode_postale] = useState("");
    const [activite,setActivite] = useState("");
    const [tel,setTel] = useState("");
    const [email,setEmail] = useState("");
    const [matricule,setMatricule] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        const Collaborateur = {nom,cin,ville,rue,num,code_postale,activite,tel,email,matricule};
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            fetch('http://localhost:5000/collaborateurs/add',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(Collaborateur)
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
              <Button variant="primary" onClick={handleShow}>
                  Ajouter un collaborateur
              </Button>
              <Modal show={show} onHide={handleClose}>
                  <Modal.Header>
                      <Modal.Title>Ajouter un collaborateur</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <Form noValidate validated={validated} onSubmit={handleSubmit}>
                          
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Nom</Form.Label>
                              <Form.Control type="text" placeholder="Nom" required
                                            onChange={(e) => setNom(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le nom est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>cin</Form.Label>
                              <Form.Control type="text" placeholder="cin" required
                                            onChange={(e) => setCin(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le cin est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>ville</Form.Label>
                              <Form.Control type="text" placeholder="ville" required
                                            onChange={(e) => setVille(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  ville est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>rue</Form.Label>
                              <Form.Control type="text" placeholder="rue" required
                                            onChange={(e) => setRue(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  La rue est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>num</Form.Label>
                              <Form.Control type="text" placeholder="num" required
                                            onChange={(e) => setNum(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le num est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>code_postale</Form.Label>
                              <Form.Control type="text" placeholder="code_postale" required
                                            onChange={(e) => setCode_postale(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le code postale est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                           <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>activité</Form.Label>
                              <Form.Control type="text" placeholder="activité" required
                                            onChange={(e) => setActivite(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  L'activité est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>tel</Form.Label>
                              <Form.Control type="text" placeholder="tel" required
                                            onChange={(e) => setTel(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le tel est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="text" placeholder="email" required
                                            onChange={(e) => setEmail(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  L'email est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>matricule</Form.Label>
                              <Form.Control type="text" placeholder="matricule" required
                                            onChange={(e) => setMatricule(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  matricule est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <hr/>
                          <div style={{float: "right"}}>
                              <Button variant="primary mr-2" type="submit">
                                  Ajouter
                              </Button>
                              <Button variant="secondary" onClick={handleClose}>
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
export default AddCollaborateur;