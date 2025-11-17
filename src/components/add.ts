import station from "./class"
import {getStation} from "./getlocate"
type props = {
    city : string;
    setsta : (sta:station) => void;
}

async function add({city,setsta}:props){
    const wsta =  await getStation(city);
    setsta(wsta);
}

export default add