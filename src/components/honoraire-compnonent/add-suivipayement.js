import { Form} from "react-bootstrap";
import {useState} from "react";


const AddSuivipayement = (refresh) => {


   
    const [totalpaye,setTotalpaye] = useState("");
    const [resteapayer,setResteapayer] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        const Suivipayement = {totalpaye,resteapayer};
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            fetch('http://localhost:5000/suivipayement/add',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(Suivipayement)
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
           
          
                      <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Total payé</Form.Label>
                              <Form.Control type="text" placeholder="montant" required
                                            onChange={(e) => setTotalpaye(e.target.value)}/>
                      
                          </Form.Group>
                        
                        
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>reste à payer</Form.Label>
                              <Form.Control type="text" placeholder="type" required
                                            onChange={(e) => setResteapayer(e.target.value)}/>
               
                          </Form.Group>
 
                         
                        
                          <hr/>
                     

                      </Form>
                
          </div>
      </div>

  )
}
export default AddSuivipayement;