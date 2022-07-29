import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import Select from 'react-select';
import jwt from "jwt-decode";

const AddCollaborateurdossier = (refresh) =>{
 
   const [checked, setChecked] = useState([]);
   const [checked1, setChecked1] = useState([]);
   const [checked2, setChecked2] = useState([]);
   const [checked3, setChecked3] = useState([]);
   const [verif1, setVerif1] = useState(false);
   const [verif2, setVerif2] = useState(false);
   const [forfait,setForfait] = useState("");
   const [pourcentage,setPourcentage] = useState("");
   const [verif3, setVerif3] = useState(false);
   const [verif4, setVerif4] = useState(false);
    const [nom,setNom] = useState("");
    const [cin,setCin] = useState("");
    const [ville,setVille] = useState("");
    const [rue,setRue] = useState("");
    const [num,setNum] = useState("");
    const [code_postale,setCode_postale] = useState("");
    const [activite,setActivite] = useState("");
    const [tel,setTel] = useState("");
    const [modeReglement,setModeReglement] = useState([]);
    const [partCollaborateur,setPartCollaborateur] = useState([]);
    const [typeReglement,setTypeReglement] = useState([]);
     const [options,setOptions] = useState([]);
    const [show, setShow] = useState(false);

    




    const handleClose = () => setShow(false);
    const handleShow = () =>  {
        setShow(true)

    const token = localStorage.getItem('token')
   
        
        const option = []
        if (token) {
            const collaborateurs = jwt(token)
            if (!collaborateurs) {
                localStorage.removeItem('token')
                //   history.push('/login')
            } else {
                fetch('http://localhost:5000/collaborateurs',{
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
                                    label: res.nom+":"+res.cin,
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
         
                    const collaborateurdossier = {nom,cin,ville,rue,num,code_postale,activite,tel};
                    alert(collaborateurdossier)
                    fetch('http://localhost:5000/collaborateur/add',{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body: JSON.stringify(collaborateurdossier)
                    }).then(() => {console.log("new Collaborateur dossier added");
                      //  handleClose();
                        //refresh();
                })
         
            
            setValidated(true);


    };
    const handleChange = (e) => {
        var updatedList = [...checked];
        var updatedList1 = [...checked1];
      
        let isChecked = e.target.checked;
        if (isChecked) {
            if (e.target.value === "mensuel") {
                setVerif2(true)

                updatedList.push("Mensuel")

                //   setTabAudience(tab=> [tab, "Lundi"])
            } else if (e.target.value === "surdossier") {
                setVerif1(true)
                updatedList1.push("Mensuel")


            }
           
        } else {
            if (e.target.value === "mensuel") {
                setVerif2(false)
                updatedList.splice(checked.indexOf("Mensuel"), 1);

            } else if (e.target.value === "surdossier") {
                setVerif1(false)
                updatedList1.splice(checked.indexOf("Mensuel"), 1);


            }
          
            
        }
       
        setChecked(updatedList);
        setChecked1(updatedList1);
       
        // do whatever you want with isChecked value
    }
  
  
    const handleonChange = (e) => {
        let isChecked = e.target.checked;
        var updatedList2 = [...checked2];
        var updatedList3 = [...checked3];
    if(isChecked){
       
        
        if (e.target.value === "forfait") {
           setVerif4(true)
           updatedList2.push("Forfait")



       } else if (e.target.value === "pourcentage") {
           setVerif3(true)
           updatedList3.push("pourcentage")


       }}else{  if (e.target.value === "forfait") {
           setVerif4(false)
           updatedList2.splice(checked.indexOf("Forfait"), 1);


       } else if (e.target.value === "pourcentage") {
           setVerif3(false)
           updatedList3.splice(checked.indexOf("pourcentage"), 1);

       } }
    
       setChecked2(updatedList2);
       setChecked3(updatedList3);}
  return(
      <div className="row">
          <div className="col-12">
            
                      <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>part Collaborateur</Form.Label>
                              <Form.Control type="text" placeholder="part Collaborateur" required
                                            onChange={(e) => setPartCollaborateur(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le champ est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                         
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Nom</Form.Label>
                              <Form.Control type="text" placeholder="Nom" required
                                            onChange={(e) => setNom(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le nom est obligatoire!
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
                              <Form.Label>ville</Form.Label>
                              <Form.Control type="text" placeholder="ville" required
                                            onChange={(e) => setVille(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  ville est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>rue</Form.Label>
                              <Form.Control type="text" placeholder="rue" required
                                            onChange={(e) => setRue(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  La rue est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>num</Form.Label>
                              <Form.Control type="text" placeholder="num" required
                                            onChange={(e) => setNum(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le num est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>code_postale</Form.Label>
                              <Form.Control type="text" placeholder="code_postale" required
                                            onChange={(e) => setCode_postale(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le code postale est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                           <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>activité</Form.Label>
                              <Form.Control type="text" placeholder="activité" required
                                            onChange={(e) => setActivite(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  L'activité est obligatoire!
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
                              <Form.Label>part collaborateur</Form.Label>
                              <Form.Control type="text" placeholder="part collaborateur" required
                                            onChange={(e) => setPartCollaborateur(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Champ obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          {['checkbox'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Label>mode reglement</Form.Label><br/>
                                <Form.Check  onChange={e => handleChange(e)}
                                    inline
                                    label="Mensuel"
                                             value="mensuel"
                                             disabled={verif1}
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                         
                                <Form.Check onChange={e => handleChange(e)}
                                    inline
                                    label="sur Dossier"
                                    value="surdossier"
                                    disabled={verif2}
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                
                            </div>
                        ))}
                      {['checkbox'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Label>mode reglement</Form.Label><br/>
                                <Form.Check  onChange={e => handleonChange(e)}
                                    inline
                                    label="forfait"
                                             value="forfait"
                                             disabled={verif3}
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                         
                                <Form.Check onChange={e => handleonChange(e)}
                                    inline
                                    label="pourcentage"
                                    value="pourcentage"
                                    disabled={verif4}
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                
                            </div>
                        ))}
                         
                       
                          
                     
                       
                      </Form>
               
          </div>
      </div>

  )
}
export default AddCollaborateurdossier;