import {Button, Modal} from "react-bootstrap";
import {useState} from "react";

const DeletePrimegreffier = ({refresh,id}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleDelete= () => {
            fetch('http://localhost:5000/primegreffiers/'+id, {
                method: 'DELETE',
            }).then(() => {
                handleClose()
                refresh()
            })
    };
    return(
        <div className="row">
            <div className="col-12">
            
                <i className="fas fa-trash" onClick={handleShow} />
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Supression</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Voulez vous supprimer le prime greffier {id}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Annuler
                        </Button>
                        <Button variant="primary" onClick={handleDelete}>
                            Supprimer
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>

    )
}
export default DeletePrimegreffier;