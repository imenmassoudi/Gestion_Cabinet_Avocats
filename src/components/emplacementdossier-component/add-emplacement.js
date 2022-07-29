import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";

const AddEmplacement = (refresh) => {
   
    const [libelle,setLibelle] = useState("");
    
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        const Emplacement = {libelle};
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            fetch('http://localhost:5000/emplacements/add',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(Emplacement)
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
                  Ajouter un emplacement
              </Button>
              <Modal show={show} onHide={handleClose}>
                  <Modal.Header>
                      <Modal.Title>Ajouter un emplacement dossier</Modal.Title>
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
export default AddEmplacement;