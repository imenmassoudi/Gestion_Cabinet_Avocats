import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useState } from 'react'
const AddTimbre = (refresh) => {
  const [libelle, setlibelle] = useState('')
  const [montant, setmontant] = useState(0)
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
      fetch('http://localhost:5000/parametre/timbre', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Timbre),
      }).then(() => {
        console.log('new Timbre added')
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
        <Button variant='primary' onClick={handleShow}>
          Ajouter un Timbre
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Ajouter un Timbre</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Libellé</Form.Label>
                <Form.Control
                  type='text'
                  required
                  placeholder='Entrer un libellé'
                  onChange={(e) => setlibelle(e.target.value)}
                />
                <Form.Control.Feedback type='invalid'>
                  Libellé est obligatoire!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Montant</Form.Label>
                <Form.Control
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
                  Ajouter
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

export default AddTimbre