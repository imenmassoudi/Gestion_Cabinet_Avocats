import {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import jwt from "jwt-decode";
import {useHistory} from "react-router-dom";

const AddService = ({refresh,id}) => {
    const history = useHistory();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [lib, setLib] = useState("");
    const [data, setData] = useState([]);
    const [checked, setChecked] = useState([]);
    const [checked1, setChecked1] = useState([]);
    const [verif1, setVerif1] = useState(false);
    const [verif2, setVerif2] = useState(false);
    const [verif3, setVerif3] = useState(false);
    const [verif4, setVerif4] = useState(false);
    const [verif5, setVerif5] = useState(false);
    const [verif6, setVerif6] = useState(false);
    const [verif7, setVerif7] = useState(false);
    const [verif8, setVerif8] = useState(false);
    const [verif9, setVerif9] = useState(false);
    const [verif10, setVerif10] = useState(false);
    const [verif11, setVerif11] = useState(false);
    const [verif12, setVerif12] = useState(false);
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        var updatedList = [...checked];
        var updatedList1 = [...checked1];
        let isChecked = e.target.checked;
        if (isChecked) {
            if (e.target.value === "lundi") {
                setVerif2(true)

                updatedList.push("Lundi")

                //   setTabAudience(tab=> [tab, "Lundi"])
            } else if (e.target.value === "lundi1") {
                setVerif1(true)
                updatedList1.push("Lundi")


            } else if (e.target.value === "mardi") {
                setVerif4(true)
                updatedList.push("Mardi")



            } else if (e.target.value === "mardi1") {
                setVerif3(true)
                updatedList1.push("Mardi")


            } else if (e.target.value === "mercredi") {
                setVerif6(true)
                updatedList.push("Mercredi")


            } else if (e.target.value === "mercredi1") {
                setVerif5(true)
                updatedList1.push("Mercredi")


            } else if (e.target.value === "jeudi") {
                setVerif8(true)
                updatedList.push("Jeudi")

            } else if (e.target.value === "jeudi1") {
                setVerif7(true)
                updatedList1.push("Jeudi")


            } else if (e.target.value === "vendredi") {
                setVerif10(true)
                updatedList.push("Vendredi")


            } else if (e.target.value === "vendredi1") {
                setVerif9(true)
                updatedList1.push("Vendredi")


            } else if (e.target.value === "samedi") {
                setVerif12(true)
                updatedList.push("Samedi")


            } else if (e.target.value === "samedi1") {
                setVerif11(true)
                updatedList1.push("Samedi")


            }
        } else {
            if (e.target.value === "lundi") {
                setVerif2(false)
                updatedList.splice(checked.indexOf("Lundi"), 1);

            } else if (e.target.value === "lundi1") {
                setVerif1(false)
                updatedList1.splice(checked.indexOf("Lundi"), 1);


            } else if (e.target.value === "mardi") {
                setVerif4(false)
                updatedList.splice(checked.indexOf("Mardi"), 1);


            } else if (e.target.value === "mardi1") {
                setVerif3(false)
                updatedList1.splice(checked.indexOf("Mardi"), 1);

            } else if (e.target.value === "mercredi") {
                setVerif6(false)
                updatedList.splice(checked.indexOf("Mercredi"), 1);

            } else if (e.target.value === "mercredi1") {
                setVerif5(false)
                updatedList1.splice(checked.indexOf("Mercredi1"), 1);

            } else if (e.target.value === "jeudi") {
                setVerif8(false)
                updatedList.splice(checked.indexOf("Jeudi"), 1);


            } else if (e.target.value === "jeudi1") {
                setVerif7(false)
                updatedList1.splice(checked.indexOf("Jeudi"), 1);


            } else if (e.target.value === "vendredi") {
                setVerif10(false)
                updatedList.splice(checked.indexOf("Vendredi"), 1);


            } else if (e.target.value === "vendredi1") {
                setVerif9(false)
                updatedList1.splice(checked.indexOf("Vendredi"), 1);


            } else if (e.target.value === "samedi") {
                setVerif12(false)
                updatedList.splice(checked.indexOf("Samedi"), 1);


            } else if (e.target.value === "samedi1") {
                setVerif11(false)
                updatedList1.splice(checked.indexOf("Samedi"), 1);
            }


        }
        setChecked(updatedList);
        setChecked1(updatedList1);

        // do whatever you want with isChecked value
    }
    const handleSubmit = (event) => {
        event.preventDefault();
      /*  checked.map((e)=>{
            alert(e)
        })
        checked1.map((e)=>{
            alert("cource "+e)
        })
*/
        const form = event.currentTarget;
        const libelle = lib;
        const joursAud = checked;
        const joursCour = checked1;
        const idTrib = id
        const services = {libelle,joursAud,joursCour,idTrib};
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            fetch('http://localhost:5000/tribunaux/services/add',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(services)
            }).then(() => {console.log("new serv added");console.log(services)
                handleClose();
                refresh();
                // setX(x+1);
            }).catch((err) => console.log(err))
        }
        setValidated(true);
}


  return(

    <div className="row">
        <div className="col-12">
            <button type="button" className="btn btn-outline-dark btn-block col-md-3" style={{float:"right"}} onClick={handleShow}>
                <i className="fa fa-plus"/> Ajouter
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Ajouter tribunal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Libelle</Form.Label>
                            <Form.Control type="text" placeholder="Entrer un libelle .." required minLength="3"
                                          onChange={(e) => setLib(e.target.value)}/>
                            <Form.Text className="text-muted">
                                minimum 3 caractères
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                                Le nom est obligatoire!
                            </Form.Control.Feedback>
                        </Form.Group>
                        {['checkbox'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Label>Jour(s) d'audience</Form.Label><br/>
                                <Form.Check  onChange={e => handleChange(e)}
                                    inline
                                    label="Lundi"
                                             value="lundi"
                                             disabled={verif1}
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check onChange={e => handleChange(e)}
                                    inline
                                    label="Mardi"
                                     value="mardi"
                                            disabled={verif3}
                                            name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check onChange={e => handleChange(e)}
                                    inline
                                    label="Mercredi"
                                            value="mercredi"
                                    name="group1"
                                            disabled={verif5}
                                            type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check onChange={e => handleChange(e)}
                                    inline
                                    label="Jeudi"
                                    name="group1"
                                            value="jeudi"

                                            type={type}
                                            disabled={verif7}
                                            id={`inline-${type}-1`}
                                />
                                <Form.Check onChange={e => handleChange(e)}
                                    inline
                                    label="Vendredi"
                                    name="group1"
                                            value="vendredi"

                                            disabled={verif9}
                                            type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check onChange={e => handleChange(e)}
                                    inline
                                    label="Samedi"
                                            value="samedi"

                                            name="group1"
                                            disabled={verif11}
                                            type={type}
                                    id={`inline-${type}-1`}
                                />

                            </div>
                        ))}   {['checkbox'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Label>Jour(s) de cources</Form.Label><br/>
                                <Form.Check onChange={e => handleChange(e)}
                                    inline
                                    label="Lundi"
                                    value="lundi1"
                                    disabled={verif2}
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check onChange={e => handleChange(e)}
                                    inline
                                    label="Mardi"
                                            value="mardi1"
                                            disabled={verif4}

                                            name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check onChange={e => handleChange(e)}
                                    inline
                                    label="Mercredi"
                                    name="group1"
                                            value="mercredi1"
                                            type={type}
                                    disabled={verif6}

                                    id={`inline-${type}-1`}
                                />
                                <Form.Check onChange={e => handleChange(e)}
                                    inline
                                    label="Jeudi"
                                    name="group1"
                                            value="jeudi1"
                                            disabled={verif8}
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check onChange={e => handleChange(e)}
                                    inline
                                    label="Vendredi"
                                    name="group1"
                                            value="vendredi1"
                                            disabled={verif10}
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check onChange={e => handleChange(e)}
                                    inline
                                    label="Samedi"
                                            value="samedi1"
                                            name="group1"
                                    disabled={verif12}

                                    type={type}
                                    id={`inline-${type}-1`}
                                />

                            </div>
                        ))}
                        <hr/>
                        <div style={{float: "right"}}>
                            <Button variant="btn btn-outline-primary mr-2" type="submit" onClick={handleSubmit}>
                                Ajouter
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
export default AddService