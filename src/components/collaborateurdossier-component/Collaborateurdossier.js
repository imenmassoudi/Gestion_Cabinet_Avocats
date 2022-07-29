import {useState, useEffect} from "react";
import AddCollaborateurdossier from "./add-collaborateurdossier";

import jwt from 'jwt-decode'
import { useHistory } from 'react-router-dom'

const Collaborateurdossier  = () => {
    const history = useHistory()
    const [x,setX] = useState(1);
    const [data,setData]= useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            const Collaborateurdossier = jwt(token)
            if (!Collaborateurdossier) {
                localStorage.removeItem('token')
                history.push('/login')
            } else {
                fetch('http://localhost:5000/collaborateurdossiers',{
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
<br />
<br />
       
               
                    <AddCollaborateurdossier refresh={refresh}/>
                </div>
            
           
            
        </div>
            </div>
        </div>
    </div>


)}
export default Collaborateurdossier