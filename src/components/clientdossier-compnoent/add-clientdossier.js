import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import Select from 'react-select';
import jwt from "jwt-decode";

const AddClientdossier = (refresh) =>{
 
   const [checked, setChecked] = useState([]);
   const [checked1, setChecked1] = useState([]);
   const [checked2, setChecked2] = useState([]);
   const [checked3, setChecked3] = useState([]);
   const [verif1, setVerif1] = useState(false);
   const [verif2, setVerif2] = useState(false);
   const [verif3, setVerif3] = useState(false);
   const [codeClient,setCodeClient] = useState("");
   const [matriculefiscale,setMatriculefiscale] = useState("");
   const [cin,setCin] = useState("");

    const [situationfiscale,setSituationfiscale] = useState("");
    const [typeclient,setTypeclient] = useState("");
    const [raisonsociale,setRaisonsociale] = useState("");
    const [activitecontribuale,setActivitecontribuale] = useState("");
    const [tel,setTel] = useState("");

     const [options,setOptions] = useState([]);
    const [show, setShow] = useState(false);

    




    const handleClose = () => setShow(false);
    const handleShow = () =>  {
        setShow(true)

    const token = localStorage.getItem('token')
   
        
        const option = []
        if (token) {
            const clients = jwt(token)
            if (!clients) {
                localStorage.removeItem('token')
                //   history.push('/login')
            } else {
                fetch('http://localhost:5000/clients',{
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
         
                    const clientdossier = {codeClient,matriculefiscale,situationfiscale,typeclient,raisonsociale,activitecontribuale,tel};
                    alert(clientdossier)
                    fetch('http://localhost:5000/client/add',{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body: JSON.stringify(clientdossier)
                    }).then(() => {console.log("new client dossier added");
                      //  handleClose();
                        //refresh();
                })
         
            
            setValidated(true);


    };
    const handleChange = (e) => {
        var updatedList = [...checked];
        var updatedList1 = [...checked1];
        var updatedList2 = [...checked2];

        let isChecked = e.target.checked;
        if (isChecked) {
            if (e.target.value === "nonassujetie") {
                setVerif2(true)
                setVerif3(true)

                updatedList.push("nonassujetie")

                //   setTabAudience(tab=> [tab, "Lundi"])
            } else if (e.target.value === "assujetie") {
                setVerif1(true)
                setVerif3(true)

                updatedList1.push("assujetie")


            } else if (e.target.value === "exonore") {
                setVerif1(true)
                setVerif2(true)

                updatedList2.push("exonore")

    
           
           
        } else {
            if (e.target.value === "assujetie") {
                setVerif2(false)
                setVerif3(false)

                updatedList.splice(checked.indexOf("assujetie"), 1);

            } else if (e.target.value === "nonassujetie") {
                setVerif1(false)
                setVerif3(false)

                updatedList1.splice(checked.indexOf("nonassujetie"), 1);


            }
            else if (e.target.value === "exonore") {
                setVerif1(false)
                setVerif2(false)

                updatedList2.splice(checked.indexOf("exonore"), 1);


            }
          
            
        }
    }
        setChecked(updatedList);
        setChecked1(updatedList1);
        setChecked2(updatedList2);

        // do whatever you want with isChecked value
    }
  
  return(
      <div className="row">
          <div className="col-12">
            
                      <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    
                        
                         
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>code client</Form.Label>
                              <Form.Control type="text" placeholder="Nom" required
                                            onChange={(e) => setCodeClient(e.target.value)}/>
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

                          {['checkbox'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Label>situation fiscale</Form.Label><br/>
                                <Form.Check  onChange={e => handleChange(e)}
                                    inline
                                    label="non assujetie"
                                             value="non assujetie"
                                             disabled={verif1}
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                         
                                <Form.Check onChange={e => handleChange(e)}
                                    inline
                                    label="assujetie"
                                    value="assujetie"
                                    disabled={verif2}
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                   <Form.Check onChange={e => handleChange(e)}
                                    inline
                                    label="exonoré"
                                    value="exonoré"
                                    disabled={verif3}
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                
                            </div>
                        ))}
                      
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>typeclient</Form.Label>
                              <Form.Control type="text" placeholder="type client" required
                                            onChange={(e) => setTypeclient(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  ville est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>raison sociale</Form.Label>
                              <Form.Control type="text" placeholder="raison sociale" required
                                            onChange={(e) => setRaisonsociale(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  La rue est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>activite contribuale</Form.Label>
                              <Form.Control type="text" placeholder="activitecontribuale" required
                                            onChange={(e) => setActivitecontribuale(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le num est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>tel</Form.Label>
                              <Form.Control type="text" placeholder="tel" required
                                            onChange={(e) => setTel(e.target.value)}/>
                              <Form.Control.Feedback type="invalid">
                                  Le code postale est obligatoire!
                              </Form.Control.Feedback>
                          </Form.Group>
                         
                      </Form>
               
          </div>
      </div>

  )
}
export default AddClientdossier;