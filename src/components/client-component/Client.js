import {useState, useEffect} from "react";

import jwt from 'jwt-decode'
import { useHistory } from 'react-router-dom'
import AddUser from "../user-component/add-user";
import AddClient from "./add-client";
import DeleteUser from "../user-component/delete-user";
import DeleteClient from "./delete-client";
import UpdateUser from "../user-component/update-user";
import UpdateClient from "./update-client";

const Client = () => {
    const history = useHistory()
    const [x, setX] = useState(1);
    const [searchTerm,setSearchTerm] = useState("")
    const [data, setData] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            const user = jwt(token)
            if (!user) {
                localStorage.removeItem('token')
                history.push('/login')
            } else {
                fetch('http://localhost:5000/clients', {
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`
                    },
                })
                    .then(res => {
                        return res.json();
                    }).then(data => {
                    setData(data)
                }).catch(err => {
                    console.log("errrrr");
                })
            }
        }

    }, [x])

    const refresh = () => {
        setX(x + 1);
    };

    return (
        <div className="content-wrapper">
            <div className="row">
                <div className="col-25">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Liste des client</h3>
                            <AddClient refresh={refresh} clientsList={data}/>



                        </div>

                        <div className="card-body">
                            <p style={{float:"right"}}>
                                <div className="input-group input-group-sm mb-3 right floated " >

                                    <input type="text" className="form-control-sm" aria-label="Small" onChange={event => {setSearchTerm(event.target.value)}}
                                           aria-describedby="inputGroup-sizing-sm" placeholder="chercher..." style={{borderTop:"none",borderRight:"none",borderLeft:"none"}}/>
                                    <div className="input-group-prepend" >
                                        <span className="input-group-text" id="inputGroup-sizing-sm" ><i className="fa fa-search"/></span>
                                    </div>
                                </div>

                            </p>
                            <table id="example2" className="table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th style={{textAlign:"center"}}>Collaborateur</th>
                                    <th style={{textAlign:"center"}}>Code client</th>
                                    <th style={{textAlign:"center"}}>Nom complet</th>
                                    <th style={{textAlign:"center"}}>Type client</th>
                                    <th style={{textAlign:"center"}}>Situation fiscale</th>
                                    <th style={{textAlign:"center"}}>Cin/Matricule</th>
                                    <th style={{textAlign:"center"}}>Adresse (ville,rue...)</th>
                                    <th style={{textAlign:"center"}}>Adresse</th>
                                    <th style={{textAlign:"center"}}>Activité contribuale</th>
                                    <th style={{textAlign:"center"}}>Tel</th>
                                    <th style={{textAlign:"center"}}>Fax</th>
                                    <th style={{textAlign:"center"}}>Email</th>
                                    <th style={{textAlign:"center"}}>Modifier</th>
                                    <th style={{textAlign:"center"}}>Supprimer</th>
                                </tr>
                                </thead>
                                <tbody>
                                {data.filter((data)=>{
                                    if(searchTerm === ""){
                                        return data
                                    }else  {if (data.collaborateur.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        ( data.codeClient.toLowerCase().includes(searchTerm.toLowerCase()))||
                                        (  data.nom.toLowerCase().includes(searchTerm.toLowerCase()))||
                                        (data.typeClient.toLowerCase().includes(searchTerm.toLowerCase()))||
                                        (data.situationFisc.toLowerCase().includes(searchTerm.toLowerCase()))||
                                        (data.cin.toLowerCase().includes(searchTerm.toLowerCase()))||
                                        (data.ville.toLowerCase().includes(searchTerm.toLowerCase()))||

                                        (data.rue.toLowerCase().includes(searchTerm.toLowerCase()))||
                                        (data.adresse.toLowerCase().includes(searchTerm.toLowerCase()))||
                                        (data.activiteCont.toLowerCase().includes(searchTerm.toLowerCase()))||
                                        (data.email.toLowerCase().includes(searchTerm.toLowerCase()))) {
                                        return data
                                    } }
                                }).map((data) => (
                                    <tr key={data._id}>
                                        <td style={{textAlign:"center"}}>{data.collaborateur}</td>
                                        <td style={{textAlign:"center"}}>{data.codeClient}</td>
                                        <td style={{textAlign:"center"}}>{data.nom}</td>
                                        <td style={{textAlign:"center"}}>{data.typeClient}</td>
                                        <td style={{textAlign:"center"}}>{data.situationFisc}</td>
                                        <td style={{textAlign:"center"}}>{data.cin}</td>
                                        <td style={{textAlign:"center"}}>{data.ville} {data.rue} {data.numero} {data.codeP} </td>
                                        <td style={{textAlign:"center"}}>{data.adresse}</td>
                                        <td style={{textAlign:"center"}}>{data.activiteCont}</td>
                                        <td style={{textAlign:"center"}}>{data.tel}</td>
                                        <td style={{textAlign:"center"}}>{data.fax}</td>
                                        <td style={{textAlign:"center"}}>{data.email}</td>
                                        <td style={{textAlign:"center"}}>
                                            <UpdateClient refresh={refresh} id={data._id} data={data}
                                            />

                                        </td>
                                        <td style={{textAlign:"center"}}>
                                            <DeleteClient refresh={refresh} id={data._id} nom={data.nom}/>

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

    )



}
export default Client

