import {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";

const UpdatePrimegreffier = ({refresh,id,data}) => {
    const [show, setShow] = useState(false);
    const [libelle,setLibelle] = useState(data.libelle);
    const [montant,setMontant] = useState(data.montant);
    const [dissociable,setDissociable] = useState(data.dissociable);
    const [impot,setImpot] = useState(data.impot);
    const [mensuel,setMensuel] = useState(data.mensuel);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        const primegreffier = {libelle,montant,dissociable,impot,mensuel};
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            fetch('http://localhost:5000/primegreffiers/'+id,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(primegreffier)
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
                            
                            
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>libelle</Form.Label>
                              <Form.Control type="text" placeholder="Nom" required value={libelle}
                                            onChange={(e) => setLibelle(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le champ est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                        
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>montant</Form.Label>
                              <Form.Control type="text" placeholder="Montant" required value={montant}
                                            onChange={(e) => setMontant(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le montant est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
 
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>dissociable</Form.Label>
                              <Form.Control type="text" placeholder="Dissociable" required value={dissociable}
                                            onChange={(e) => setDissociable(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le champ est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>impot</Form.Label>
                              <Form.Control type="text" placeholder="Impot" required value={impot}
                                            onChange={(e) => setImpot(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le champ est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Mensuel</Form.Label>
                              <Form.Control type="text" placeholder="Mensuel" required value={mensuel}
                                            onChange={(e) => setMensuel(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le champ est obligatoire!
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

export default UpdatePrimegreffier