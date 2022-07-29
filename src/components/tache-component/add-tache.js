import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import Select from 'react-select';
import jwt from "jwt-decode";

const AddTache = (refresh) => {
   
    const [tache,setTache] = useState("");
    const [dateCritique,setDateCritique] = useState("");
    const [dateRappel,setDateRappel] = useState("");
    const [resolu,setResolu] = useState("");
    const [course,setCourse] = useState("");
    const [lieux,setLieux] = useState("");
    const [Service,setService] = useState("");
    const [dateAudience,setDateAudience] = useState("");
    const [dateEcheance,setDateEcheance] = useState("");
    const [idDossier,setIdDossier] = useState("");
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
                   
                    const Tache = {tache,dateCritique,dateRappel,resolu,course,lieux,Service,dateAudience,dateEcheance,idDossier};
                    alert(tache)
                    fetch('http://localhost:5000/tache/add',{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body: JSON.stringify(tache)
                    }).then(() => {console.log("new tache added");
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
                  Ajouter une tache
              </Button>
              <Modal show={show} onHide={handleClose}>
                  <Modal.Header>
                      <Modal.Title>Ajouter une tache</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Tache</Form.Label>
                              <Form.Control type="text" placeholder="tache" required
                                            onChange={(e) => setTache(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  champ obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                        
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>date Critique</Form.Label>
                              <Form.Control type="text" placeholder="date Critique" required
                                            onChange={(e) => setDateCritique(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le Prenom est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
 
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>date Rappel</Form.Label>
                              <Form.Control type="text" placeholder="date Rappel" required
                                            onChange={(e) => setDateRappel(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le champ est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>resolu</Form.Label>
                              <Form.Control type="text" placeholder="resolu" required
                                            onChange={(e) => setResolu(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  champ obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>course</Form.Label>
                              <Form.Control type="text" placeholder="course" required
                                            onChange={(e) => setCourse(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                 Champ obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>lieux</Form.Label>
                              <Form.Control type="text" placeholder="lieux" required
                                            onChange={(e) => setLieux(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  champ obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Service</Form.Label>
                              <Form.Control type="text" placeholder="Service" required
                                            onChange={(e) => setService(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  champ obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>dateAudience</Form.Label>
                              <Form.Control type="text" placeholder="dateAudience" required
                                            onChange={(e) => setDateAudience(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  champ obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>date Echeance</Form.Label>
                              <Form.Control type="text" placeholder="dateEcheance" required
                                            onChange={(e) => setDateEcheance(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  champ obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>idDossier</Form.Label>
                              <Select options={options}  onChange={(e) => setIdDossier(e.target.value)}/>
           
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
export default AddTache;