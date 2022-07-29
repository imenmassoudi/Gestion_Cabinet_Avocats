import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";

const AddAdversaire = (refresh) => {
   
    const [registredecommerce,setRegistredecommerce] = useState("");
    const [nom,setNom] = useState("");
    const [adresse,setAdresse] = useState("");
    const [adresseDesigne,setAdresseDesigne] = useState("");
    const [avocat,setAvocat] = useState("");
    const [adresseAvocat,setAdresseAvocat] = useState("");
    


    
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        const Adversaire = {nom,registredecommerce,adresse,adresseDesigne,avocat,adresseAvocat};
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            fetch('http://localhost:5000/adversaire/add',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(Adversaire)
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
                  Ajouter un adversaire
              </Button>
              <Modal show={show} onHide={handleClose}>
                  <Modal.Header>
                      <Modal.Title>Ajouter un adversaire</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Nom</Form.Label>
                              <Form.Control type="text" placeholder="Nom" required
                                            onChange={(e) => setNom(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  ce champ est obligatoire!
                              </Form.Control.Feedback>
                             
                              <Form.Label>Registre de commerce</Form.Label>
                              <Form.Control type="text" placeholder="Registre de commerce" 
                                            onChange={(e) => setRegistredecommerce(e.target.value)}/>
                             
                              <Form.Label>Adresse</Form.Label>
                              <Form.Control type="text" placeholder="Adresse" 
                                            onChange={(e) => setAdresse(e.target.value)}/>
                             
                              <Form.Label>Adresse designé</Form.Label>
                               <Form.Control type="text" placeholder="Adresse de signe" 
                                            onChange={(e) => setAdresseDesigne(e.target.value)}/>
                             
                               <Form.Label>Avocat</Form.Label>
                              <Form.Control type="text" placeholder="Avocat" 
                                        onChange={(e) => setAvocat(e.target.value)}/>
                             
                              <Form.Label>Adresse de l'avocat</Form.Label>
                             <Form.Control type="text" placeholder="Adresse de l'avocat" 
                                            onChange={(e) => setAdresseAvocat(e.target.value)}/>
                          
                        
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
export default AddAdversaire;