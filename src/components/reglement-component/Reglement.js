
import {useState, useEffect} from "react";
import AddReglement from "./add-reglement";
import DeleteReglement from "./delete-reglement";
import AddHonoraire from "../honoraire-compnonent/add-honoraire";
import AddSuivipayement from "../honoraire-compnonent/add-suivipayement";
import jwt from 'jwt-decode'
import { useHistory } from 'react-router-dom'



const Reglement  = () => {
    const history = useHistory()
    const [x,setX] = useState(1);
    const [data,setData]= useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            const Reglement = jwt(token)
            if (!Reglement) {
                localStorage.removeItem('token')
                history.push('/login')
            } else {
                fetch('http://localhost:5000/reglements',{
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
        <div className="card">
            <div className="card-header">
        <div className="card-body table-responsive p-0" style={{height: "300px"}}>
            <AddHonoraire refresh={refresh}/>
            </div>
            </div>
            </div>

          
            <br/>
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">les reglements</h3>

                <div className="card-tools">
                    {/*<Button variant="primary" onClick={handleShow}>
                        Ajouter un utilisateur
                    </Button>*/}
                    <AddReglement refresh={refresh}/>
                </div>
            </div>
            <div className="card-body table-responsive p-0" style={{height: "300px"}}>
                <table className="table table-head-fixed text-nowrap">
                    <thead>
                    <tr>
                 

                        <th>montant</th>
                        <th>type</th>
                        <th>bare</th>
                        <th>numOperation</th>
                        <th>banque</th>
                        <th>porteur</th>
                        <th>echeance</th>                        
                        <th>numAffaire</th>
                        <th>supprimer</th>
   
                    </tr>
                    </thead>
                    <tbody>
                        {data.map((data) => (
                            <tr key={data._id}>
                                <td>{data.montant}</td>
                                <td>{data.type}</td>
                                <td>{data.bare}</td>
                                <td>{data.numOperation}</td>
                                <td>{data.banque}</td>
                                <td>{data.porteur}</td>
                                <td>{data.echeance}</td>
                                <td>{data.numAffaire}</td>
                        
                              
                                
                                <td>
                                    {/*  <i className="fas fa-trash" />*/}
                                    <DeleteReglement refresh={refresh} id={data._id} />
                                </td>
                        
                            </tr>

                        ))}

                    </tbody>
                </table>
            
            
           
           
          
            
            </div>
            <br/>
            <br/>

        </div>
        <div className="card">
            <div className="card-header">
        <div className="card-body table-responsive p-0" style={{height: "300px"}}>
            <AddSuivipayement refresh={refresh}/>
            </div>
            </div>
            </div>
            </div>

  


)}
export default Reglement