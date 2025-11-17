import station from "./class";
type Props = {
    setlat : (lat : number) => void;
    setlon : (lon : number) => void;
};

type idprops = {
    id : number|null;
    setid :(id:number |null)=>void;
}
function getlocate({setlat,setlon}:Props){
    const id = navigator.geolocation.watchPosition(
        (position) => {
            setlat(position.coords.latitude);
            setlon(position.coords.longitude);
        },
        (error) => {
            console.error("位置情報取得失敗:", error.message);
         }
    );
    return id;
}
export function trashlocate({id,setid}:idprops) {
  if (id !== null) {
    navigator.geolocation.clearWatch(id);
    setid(null); 
  }
}

export async function getStation(targetName: string) {
  const response = await fetch( `https://express.heartrails.com/api/json?method=getStations&name=${encodeURIComponent(targetName)}`);
  if (!response.ok) {
      throw new Error(`HTTPエラー: ${response.status}`);
      
    }

  const data = await response.json();
  const stations = data.response.station;
if (data.response.error) {
  throw new Error("その駅名は存在しません,右上の✖から戻り正しい駅名を入力してください");
}
  const targetStation = stations.find((s: any) => s.name === targetName);
   const sta = new station();
  if (targetStation) {
    sta.name = targetName;
    sta.lat = targetStation.y;
    sta.lon = targetStation.x;
  }
    return sta;
}

export default getlocate