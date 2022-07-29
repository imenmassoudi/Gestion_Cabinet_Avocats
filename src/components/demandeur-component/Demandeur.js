
import {useState, useEffect} from "react";
import AddDemandeur from "./add-demandeur";
import DeleteDemandeur from "./delete-demandeur";
import AddClientdossier from "../clientdossier-compnoent/add-clientdossier";
import jwt from 'jwt-decode'
import { useHistory } from 'react-router-dom'

const Demandeur  = () => {
    const history = useHistory()
    const [x,setX] = useState(1);
    const [data,setData]= useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            const Demandeur = jwt(token)
            if (!Demandeur) {
                localStorage.removeItem('token')
                history.push('/login')
            } else {
                fetch('http://localhost:5000/demandeurs',{
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
        <h3 className="card-title">client et demandeur</h3>
<br />
<br />
       <AddClientdossier refresh={refresh}/>

       <br />
<br />
        <div className="row">

            <div className="col-12">
        <div className="card">
            <div className="card-header">
             

                <div className="card-tools">
                    {/*<Button variant="primary" onClick={handleShow}>
                        Ajouter un utilisateur
                    </Button>*/}
                    <AddDemandeur refresh={refresh}/>
                </div>
            </div>
            <div className="card-body table-responsive p-0" style={{height: "300px"}}>
                <table className="table table-head-fixed text-nowrap">
                    <thead>
                    <tr>
                       
                        <th>Nom</th>
                        <th>CIN</th>
                        <th>adresse</th>
                        <th>adresse designé</th>
                        <th>Tel</th>
                        <th>fax</th>
                        <th>Dossier</th>

                        <th>supprimer</th>
                        <th>Modifier</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.map((data) => (
                            <tr key={data._id}>
                              
                                <td>{data.nom}</td>
                                <td>{data.cin}</td>
                                <td>{data.adresse}</td>
                                <td>{data.adressedesigne}</td>
                                <td>{data.tel}</td>
                                <td>{data.fax}</td>
                                <th>{data.idDossier}</th>


                                
                                <td>
                                    {/*  <i className="fas fa-trash" />*/}
                                    <DeleteDemandeur refresh={refresh} id={data._id} />
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
export default Demandeur