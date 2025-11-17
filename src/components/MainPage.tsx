import { useState } from "react";
import station from "./class";
import Input,{TraceOn,TraceOff,AlertOn} from "./UI"; 
function MainPage(){
    const[sta,setsta]=useState(new station());
    const[lat,setlat]=useState(0);
    const[lon,setlon]=useState(0);
    const[id,setid] = useState<number | null>(null);
    return(
        <>
        <h1>Next Stop</h1>
        <Input sta = {sta} setsta = {setsta}></Input>
        <br></br>
        <TraceOn lo = {{setlat,setlon}} idp = {{id,setid}}></TraceOn>
        <TraceOff id = {id} setid = {setid}></TraceOff>
        <br></br>
        <AlertOn po = {{lat,lon}} st = {{sta,setsta}}></AlertOn>
        <h3>{sta.name} まで {sta.dis}</h3>
        </>
    );
}

export default MainPage