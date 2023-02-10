import {MapContainer, TileLayer, useMap, Marker, Popup, Polygon} from 'react-leaflet';
import useGetRequest from '../customHooks/useGetRequest';
import CardList from '../components/CardList';

//42.7044223 19.3957785
const Home = () => {
    
    const {data, loading, error} = useGetRequest("http://localhost:8080/locations/all");    

    // if(!loading){
    //     console.log(data[0].geometry.coordinates);
    // }

    return (
        <div className="w-screen h-sc flex flex-row justify-evenly align-middle py-6 bg-opacity-20 relative z-0">
           {data && 
            <MapContainer className="w-4/6  rounded-lg" center={[42.6289, 19.3854]}  zoom={9}scrollWheelZoom={true}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {data.map(geom => (
                    <Marker key={geom.id} position={geom.geometry.coordinates}></Marker>
                ))}    

            </MapContainer>
            }
            
            {data && <CardList data={data}></CardList>}

        </div>
    );
}
 
export default Home;