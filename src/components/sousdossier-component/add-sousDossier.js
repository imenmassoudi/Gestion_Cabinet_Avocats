import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import Select from 'react-select';
import jwt from "jwt-decode";



const AddSousDossier = (refresh) => {
const [codedossier,setCodedossier] = useState("");
const [typeDossier,setTypeDossier] = useState("");
const [mission,setMission] = useState("");
const [emplacement,setEmplacement] = useState("");
const [dateCreation,setDatecreation] = useState("")
const [observation,setObservation] = useState("");
const [numAffaire,setNumAffaire] = useState("");
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
                   
                    const SousDossier = { idDossier,
                        mission,
                        emplacement,
                        dateCreation,
                        observation,
                        numAffaire,
                        };
                    alert(SousDossier)
                    fetch('http://localhost:5000/sousdossier/add',{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body: JSON.stringify(SousDossier)
                    }).then(() => {console.log("new sous dossier added");
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

                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    

               
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>code dossier</Form.Label>
                          <Select options={options}  onChange={(e) => setIdDossier(e.target.value)}/>
       
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>mission</Form.Label>
                          <Form.Control type="text" placeholder="mission" required
                                        onChange={(e) => setMission(e.target.value)}/>
                          <Form.Control.Feedback type="invalid">
                              champ obligatoire!
                          </Form.Control.Feedback>
                      </Form.Group>
                    
                    
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>emplacement</Form.Label>
                          <Form.Control type="text" placeholder="emplacement" required
                                        onChange={(e) => setEmplacement(e.target.value)}/>
                          <Form.Control.Feedback type="invalid">
                              Champ  obligatoire!
                          </Form.Control.Feedback>
                      </Form.Group>
                 
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>date Creation</Form.Label>
                          <Form.Control type="date" placeholder="date creation" required
                                        onChange={(e) => setDatecreation(e.target.value)}/>
                          <Form.Control.Feedback type="invalid">
                              champ obligatoire!
                          </Form.Control.Feedback>
                      </Form.Group>

                    
                 
                    
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>observation</Form.Label>
                          <Form.Control type="text" placeholder="observation" required
                                        onChange={(e) => setObservation(e.target.value)}/>
                          <Form.Control.Feedback type="invalid">
                              champ obligatoire!
                          </Form.Control.Feedback>
                      </Form.Group>

                       
                    
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>num Affaire</Form.Label>
                          <Form.Control type="text" placeholder="num Affaire" required
                                        onChange={(e) => setNumAffaire(e.target.value)}/>
                          <Form.Control.Feedback type="invalid">
                             Champ obligatoire!
                          </Form.Control.Feedback>
                      </Form.Group>

                       
                    
                       
                      <hr/>
                    
                  </Form>
              
         
      </div>
  </div>

)
}
export default AddSousDossier;