import { Form} from "react-bootstrap";
import {useState} from "react";


const AddHonoraire = (refresh) => {
    const [mensuel,setMensuel] = useState("");

    const [Surdossier,setSurdossier] = useState("");
   
    const [honoraireAvocat,setHonoraireAvocat] = useState("");
    const [netApayer,setNetApayer] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        const Honoraire = {honoraireAvocat,netApayer};
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            fetch('http://localhost:5000/honoraire/add',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(Honoraire)
            }).then(() => {console.log("new blog added");
                handleClose();
                refresh();
                // setX(x+1);
            })
        }
        setValidated(true);
        
          }



  
  return(
      <div className="row">
          <div className="col-12">
           
          
                      <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        

     
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>honoraire avocat</Form.Label>
                              <Form.Control type="text" placeholder="montant" required
                                            onChange={(e) => setHonoraireAvocat(e.target.value)}/>
                      
                          </Form.Group>
                        
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>net a payer</Form.Label>
                              <Form.Control type="text" placeholder="type" required
                                            onChange={(e) => setNetApayer(e.target.value)}/>
               
                          </Form.Group>
 
                         
                        
                          <hr/>
                     

                      </Form>
                
          </div>
      </div>

  )
}
export default AddHonoraire;