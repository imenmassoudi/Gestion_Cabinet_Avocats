import {useState, useEffect} from "react";
import AddAdversaire from "./add-adversaire";
import DeleteAdversaire from "./delete-adversaire";
import jwt from 'jwt-decode'
import { useHistory } from 'react-router-dom'

const Adversaire  = () => {
    const history = useHistory()
    const [x,setX] = useState(1);
    const [data,setData]= useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            const Adversaire = jwt(token)
            if (!Adversaire) {
                localStorage.removeItem('token')
                history.push('/login')
            } else {
                fetch('http://localhost:5000/adversaires',{
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
                <h3 className="card-title">les adversaires</h3>

                <div className="card-tools">
                    {/*<Button variant="primary" onClick={handleShow}>
                        Ajouter un utilisateur
                    </Button>*/}
                    <AddAdversaire refresh={refresh}/>
                </div>
            </div>
            <div className="card-body table-responsive p-0" style={{height: "300px"}}>
                <table className="table table-head-fixed text-nowrap">
                    <thead>
                    <tr>
         
                        <th>Nom</th>
                        <th>registre de commerce</th>
                        <th>adresse</th>
                        <th>adresse Designé</th>
                        <th>avocat</th>
                        <th>adresse Avocat</th>
                        <th>supprimer</th>
                
                    </tr>
                    </thead>
                    <tbody>
                        {data.map((data) => (
                            <tr key={data._id}>
                              
                                <td>{data.nom}</td>
                                <td>{data.registredecommerce}</td>
                                <td>{data.adresse}</td>
                                <td>{data.adresseDesigne}</td>
                                <td>{data.avocat}</td>
                                <td>{data.adresseAvocat}</td>

                                
                                <td>
                                    {/*  <i className="fas fa-trash" />*/}
                                    <DeleteAdversaire refresh={refresh} id={data._id} />
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
export default Adversaire