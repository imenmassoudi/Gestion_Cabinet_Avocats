import React from 'react'
import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
const UpdateTimbre = ({ refresh, id, data }) => {
  const [libelle, setlibelle] = useState(data.libelle)
  const [montant, setmontant] = useState(data.montant)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    const Timbre = { libelle, montant }
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      fetch('http://localhost:5000/parametre/timbre/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Timbre),
      }).then(() => {
        console.log('Timbre updated')
        handleClose()
        refresh()
        // setX(x+1);
      })
    }
    setValidated(true)
  }
  return (
    <div className='row'>
      <div className='col-12'>
        <i className='fas fa-edit' onClick={handleShow} />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Modification</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Libellé</Form.Label>
                <Form.Control
                  value={libelle}
                  type='text'
                  placeholder='Entrer un libellé'
                  onChange={(e) => setlibelle(e.target.value)}
                />
                <Form.Control.Feedback type='invalid'>
                  Le libellé est obligatoire!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Montant</Form.Label>
                <Form.Control
                  value={montant}
                  type='number'
                  placeholder='Entrer le Montant'
                  required
                  onChange={(e) => setmontant(e.target.value)}
                />
                <Form.Control.Feedback type='invalid'>
                  Le Montant est obligatoire!
                </Form.Control.Feedback>
              </Form.Group>
              <hr />
              <div style={{ float: 'right' }}>
                <Button variant='primary mr-2' type='submit'>
                  Modifier
                </Button>
                <Button variant='secondary' onClick={handleClose}>
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

export default UpdateTimbre