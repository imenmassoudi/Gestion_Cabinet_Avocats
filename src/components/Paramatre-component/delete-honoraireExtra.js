import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useState } from 'react'

const DeleteHonoraireExtra = ({ refresh, id, libelle_francais }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleDelete = () => {
    fetch('http://localhost:5000/parametre/honoraireExtra/' + id, {
      method: 'DELETE',
    }).then(() => {
      handleClose()
      refresh()
    })
  }
  return (
    <div className='row'>
      <div className='col-12'>
        <i
          className='fas fa-trash'
          onClick={handleShow}
          style={{ cursor: 'pointer' }}
        />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Supression</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Voulez vous supprimer l'honoraire <b>{libelle_francais}</b>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Annuler
            </Button>
            <Button variant='primary' onClick={handleDelete}>
              Supprimer
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default DeleteHonoraireExtra