import {useEffect, useState} from 'react';

function Dashboard() {
    const [loading, setloading] = useState(true);
    const [data, setdata] = useState([]);
    useEffect(() => {
        setloading(true);
        // fetch all calendar data
        fetch('http://localhost:8080/api/v1/calendars/' )
        .then(response => response.json())
        .then(fetchdata=> {
            console.log(fetchdata);
        })
        return () => {
            console.log('cleanup')
        }
    }, [data])
    return (
        <div>
            dasboard
        </div>
    )
}

export default Dashboard
