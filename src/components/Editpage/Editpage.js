import {useParams} from 'react-router-dom';
import {path} from "../../App";

function Editpage() {
    let { id } = useParams();
    fetch(`${path}/api/v1/calendars/${id}`)
    return (
        <div>
            sd
        </div>
    )
}

export default Editpage
