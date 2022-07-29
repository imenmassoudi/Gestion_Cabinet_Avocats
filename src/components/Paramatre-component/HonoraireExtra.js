import React from 'react'
import { useState, useEffect } from 'react'
import jwt from 'jwt-decode'
import { useHistory } from 'react-router-dom'

import AddHonoraireExtra from './add-honoraireExtra'
import DeleteHonoraireExtra from './delete-honoraireExtra'
import UpdateHonoraireExtra from './update-honoraireExtra'

const HonoraireExtra = () => {
  const history = useHistory()
  const [x, setX] = useState(1)
  const [data, setData] = useState([])
  const refresh = () => {
    setX(x + 1)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      const user = jwt(token)
      if (!user) {
        localStorage.removeItem('token')
        history.push('/login')
      } else {
        fetch('http://localhost:5000/parametre/honoraireExtra', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            setData(data)
          })
          .catch((err) => {
            console.log('errrrr')
          })
      }
    }
  }, [x])

  return (
    <section className='content-wrapper'>
      <br />
      <br />
      <div className='row'>
        <div className='col-12'>
          <div className='card'>
            <div className='card-header'>
              <h1 className='card-title'>Liste des Honoraire en Extra</h1>

              <div className='card-tools'>
                <AddHonoraireExtra
                  refresh={refresh}
                  style={{}}
                ></AddHonoraireExtra>
              </div>
            </div>
            <div
              className='card-body table-responsive p-0'
              style={{ height: '500px' }}
            >
              <table className='table table-head-fixed text-nowrap'>
                <thead>
                  <tr>
                    <th>Libellé en Arabe</th>
                    <th>Libellé en Francais</th>
                    <th>Montant</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((data) => (
                    <tr key={data._id}>
                      <td>{data.libelle_arabe}</td>
                      <td>{data.libelle_francais}</td>
                      <td>{data.montant}</td>
                      <td style={{ display: 'flex' }}>
                        <DeleteHonoraireExtra
                          refresh={refresh}
                          id={data._id}
                          libelle_francais={data.libelle_francais}
                        ></DeleteHonoraireExtra>
                        &nbsp;&nbsp;&nbsp;
                        <UpdateHonoraireExtra
                          refresh={refresh}
                          id={data._id}
                          data={data}
                        ></UpdateHonoraireExtra>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HonoraireExtra