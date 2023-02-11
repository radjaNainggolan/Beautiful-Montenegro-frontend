import {MapContainer, TileLayer, useMap, Marker, Popup, Tooltip} from 'react-leaflet';
import useGetRequest from '../customHooks/useGetRequest';
import CardList from '../components/CardList';
import { AppContext } from '../context/AppContext';
import { useContext} from 'react';

//42.7044223 19.3957785
const Home = () => {
    
    const context = useContext(AppContext);
    const {loading, error} = useGetRequest("http://localhost:8080/locations/all");    
    const  {data} = context;


    return (
        <div className="w-screen h-sc flex flex-row justify-evenly align-middle py-6 bg-opacity-20 relative z-0">
           {data && 
            <MapContainer className="w-4/6  rounded-lg" center={[42.6289, 19.3854]}  zoom={9}scrollWheelZoom={true}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {data.map(geom => (
                    <Marker  key={geom.id} position={geom.geometry.coordinates}><Tooltip>{geom.name}</Tooltip></Marker>
                    
                ))}    

            </MapContainer>
            }
            {data && <CardList data={data} ></CardList>}

        </div>
    );
}
 
export default Home;