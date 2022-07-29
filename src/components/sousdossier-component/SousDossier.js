import {useState, useEffect} from "react";
import jwt from 'jwt-decode'
import { useHistory } from 'react-router-dom'
import AddSousDossier from "./add-sousDossier";

const SousDossier  = () => {
    const history = useHistory()
    const [x,setX] = useState(1);
    const [data,setData]= useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            const SousDossier = jwt(token)
            if (!SousDossier) {
                localStorage.removeItem('token')
                history.push('/login')
            } else {
                fetch('http://localhost:5000/sousdossiers',{
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
                <h3 className="card-title">Sous dossier</h3>
             <br />
                <hr />

         
           <br />
                   
                    <AddSousDossier refresh={refresh}/>
                </div>
           
            
        </div>
            </div>
        </div>
    </div>


)}
export default SousDossier