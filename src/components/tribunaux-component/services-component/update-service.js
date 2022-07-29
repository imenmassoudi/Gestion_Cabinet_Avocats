import {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";

const UpdateService = ({refresh,id,idTr,data}) => {


    const [libelle,setLibelle] = useState(data.libelle);
    const [joursAud,setJoursAud] = useState(data.joursAud);
    const [joursCour,setJoursCour] = useState(data.joursCour);
    const [idTrib,setIdTrib] = useState(data.idTrib);
    const [checked, setChecked] = useState([]);
    const [checked1, setChecked1] = useState([]);
    const [checkedL, setCheckedL] = useState(data.joursAud.find((e)=> e === "Lundi"));
    const [checkedM, setCheckedM] = useState(data.joursAud.find((e)=> e === "Mardi"));
    const [checkedMe, setCheckedMe] = useState(data.joursAud.find((e)=> e === "Mercredi"));
    const [checkedJ, setCheckedJ] = useState(data.joursAud.find((e)=> e === "Jeudi"));
    const [checkedV, setCheckedV] = useState(data.joursAud.find((e)=> e === "Vendredi"));
    const [checkedS, setCheckedS] = useState(data.joursAud.find((e)=> e === "Samedi"));
    const [checkedL1, setCheckedL1] = useState(data.joursCour.find((e)=> e === "Lundi"));
    const [checkedM1, setCheckedM1] = useState(data.joursCour.find((e)=> e === "Mardi"));
    const [checkedMe1, setCheckedMe1] = useState(data.joursCour.find((e)=> e === "Mercredi"));
    const [checkedJ1, setCheckedJ1] = useState(data.joursCour.find((e)=> e === "Jeudi"));
    const [checkedV1, setCheckedV1] = useState(data.joursCour.find((e)=> e === "Vendredi"));
    const [checkedS1, setCheckedS1] = useState(data.joursCour.find((e)=> e === "Samedi"));

    const [verif1, setVerif1] = useState(checkedL1);
    const [verif2, setVerif2] = useState(checkedL);
    const [verif3, setVerif3] = useState(checkedM1);
    const [verif4, setVerif4] = useState(checkedM);
    const [verif5, setVerif5] = useState(checkedMe1);
    const [verif6, setVerif6] = useState(checkedMe);
    const [verif7, setVerif7] = useState(checkedJ1);
    const [verif8, setVerif8] = useState(checkedJ);
    const [verif9, setVerif9] = useState(checkedV1);
    const [verif10, setVerif10] = useState(checkedV);
    const [verif11, setVerif11] = useState(checkedS1);
    const [verif12, setVerif12] = useState(checkedS);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
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

    const handleShow = () => {setShow(true);setChecked(data.joursAud)
        setChecked1(data.joursCour)}

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(id)
        const form = event.currentTarget;
        const joursAud = checked;
        const joursCour = checked1;
        const idTrib = idTr
        const serv = {libelle,joursAud,joursCour,idTrib};
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            fetch('http://localhost:5000/tribunaux/services/'+id,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(serv)
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
                                <Form.Control type="text" placeholder="Libelle..." required value={libelle}
                                              onChange={(e) => setLibelle(e.target.value)}/>
                                <Form.Control.Feedback type="invalid">
                                    Le libelle est obligatoire!
                                </Form.Control.Feedback>
                            </Form.Group>
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Label>Jour(s) d'audience</Form.Label><br/>
                                    <Form.Check  onChange={e => handleChange(e)}
                                                 inline
                                                 label="Lundi"
                                                 value="lundi"
                                                 defaultChecked={checkedL}
                                                 disabled={verif1}
                                                 name="group1"
                                                 type={type}
                                                 id={`inline-${type}-1`}
                                    />
                                    <Form.Check onChange={e => handleChange(e)}
                                                inline
                                                label="Mardi"
                                                value="mardi"
                                                defaultChecked={checkedM}
                                                disabled={verif3}
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-1`}
                                    />
                                    <Form.Check onChange={e => handleChange(e)}
                                                inline
                                                label="Mercredi"
                                                value="mercredi"
                                                defaultChecked={checkedMe}
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
                                                defaultChecked={checkedJ}
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
                                                defaultChecked={checkedV}
                                                type={type}
                                                id={`inline-${type}-1`}
                                    />
                                    <Form.Check onChange={e => handleChange(e)}
                                                inline
                                                label="Samedi"
                                                value="samedi"
                                                defaultChecked={checkedS}
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
                                            defaultChecked={checkedL1}
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                />
                                <Form.Check onChange={e => handleChange(e)}
                                            inline
                                            label="Mardi"
                                            value="mardi1"
                                            defaultChecked={checkedM1}
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
                                            defaultChecked={checkedMe1}
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
                                            defaultChecked={checkedJ1}

                                            id={`inline-${type}-1`}
                                />
                                <Form.Check onChange={e => handleChange(e)}
                                            inline
                                            label="Vendredi"
                                            name="group1"
                                            defaultChecked={checkedV1}
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
                                            defaultChecked={checkedS1}
                                            type={type}
                                            id={`inline-${type}-1`}
                                />

                            </div>
                        ))}
                            <hr/>
                            <div style={{float: "right"}}>
                                <Button variant="btn btn-outline-primary mr-2" type="submit">
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

export default UpdateService