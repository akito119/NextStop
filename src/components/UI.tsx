import add from "./add";
import station from "./class"
import getlocate,{trashlocate} from "./getlocate";
import {useState} from "react";
import checkblank from "./logic";
type staprops = {
    sta:station;
    setsta: (sta:station) => void
}
type poprops = {
    lat : number;
    lon : number;

}
type loprops = {
    setlat : (lat:number) => void
    setlon : (lon:number) => void
}
type idprops = {
    id :number|null;
    setid  : (id :number|null) => void;
}
type props = {
    lo : loprops;
    idp : idprops;
}
type postaprops = {
    po : poprops;
    st : staprops;
}
export default function Input({sta,setsta}:staprops){
    const[city,setcity] = useState("");
    return (
        <>
        <input 
            type = "text"
            placeholder = "乗り換え駅を入力"
            value = {city}
            onChange = {(e) => setcity(e.target.value)}
        />
        <button onClick ={() => add({city,setsta})}> 乗り換え駅として登録</button>
        <br></br>
        <> *正確な駅名を入力してください </>
        </>
    );
}
export function TraceOn({lo,idp}:props){
    const { setlat, setlon } = lo;
    const { id, setid } = idp;
    return(
        <button onClick ={()=>setid(getlocate({setlat,setlon}))}>追跡開始</button>
    );
}
export function TraceOff({id,setid}:idprops){
    return(
        <>
        <button onClick ={()=>trashlocate({id,setid})}>追跡終了</button>
        </>
    );
}
export function AlertOn({po,st}:postaprops){
    const { lat, lon } = po;
    const { sta, setsta} = st;
    return(
        <>
        <button onClick = {()=> checkblank({sta,setsta,lat,lon})}>通知待機開始</button>
        </>
    );
}
