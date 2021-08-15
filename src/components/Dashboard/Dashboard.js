import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "./Dashboard.css";
import {path} from "../../App";
function Dashboard() {
    const [loading, setloading] = useState(true);
    const [data, setdata] = useState([]);
    useEffect(() => {
        setloading(true);
        // fetch all calendar data
        fetch(`${path}/api/v1/calendars/`)
        .then(response => response.json())
        .then(fetchdata=> {
            console.log(fetchdata);
            setdata(fetchdata);
            setloading(false);

        })
        return () => {
            console.log('cleanup')
        }
    }, [])

    const DeleteHandler = (id) => {
        fetch(`${path}/api/v1/calendars/${id}`, {
            method:"DELETE"
        })
            .then(response =>  response.json())
            .then(fetchdata=>{
                if(fetchdata.deleted == true){
                    window.location = '/';
                }
            })
    };

    const Content = () => (
        data.map(e=>(
            <div key={e.id} className="itemwrapper">
                <div className="item"><p className="title">Event </p> <p className="value"> {e.name}</p></div>
                <div className="times">
                    <div className="item"><p className="title">Starts </p> <p className="value"> {e.starttime}</p></div>
                    <div className="item"><p className="title">Ends </p> <p className="value"> {e.endtime}</p></div>
                </div>
                
                <div className="item"><p className="title">Frequency </p> <p className="value"> {e.frequency}</p></div>
                
                <Link className="btn btn-success Link" to={`/edit/${e.id}`}>edit</Link>
                <button className="btn btn-danger" onClick={()=>{DeleteHandler(e.id)}}>delete</button>
            </div>
        ))
    );
    const NoContent = () =>  
        (<div>...loading</div>);
    
    return (
        <div>
            {loading? <NoContent/> : <Content/>}
        </div>
    )
}

export default Dashboard
