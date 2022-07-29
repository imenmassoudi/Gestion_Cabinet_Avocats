import {useState, useEffect} from "react";
import AddUser from "./add-user";
import DeleteUser from "./delete-user";
import jwt from 'jwt-decode'
import { useHistory } from 'react-router-dom'
import UpdateUser from "./update-user";

const User = () => {
    const history = useHistory()
    const [x, setX] = useState(1);
    const [data, setData] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            const user = jwt(token)
            if (!user) {
                localStorage.removeItem('token')
                history.push('/login')
            } else {
                fetch('http://localhost:5000/users', {
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
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Liste des utilisateurs</h3>
                                <AddUser refresh={refresh}/>

                            </div>

                            <div className="card-body">
                                <table id="example2" className="table table-bordered table-hover">
                                    <thead>
                                    <tr>
                                        <th style={{textAlign:"center"}}>Nom d'utilisateur</th>
                                        <th style={{textAlign:"center"}}>Nom</th>
                                        <th style={{textAlign:"center"}}>Prenom</th>
                                        <th style={{textAlign:"center"}}>Modifier</th>
                                        <th style={{textAlign:"center"}}>Supprimer</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((data) => (
                                            <tr key={data._id}>
                                                <td style={{textAlign:"center"}}>{data.username}</td>
                                                <td style={{textAlign:"center"}}>{data.nom}</td>
                                                <td style={{textAlign:"center"}}>{data.prenom}</td>
                                                <td style={{textAlign:"center"}}>
                                                    <UpdateUser refresh={refresh} id={data._id} data={data}/>

                                                </td>
                                                <td style={{textAlign:"center"}}>
                                                    <DeleteUser refresh={refresh} id={data._id} username={data.username}/>
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
    {/*   <div className='content-wrapper'>
        <br/>
        <div className="row">
            <div className="col-12">
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Liste des utilisateurs</h3>

                <div className="card-tools">

                    <AddUser refresh={refresh}/>
                </div>
            </div>
            <div className="card-body table-responsive p-0" style={{height: "500px"}}>
                <table className="table table-head-fixed text-nowrap">
                    <thead>
                    <tr>
                        <th>Nom d'utilisateur</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.map((data) => (
                            <tr key={data._id}>
                                <td>{data.username}</td>
                                <td>{data.nom}</td>
                                <td>{data.prenom}</td>
                                <td>
                                    <DeleteUser refresh={refresh} id={data._id} username={data.username}/>
                                    <UpdateUser refresh={refresh} id={data._id} data={data}/>
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
*/
    }

}
export default User


