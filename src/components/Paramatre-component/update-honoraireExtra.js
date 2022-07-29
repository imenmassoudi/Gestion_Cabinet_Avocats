import React from 'react'
import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const UpdateHonoraireExtra = ({ refresh, id, data }) => {
  const [libelle_arabe, setlibelle_arabe] = useState(data.libelle_arabe)
  const [libelle_francais, setlibelle_francais] = useState(
    data.libelle_francais
  )
  const [montant, setmontant] = useState(data.montant)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    const HonoraireExtra = { libelle_arabe, libelle_francais, montant }
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      fetch('http://localhost:5000/parametre/honoraireExtra/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(HonoraireExtra),
      }).then(() => {
        console.log('HonoraireExtra updated')
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
                <Form.Label>Libellé en Arabe</Form.Label>
                <Form.Control
                  value={libelle_arabe}
                  type='text'
                  placeholder='Entrer un libellé en Arabe'
                  onChange={(e) => setlibelle_arabe(e.target.value)}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Libellé en Francais</Form.Label>
                <Form.Control
                  value={libelle_francais}
                  type='text'
                  placeholder='Entrer un libellé en Francais'
                  onChange={(e) => setlibelle_francais(e.target.value)}
                />
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

export default UpdateHonoraireExtra