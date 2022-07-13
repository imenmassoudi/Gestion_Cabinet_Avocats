import React from 'react'
import { useState, useEffect } from 'react'
import jwt from 'jwt-decode'
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const ParamGlobal = () => {
  const history = useHistory()
  const [x, setX] = useState(1)
  const [tva, setTva] = useState(0)
  const [timbre, setTimbre] = useState(0)
  const [transport, settransport] = useState(0)
  const [photocopie, setphotocopie] = useState(0)
  const handleUpdateParam = () => {
    fetch('http://localhost:5000/parametre/global', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tva, timbre, transport, photocopie }),
    }).then(() => {
      console.log('param global updated')
      alert('Mise à jour effectué!')
      setX(x + 1)
    })
  }
  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      const user = jwt(token)
      if (!user) {
        localStorage.removeItem('token')
        history.push('/login')
      } else {
        fetch('http://localhost:5000/parametre/global', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            setTva(data[0].tva)
            setTimbre(data[0].timbre)
            settransport(data[0].transport)
            setphotocopie(data[0].photocopie)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }, [x])

  return (
    <section className='content-wrapper'>
      <div style={{ margin: '10px' }}>
        <div>
          <h1>Parametre Global</h1>
        </div>

        <br />
        <table>
          <tr>
            <td>
              <h5>Timbre Fiscale &nbsp;&nbsp; </h5>
            </td>
            <td>
              <input
                type='number'
                step='any'
                className='form-control'
                value={timbre}
                onChange={(e) => setTimbre(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h5>Taux TVA </h5>
            </td>
            <td>
              <input
                type='number'
                step='any'
                className='form-control'
                value={tva}
                onChange={(e) => setTva(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h5>Prix Photocopie</h5>
            </td>
            <td>
              <input
                type='number'
                step='any'
                className='form-control'
                value={photocopie}
                onChange={(e) => setphotocopie(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h5>Montant transport par jours&nbsp;&nbsp;</h5>
            </td>
            <td>
              <input
                type='number'
                step='any'
                className='form-control'
                value={transport}
                onChange={(e) => settransport(e.target.value)}
              />
            </td>
          </tr>
        </table>
        <Button variant='success' onClick={handleUpdateParam}>
          Mise à jour
        </Button>
      </div>
    </section>
  )
}

export default ParamGlobal
