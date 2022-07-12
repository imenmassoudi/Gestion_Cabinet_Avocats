
import {useState, useEffect} from "react";
import AddCollaborateur from "./add-collaborateur";
import UpdateCollaborateur from "./update-collaborateur";
import DeleteCollaborateur from "./delete-collaborateur";
import jwt from 'jwt-decode'
import { useHistory } from 'react-router-dom'

const Collaborateur  = () => {
    const history = useHistory()
    const [x,setX] = useState(1);
    const [data,setData]= useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            const Collaborateur = jwt(token)
            if (!Collaborateur) {
                localStorage.removeItem('token')
                history.push('/login')
            } else {
                fetch('http://localhost:5000/collaborateurs',{
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
                <h3 className="card-title">Liste des collaborateur</h3>

                <div className="card-tools">
                    {/*<Button variant="primary" onClick={handleShow}>
                        Ajouter un utilisateur
                    </Button>*/}
                    <AddCollaborateur refresh={refresh}/>
                </div>
            </div>
            <div className="card-body table-responsive p-0" style={{height: "300px"}}>
                <table className="table table-head-fixed text-nowrap">
                    <thead>
                    <tr>
                       
                        <th>Nom</th>
                        <th>Cin</th>
                        <th>Ville</th>
                        <th>Rue</th>
                        <th>Num</th>
                        <th>Code posatale</th>
                        <th>Activité</th>                        
                        <th>Tel</th>
                        <th>Email</th>
                        <th>Matricule</th>
                        <th>supprimer</th>
                        <th>Modifier</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.map((data) => (
                            <tr key={data._id}>
                              
                                <td>{data.nom}</td>
                                <td>{data.cin}</td>
                                <td>{data.ville}</td>
                                <td>{data.rue}</td>
                                <td>{data.num}</td>
                                <td>{data.code_postale}</td>
                                <td>{data.activite}</td>
                                <td>{data.tel}</td>
                                <td>{data.email}</td>
                                <td>{data.matricule}</td>
                                
                                <td>
                                    {/*  <i className="fas fa-trash" />*/}
                                    <DeleteCollaborateur refresh={refresh} id={data._id} />
                                </td>
                                <td>
                                    {/*  <i className="fas fa-trash" />*/}
                                    <UpdateCollaborateur refresh={refresh} id={data._id} data={data} />
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
export default Collaborateur