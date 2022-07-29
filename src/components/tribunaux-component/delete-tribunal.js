import {useState} from "react";
import {Button, Modal} from "react-bootstrap";

const DeleteTribunal = ({refresh,id}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleDelete= () => {
        alert('http://localhost:5000/tribunaux/'+id)
        fetch('http://localhost:5000/tribunaux/'+id, {
            method: 'DELETE',
        }).then(() => {
            handleClose()
            refresh()
        })
    };
    return(
        <div className="row">
            <div className="col-12">
                <i  style={{display:"inline-block"}} className="fas fa-trash" onClick={handleShow} />
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Supression</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Vous êtes sur?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Annuler
                        </Button>
                        <Button variant="btn btn-outline-danger" onClick={handleDelete}>
                            Supprimer
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>

    )
}

export default DeleteTribunal