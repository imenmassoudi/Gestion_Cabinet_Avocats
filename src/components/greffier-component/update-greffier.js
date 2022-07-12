import {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";

const UpdateGreffier = ({refresh,id,data}) => {
    const [show, setShow] = useState(false);
    const [nom,setNom] = useState(data.nom);
    const [prenom,setPrenom] = useState(data.prenom);
    const [date_nais,setDate_nais] = useState(data.date_nais);
    const [adresse,setAdresse] = useState(data.adresse);
    const [etat_civile,setEtat_civile] = useState(data.etat_civile);
    const [nombre_e,setNombre_e] = useState(data.nombre_e);
    const [type_paye,setType_paye] = useState(data.type_paye);
    const [base,setBase] = useState(data.base);
    const [cin,setCin] = useState(data.cin);
    const [tel,setTel] = useState(data.tel);
    const [categorie,setCategorie] = useState(data.categorie);
    const [echelon,setEchelon] = useState(data.echelon);
    const [cnss,setCnss] = useState(data.cnss);
    const [contrat,setContrat] = useState(data.contrat);
    const [sexe,setSexe] = useState(data.sexe);
    const [date_emb,setDate_emb] = useState(data.date_emb);
    const [modalite,setModalite] = useState(data.modalite);
    const [actif,setActif] = useState(data.actif);
    const [chef,setChef] = useState(data.chef);
    const [gerant,setGerant] = useState(data.gerant);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        const greffier = {nom,prenom,date_nais,adresse,etat_civile,nombre_e,type_paye,base,cin,tel,categorie,echelon,cnss,contrat,sexe,date_emb,modalite,actif,chef,gerant};
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            fetch('http://localhost:5000/greffiers/'+id,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(greffier)
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
                              <Form.Label>Nom</Form.Label>
                              <Form.Control type="text" placeholder="Nom" required value={nom}
                                            onChange={(e) => setNom(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le nom est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                        
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Prenom</Form.Label>
                              <Form.Control type="text" placeholder="Prenom" required value={prenom}
                                            onChange={(e) => setPrenom(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le Prenom est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
 
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>date_nais</Form.Label>
                              <Form.Control type="text" placeholder="Date_nais" required value={date_nais}
                                            onChange={(e) => setDate_nais(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  La date de naissance est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>adresse</Form.Label>
                              <Form.Control type="text" placeholder="Adresse" required value={adresse}
                                            onChange={(e) => setAdresse(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le adresse est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Etat_civile</Form.Label>
                              <Form.Control type="text" placeholder="Etat_civile" required value={etat_civile}
                                            onChange={(e) => setEtat_civile(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  L'etat_civile est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>nombre_e</Form.Label>
                              <Form.Control type="text" placeholder="Nombre_e" required value={nombre_e}
                                            onChange={(e) => setNombre_e(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le nombre_e est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>type_paye</Form.Label>
                              <Form.Control type="text" placeholder="type_paye" required value={type_paye}
                                            onChange={(e) => setType_paye(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le type_paye est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>base</Form.Label>
                              <Form.Control type="text" placeholder="base" required value={base}
                                            onChange={(e) => setBase(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  La base est obligatoire!
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
                              <Form.Label>tel</Form.Label>
                              <Form.Control type="text" placeholder="tel" required value={tel}
                                            onChange={(e) => setTel(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le tel est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>categorie</Form.Label>
                              <Form.Control type="text" placeholder="categorie" required value={categorie}
                                            onChange={(e) => setCategorie(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  La categorie est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                           
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>echelon</Form.Label>
                              <Form.Control type="text" placeholder="echelon" required value={echelon}
                                            onChange={(e) => setEchelon(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  L'echelon est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                          

                          
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>cnss</Form.Label>
                              <Form.Control type="text" placeholder="ville" required value={cnss}
                                            onChange={(e) => setCnss(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  cnss est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>


                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>contrat</Form.Label>
                              <Form.Control type="text" placeholder="contrat" required value={contrat}
                                            onChange={(e) => setContrat(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le contrat est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>sexe</Form.Label>
                              <Form.Control type="text" placeholder="sexe" required value={sexe}
                                            onChange={(e) => setSexe(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le sexe est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>


                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>date_emb</Form.Label>
                              <Form.Control type="text" placeholder="date_emb" required value={date_emb}
                                            onChange={(e) => setDate_emb(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  La date_emb est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>


                           <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>modalite</Form.Label>
                              <Form.Control type="text" placeholder="modalite" required value={modalite}
                                            onChange={(e) => setModalite(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  La modalite est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                       
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>actif</Form.Label>
                              <Form.Control type="text" placeholder="actif" required value={actif}
                                            onChange={(e) => setActif(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le champ actif est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>


                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>chef</Form.Label>
                              <Form.Control type="text" placeholder="chef" required value={chef}
                                            onChange={(e) => setChef(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  le champ est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>gerant</Form.Label>
                              <Form.Control type="text" placeholder="gerant" required value={gerant}
                                            onChange={(e) => setGerant(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  le champ est obligatoire!
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

export default UpdateGreffier