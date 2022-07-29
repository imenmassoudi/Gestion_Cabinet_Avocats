
import {useState, useEffect} from "react";
import AddTache from "./add-tache";
import DeleteTache from "./delete-tache";
import jwt from 'jwt-decode'
import { useHistory } from 'react-router-dom'

const Tache  = () => {
    const history = useHistory()
    const [x,setX] = useState(1);
    const [data,setData]= useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            const Tache = jwt(token)
            if (!Tache) {
                localStorage.removeItem('token')
                history.push('/login')
            } else {
                fetch('http://localhost:5000/taches',{
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
                <h3 className="card-title">Liste des Taches</h3>

                <div className="card-tools">
                    {/*<Button variant="primary" onClick={handleShow}>
                        Ajouter un utilisateur
                    </Button>*/}
                    <AddTache refresh={refresh}/>
                </div>
            </div>
            <div className="card-body table-responsive p-0" style={{height: "300px"}}>
                <table className="table table-head-fixed text-nowrap">
                    <thead>
                    <tr>
                       
                        <th>Tache</th>
                        <th>dateCritique</th>
                        <th>dateRappel</th>
                        <th>resolu</th>
                        <th>course</th>
                        <th>lieux</th>
                        <th>Service</th>                        
                        <th>dateAudience</th>
                        <th>dateEcheance</th>
                        <th>Dossier</th>
                        
                        <th>supprimer</th>
                        <th>Modifier</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.map((data) => (
                            <tr key={data._id}>
                              
                                <td>{data.Tache}</td>
                                <td>{data.dateCritique}</td>
                                <td>{data.dateRappel}</td>
                                <td>{data.resolu}</td>
                                <td>{data.course}</td>
                                <td>{data.lieux}</td>
                                <td>{data.Service}</td>
                                <td>{data.dateAudience}</td>
                                <td>{data.dateEcheance}</td>
                                <td>{data.idDossier}</td>
                              
                                
                                <td>
                                    {/*  <i className="fas fa-trash" />*/}
                                    <DeleteTache refresh={refresh} id={data._id} />
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
export default Tache