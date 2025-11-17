import station from './class'
import {distance} from './distance'
type props = {
    sta:station;
    setsta:(sta:station) => void;
    lat : number;
    lon : number;
}
const audio = new Audio("/Clock-Alarm05-1(Mid).mp3");


export default async function checkblank({sta,setsta,lat,lon}:props){
    while(true){
        if(distance({lat,lon,sta,setsta})<100){
            audio.play();
            alert("乗換駅に到着しました");
            break;
        }

        await new Promise(r => setTimeout(r, 500));
    }
}