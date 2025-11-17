import station from './class'
type Props = {
    lat : number;
    lon : number;
    sta : station;
    setsta : (sta :station) => void;
};

function pythadis({lat,lon,sta,setsta}:Props){
    let cache = new station() ;
    cache.name = sta.name;
    cache.lon = sta.lon;
    cache.lat = sta.lat;
    const dis:number = Math.sqrt(((lat-sta.lat)*111320)**2+((lon-sta.lon)*111320)**2);
    cache.dis = dis;
    setsta(cache);
    return dis;
}
/*function vincentydis({lat,setlat,lon,setlon,sta,setpath}:Props){
  精度を上げる時に実装
}*/

export {pythadis as distance};