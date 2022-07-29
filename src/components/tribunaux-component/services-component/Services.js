import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import jwt from "jwt-decode";
import AddService from "./add-service";
import DeleteService from "./delete-service";
import UpdateTribunal from "../update-tribunal";
import UpdateService from "./update-service";

const Services = () => {
    const params = useParams();

    const history = useHistory()
    const [x,setX] = useState(1);
    const [id,setId] = useState(params.id);
    const [nb,setNb] = useState(0);
    const [nb1,setNb1] = useState(0);
    const [data,setData]= useState([]);
    const [tab,setTab]= useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            const user = jwt(token)
            if (!user) {
                localStorage.removeItem('token')
                history.push('/login')
            } else {
             
                fetch('http://localhost:5000/tribunaux/services/'+params.id,{
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization" : `Bearer ${token}`
                    },
                })
                    .then(res => {
                        return res.json();
                    }).then(data => {
                    setData(data)
                    data.map((e)=>{
                        setNb(e.joursAud.length)
                        setNb1(e.joursCour.length)
                    })
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
        <div className="content-wrapper">
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Liste des services</h3>
                       <AddService refresh={refresh} id={id}/>

                    </div>
                    <div className="card-body">
                        <table id="example2" className="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <th>Libelle </th>
                                <th colSpan={6} style={{textAlign:"center"}}>
                                    <span  style={{backgroundColor: "#34495E", color:"white"}}>Jours d'audience</span> &nbsp; &nbsp; &nbsp;
                                    <span  style={{backgroundColor: "#7F8C8D", color:"white"}}>Jours de cources</span>
                                </th>


                            </tr>
                            </thead>
                            <tbody>
                            {data.map((data) => (
                                <tr>
                                    <td>{data.libelle}
                                        <DeleteService refresh={refresh} id={data._id} />
                                        <UpdateService refresh={refresh} id={data._id} idTr={data.idTrib} data={data}/>

                                    </td>
                                    {data.joursAud.map((j) =>
                                    {
                                            return <td style={{backgroundColor: "#34495E", color:"white"}}>{j}</td>


                                    })}
                                    {data.joursCour.map((j) =>
                                    {
                                        return <td style={{backgroundColor: "#7F8C8D", color:"white"}}>{j}</td>


                                    })}
                                </tr>

                            ))}

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div>)
    }

export default Services