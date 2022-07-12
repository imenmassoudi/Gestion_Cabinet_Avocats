
import {useState, useEffect} from "react";
import AddPrimegreffier from "./add-primegreffier";
import UpdatePrimegreffier from "./update-primegreffier";
import DeletePrimegreffier from "./delete-primegreffier";
import jwt from 'jwt-decode'
import { useHistory } from 'react-router-dom'

const Primegreffier  = () => {
    const history = useHistory()
    const [x,setX] = useState(1);
    const [data,setData]= useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            const Primegreffier = jwt(token)
            if (!Primegreffier) {
                localStorage.removeItem('token')
                history.push('/login')
            } else {
                fetch('http://localhost:5000/primegreffiers',{
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization" : `Bearer ${token}`
                    },
                })
                    .then(res => {
                        return res.json();
                    }).then(data => {
                    setData(data)
                }).catch(err =>{
                    console.log("errrrr");
                })
            }
        }

        },[x])

    const refresh = () => {
        setX(x+1);
    };

return(
    <div className='content-wrapper'>
        <br/>
        <br/>
        <div className="row">
            <div className="col-12">
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Liste des primes</h3>

                <div className="card-tools">
                    {/*<Button variant="primary" onClick={handleShow}>
                        Ajouter un utilisateur
                    </Button>*/}
                    <AddPrimegreffier refresh={refresh}/>
                </div>
            </div>
            <div className="card-body table-responsive p-0" style={{height: "300px"}}>
                <table className="table table-head-fixed text-nowrap">
                    <thead>
                    <tr>
                       
                        <th>Libelle</th>
                        <th>Montant</th>
                        <th>dissociable</th>
                        <th>impot</th>
                        <th>Mensuel</th>
                        <th>supprimer</th>
                        <th>Modifier</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.map((data) => (
                            <tr key={data._id}>
                              
                                <td>{data.libelle}</td>
                                <td>{data.montant}</td>
                                <td>{data.dissociable}</td>
                                <td>{data.impot}</td>
                                <td>{data.mensuel}</td>
                               
                                
                                <td>
                                    {/*  <i className="fas fa-trash" />*/}
                                    <DeletePrimegreffier refresh={refresh} id={data._id} />
                                </td>
                                <td>
                                    {/*  <i className="fas fa-trash" />*/}
                                    <UpdatePrimegreffier refresh={refresh} id={data._id} data={data} />
                                </td>
                            </tr>

                        ))}

                    </tbody>
                </table>
            </div>
        </div>
            </div>
        </div>
    </div>


)}
export default Primegreffier