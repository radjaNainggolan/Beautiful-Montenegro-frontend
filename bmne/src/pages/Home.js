import {MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet';
//42.7044223 19.3957785
const Home = () => {
    return (
        <div className="w-screen h-screen flex flex-row content-center">
           <MapContainer className='w-4/5 h-full' center={[42.7044223, 19.3957785]} zoom={9}scrollWheelZoom={true}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                zoomOffset={0}
                />
            </MapContainer>
            
            <div className="bg-violet-700 opacity-80 w-2/5">
                <h1>raden rovcanin</h1>
            </div>

        </div>
    );
}
 
export default Home;