import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import Select from 'react-select';
import jwt from "jwt-decode";
const AddDemandeur = (refresh) => {
    const [nom,setNom] = useState("");
    const [cin,setCin] = useState("");
    const [adresse,setAdresse] = useState("");
    const [adressedesigne,setAdressedesigne] = useState("");
    const [tel,setTel] = useState("");
    const [fax,setFax] = useState("");
    const [numAffaire,setnumAffaire] = useState("");

    const [options,setOptions] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        const token = localStorage.getItem('token')
        
      
        const option = []
        if (token) {
            const dossiers = jwt(token)
            if (!dossiers) {
                localStorage.removeItem('token')
                //   history.push('/login')
            } else {
                fetch('http://localhost:5000/dossiers',{
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
                                    value: res._id,
                                    label: res.numAffaire,
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
            fetch('http://localhost:5000/dossiers/find/'+nomTape)
                .then((response) => response.json())
                .then((e) => {
                    const cpt = parseInt(e)+1;
                    alert(cpt+"ena")
                    let nom = nomTape[0]+cpt;
                    setNom(nom)
                   
                    const Demandeur = {nom,cin,adresse,adressedesigne,tel,fax,numAffaire}

                    alert(Demandeur)
                    fetch('http://localhost:5000/demandeur/add',{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body: JSON.stringify(Demandeur)
                    }).then(() => {console.log("new demandeur  added");
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
              <Button variant="primary" onClick={handleShow}>
                  Ajouter un demandeur
              </Button>
              <Modal show={show} onHide={handleClose}>
                  <Modal.Header>
                      <Modal.Title>Ajouter Demandeur</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Nom</Form.Label>
                              <Form.Control type="text" placeholder="Nom" required
                                            onChange={(e) => setNom(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le champ est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                        
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>CIN</Form.Label>
                              <Form.Control type="text" placeholder="Cin" required
                                            onChange={(e) => setCin(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le montant est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
 
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>adresse</Form.Label>
                              <Form.Control type="text" placeholder="Adresse" required
                                            onChange={(e) => setAdresse(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le champ est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>adresse designee</Form.Label>
                              <Form.Control type="text" placeholder="Adresse designée" required 
                                            onChange={(e) => setAdressedesigne(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le champ est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           

                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Tel</Form.Label>
                              <Form.Control type="text" placeholder="Tel" required 
                                            onChange={(e) => setTel(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le champ est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
        
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Fax</Form.Label>
                              <Form.Control type="text" placeholder="Fax" required 
                                            onChange={(e) => setFax(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le champ est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Dossier</Form.Label>
                              <Select options={options}  onChange={(e) => setnumAffaire(e.target.value)}/>
           
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
export default AddDemandeur;