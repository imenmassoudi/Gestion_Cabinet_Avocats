import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";

const AddGreffier = (refresh) => {
   
    const [nom,setNom] = useState("");
    const [prenom,setPrenom] = useState("");
    const [date_nais,setDate_nais] = useState("");
    const [adresse,setAdresse] = useState("");
    const [etat_civile,setEtat_civile] = useState("");
    const [nombre_e,setNombre_e] = useState("");
    const [type_paye,setType_paye] = useState("");
    const [base,setBase] = useState("");
    const [cin,setCin] = useState("");
    const [tel,setTel] = useState("");
    const [categorie,setCategorie] = useState("");
    const [echelon,setEchelon] = useState("");
    const [cnss,setCnss] = useState("");
    const [contrat,setContrat] = useState("");
    const [sexe,setSexe] = useState("");
    const [date_emb,setDate_emb] = useState("");
    const [modalite,setModalite] = useState("");
    const [actif,setActif] = useState("");
    const [chef,setChef] = useState("");
    const [gerant,setGerant] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        const Greffier = {nom,prenom,date_nais,adresse,etat_civile,nombre_e,type_paye,base,cin,tel,categorie,echelon,cnss,contrat,sexe,date_emb,modalite,actif,chef,gerant};
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            fetch('http://localhost:5000/greffiers/add',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(Greffier)
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
                  Ajouter un greffier
              </Button>
              <Modal show={show} onHide={handleClose}>
                  <Modal.Header>
                      <Modal.Title>Ajouter un greffier</Modal.Title>
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
                              <Form.Label>Prenom</Form.Label>
                              <Form.Control type="text" placeholder="Prenom" required
                                            onChange={(e) => setPrenom(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le Prenom est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
 
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>date_nais</Form.Label>
                              <Form.Control type="text" placeholder="Date_nais" required
                                            onChange={(e) => setDate_nais(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  La date de naissance est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>adresse</Form.Label>
                              <Form.Control type="text" placeholder="Adresse" required
                                            onChange={(e) => setAdresse(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le adresse est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Etat_civile</Form.Label>
                              <Form.Control type="text" placeholder="Etat_civile" required
                                            onChange={(e) => setEtat_civile(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  L'etat_civile est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>nombre_e</Form.Label>
                              <Form.Control type="text" placeholder="Nombre_e" required
                                            onChange={(e) => setNombre_e(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le nombre_e est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>type_paye</Form.Label>
                              <Form.Control type="text" placeholder="type_paye" required
                                            onChange={(e) => setType_paye(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le type_paye est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>base</Form.Label>
                              <Form.Control type="text" placeholder="base" required
                                            onChange={(e) => setBase(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  La base est obligatoire!
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
                              <Form.Label>tel</Form.Label>
                              <Form.Control type="text" placeholder="tel" required
                                            onChange={(e) => setTel(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le tel est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>categorie</Form.Label>
                              <Form.Control type="text" placeholder="categorie" required
                                            onChange={(e) => setCategorie(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  La categorie est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>echelon</Form.Label>
                              <Form.Control type="text" placeholder="echelon" required
                                            onChange={(e) => setEchelon(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  L'echelon est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                          

                          
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>cnss</Form.Label>
                              <Form.Control type="text" placeholder="Cnss" required
                                            onChange={(e) => setCnss(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  cnss est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>


                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>contrat</Form.Label>
                              <Form.Control type="text" placeholder="Contrat" required
                                            onChange={(e) => setContrat(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le contrat est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>sexe</Form.Label>
                              <Form.Control type="text" placeholder="Sexe" required
                                            onChange={(e) => setSexe(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le sexe est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>


                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>date_emb</Form.Label>
                              <Form.Control type="text" placeholder="Date_emb" required
                                            onChange={(e) => setDate_emb(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  La date_emb est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>


                           <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>modalite</Form.Label>
                              <Form.Control type="text" placeholder="Modalite" required
                                            onChange={(e) => setModalite(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  La modalite est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                       
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>actif</Form.Label>
                              <Form.Control type="text" placeholder="Actif" required
                                            onChange={(e) => setActif(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le champ actif est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>


                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>chef</Form.Label>
                              <Form.Control type="text" placeholder="Chef" required
                                            onChange={(e) => setChef(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  le champ est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>gerant</Form.Label>
                              <Form.Control type="text" placeholder="Gerant" required
                                            onChange={(e) => setGerant(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  le champ est obligatoire!
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
export default AddGreffier;