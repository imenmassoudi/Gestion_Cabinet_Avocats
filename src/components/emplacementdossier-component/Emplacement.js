
import {useState, useEffect} from "react";
import AddEmplacement from "./add-emplacement";
import UpdateEmplacement from "./update-emplacement";
import DeleteEmplacement from "./delete-emplacement";
import jwt from 'jwt-decode'
import { useHistory } from 'react-router-dom'

const Emplacement  = () => {
    const history = useHistory()
    const [x,setX] = useState(1);
    const [data,setData]= useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            const Emplacement = jwt(token)
            if (!Emplacement) {
                localStorage.removeItem('token')
                history.push('/login')
            } else {
                fetch('http://localhost:5000/emplacements',{
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
                <h3 className="card-title">Emplacement dossier</h3>

                <div className="card-tools">
                    {/*<Button variant="primary" onClick={handleShow}>
                        Ajouter un utilisateur
                    </Button>*/}
                    <AddEmplacement refresh={refresh}/>
                </div>
            </div>
            <div className="card-body table-responsive p-0" style={{height: "300px"}}>
                <table className="table table-head-fixed text-nowrap">
                    <thead>
                    <tr>
                       
                        <th>Libelle</th>
                       
                        <th>supprimer</th>
                        <th>Modifier</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.map((data) => (
                            <tr key={data._id}>
                              
                                <td>{data.libelle}</td>
                              
                                
                                <td>
                                    {/*  <i className="fas fa-trash" />*/}
                                    <DeleteEmplacement refresh={refresh} id={data._id} />
                                </td>
                                <td>
                                    {/*  <i className="fas fa-trash" />*/}
                                    <UpdateEmplacement refresh={refresh} id={data._id} data={data} />
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
export default Emplacement