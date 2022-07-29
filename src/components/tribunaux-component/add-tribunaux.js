import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";

const AddTribunaux = (refresh) => {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [lieu,setLieu] = useState("");
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const tribunal = {lieu};
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            fetch('http://localhost:5000/tribunaux/add',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(tribunal)
            }).then(() => {console.log("new trib added");
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
              <a className="btn btn-app" style={{marginTop:"20px"}} onClick={handleShow}>
                  <i className="fas fa-plus"/> Ajouter</a>
              <Modal show={show} onHide={handleClose}>
                  <Modal.Header>
                      <Modal.Title>Ajouter tribunal</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <Form noValidate validated={validated} onSubmit={handleSubmit}>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Nom de tribunal</Form.Label>
                              <Form.Control type="text" placeholder="Entrer un nom .." required minLength="3"
                                            onChange={(e) => setLieu(e.target.value)}/>
                              <Form.Text className="text-muted">
                                  minimum 3 caractères
                              </Form.Text>
                              <Form.Control.Feedback type="invalid">
                                  Le nom est obligatoire!
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

export default AddTribunaux