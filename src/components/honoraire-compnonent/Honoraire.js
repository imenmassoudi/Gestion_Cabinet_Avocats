
import {useState, useEffect} from "react";
import AddHonoraire from "./add-honoraire";

import jwt from 'jwt-decode'
import { useHistory } from 'react-router-dom'

const Honoraire  = () => {
    const history = useHistory()
    const [x,setX] = useState(1);
    const [data,setData]= useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            const Honoraire = jwt(token)
            if (!Honoraire) {
                localStorage.removeItem('token')
                history.push('/login')
            } else {
                fetch('http://localhost:5000/honoraires',{
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
            <div className="card-body table-responsive p-0" style={{height: "300px"}}>
            <AddHonoraire refresh={refresh}/>
            </div>
            </div>
           
            </div>
        </div>
    </div>


)}
export default Honoraire