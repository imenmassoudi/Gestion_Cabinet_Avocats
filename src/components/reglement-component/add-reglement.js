import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import Select from 'react-select';
import jwt from "jwt-decode";

const AddReglement = (refresh) => {


   
    const [montant,setMontant] = useState("");
    const [type,setType] = useState("");
    const [bare,setBare] = useState("");
    const [numOperation,setNumOperation] = useState("");
    const [banque,setBanque] = useState("");
    const [porteur,setPorteur] = useState("");
    const [echeance,setEcheance] = useState("");
    const [numAffaire,setNumAffaire] = useState("");
    const [options,setOptions] = useState([]);
    const [nom,setNom] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () =>  {
        setShow(true)

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
                   const Reglement = {montant,type,bare,numOperation,banque,porteur,echeance,numAffaire};
              
                    alert(Reglement)
                    fetch('http://localhost:5000/reglements/add',{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body: JSON.stringify(Reglement)
                    }).then(() => {console.log("new reglement added");
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
                  Ajouter une Reglement
              </Button>
              <Modal show={show} onHide={handleClose}>
                  <Modal.Header>
                      <Modal.Title>Ajouter Reglement</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>

                  

                      <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>montant</Form.Label>
                              <Form.Control type="text" placeholder="montant" required
                                            onChange={(e) => setMontant(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  champ obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                        
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>type</Form.Label>
                              <Form.Control type="text" placeholder="type" required
                                            onChange={(e) => setType(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                champ obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
 
                         
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>bare</Form.Label>
                              <Form.Control type="text" placeholder="bare " required
                                            onChange={(e) => setBare(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le champ est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>num Operation</Form.Label>
                              <Form.Control type="text" placeholder="resolu" required
                                            onChange={(e) => setNumOperation(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  champ obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>banque</Form.Label>
                              <Form.Control type="text" placeholder="banque" required
                                            onChange={(e) => setBanque(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                 Champ obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>porteur</Form.Label>
                              <Form.Control type="text" placeholder="porteur" required
                                            onChange={(e) => setPorteur(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  champ obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>echeance</Form.Label>
                              <Form.Control type="text" placeholder="echeance" required
                                            onChange={(e) => setEcheance(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  champ obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                      

                           
                        
                        

                           
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>num affaire</Form.Label>
                              <Select options={options}  onChange={(e) => setNumAffaire(e.target.value)}/>
           
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
export default AddReglement;