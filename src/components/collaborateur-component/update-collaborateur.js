import {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";

const UpdateCollaborateur = ({refresh,id,data}) => {
    const [show, setShow] = useState(false);
    const [nom,setNom] = useState(data.nom);
    const [cin,setCin] = useState(data.cin);
    const [ville,setVille] = useState(data.ville);
    const [rue,setRue] = useState(data.rue);
    const [num,setNum] = useState(data.num);
    const [code_postale,setCode_postale] = useState(data.coe_postale);
    const [activite,setActivite] = useState(data.activite);
    const [tel,setTel] = useState(data.tel);
    const [email,setEmail] = useState(data.email);
    const [matricule,setMatricule] = useState(data.matricule);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        const collaborateur = {id,nom,cin,ville,rue,num,code_postale,activite,tel,email,matricule};
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            fetch('http://localhost:5000/collaborateurs/'+id,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(collaborateur)
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
                <i className="fas fa-edit" onClick={handleShow} />
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Modification</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Nom du collaborateur</Form.Label>
                              <Form.Control type="text" placeholder="Entrer un nom de collaborateur" required minLength="3"
                                            onChange={(e) => setNom(e.target.value)}/>
                              <Form.Text className="text-muted">
                                  minimum 3 caractères
                              </Form.Text>
                              <Form.Control.Feedback type="invalid">
                                  Le nom du collaborateur est obligatoire!
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
                              <Form.Label>cin</Form.Label>
                              <Form.Control type="text" placeholder="cin" required value={cin}
                                            onChange={(e) => setCin(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le cin est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>ville</Form.Label>
                              <Form.Control type="text" placeholder="ville" required value={ville}
                                            onChange={(e) => setVille(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  ville est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>rue</Form.Label>
                              <Form.Control type="text" placeholder="rue" required value={rue}
                                            onChange={(e) => setRue(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  La rue est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>num</Form.Label>
                              <Form.Control type="text" placeholder="num" required value={num}
                                            onChange={(e) => setNum(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le num est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>code_postale</Form.Label>
                              <Form.Control type="text" placeholder="code_postale" required value={code_postale}
                                            onChange={(e) => setCode_postale(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le code postale est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                           <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>activité</Form.Label>
                              <Form.Control type="text" placeholder="activité" required value={activite}
                                            onChange={(e) => setActivite(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  L'activité est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>tel</Form.Label>
                              <Form.Control type="text" placeholder="tel" required value={tel}
                                            onChange={(e) => setTel(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le tel est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="text" placeholder="email" required value={email}
                                            onChange={(e) => setEmail(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  L'email est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>matricule</Form.Label>
                              <Form.Control type="text" placeholder="matricule" required value={matricule}
                                            onChange={(e) => setMatricule(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  matricule est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                            <hr/>
                            <div style={{float: "right"}}>
                                <Button variant="btn btn-outline-warning mr-2" type="submit">
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

export default UpdateCollaborateur