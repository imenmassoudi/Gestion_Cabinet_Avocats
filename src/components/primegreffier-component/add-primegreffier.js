import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";

const AddPrimegreffier = (refresh) => {
   
    const [libelle,setLibelle] = useState("");
    const [montant,setMontant] = useState("");
    const [dissociable,setDissociable] = useState("");
    const [impot,setImpot] = useState("");
    const [mensuel,setMensuel] = useState("");
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        const Primegreffier = {libelle,montant,dissociable,impot,mensuel};
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            fetch('http://localhost:5000/primegreffiers/add',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(Primegreffier)
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
                  Ajouter un prime
              </Button>
              <Modal show={show} onHide={handleClose}>
                  <Modal.Header>
                      <Modal.Title>Ajouter un prime</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>libelle</Form.Label>
                              <Form.Control type="text" placeholder="Nom" required
                                            onChange={(e) => setLibelle(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le champ est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                        
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>montant</Form.Label>
                              <Form.Control type="text" placeholder="Montant" required
                                            onChange={(e) => setMontant(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le montant est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
 
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>dissociable</Form.Label>
                              <Form.Control type="text" placeholder="Dissociable" required
                                            onChange={(e) => setDissociable(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le champ est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>impot</Form.Label>
                              <Form.Control type="text" placeholder="Impot" required 
                                            onChange={(e) => setImpot(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le champ est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           


                         
                              
                                
                                             
                           



                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Mensuel</Form.Label>
                              <Form.Control type="text" placeholder="Mensuel" required 
                                            onChange={(e) => setMensuel(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le champ est obligatoire!
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
export default AddPrimegreffier;