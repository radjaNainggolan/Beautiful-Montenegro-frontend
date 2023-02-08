import {MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet';
import useGetRequest from '../customHooks/useGetRequest';
//42.7044223 19.3957785
const Home = () => {
    
    const {data, loading, error} = useGetRequest("http://localhost:8080/parks/all");    
    


    return (
        <div className="w-screen h-screen flex flex-row justify-evenly align-middle py-6 bg-yellow-500 bg-opacity-20">
           <MapContainer className="w-4/6  rounded-lg" center={[42.6289, 19.3854]} zoom={9}scrollWheelZoom={true}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                
                />
            </MapContainer>
            
            <div className="w-1/4">
                <h1>raden rovcanin</h1>
                {!loading && <h1>{console.log(data)}</h1>}
            </div>

        </div>
    );
}
 
export default Home;