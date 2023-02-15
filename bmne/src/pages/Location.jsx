import useGetRequest from "../customHooks/useGetRequest";
import { useParams } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import {MapContainer, TileLayer, Marker, Tooltip} from 'react-leaflet';

const Location = () => {
    
    const {id} = useParams();
    const {data, loading, error} = useGetRequest("http://localhost:8080/locations/"+id)
    console.log(data);
    return (
        <div className="">
            {data && 
                <div className="flex flex-col align-middle w-11/12 h-sc items-center self-center mx-auto mt-20 gap-20">
                    <h1 className="font-montserrat font-extrabold text-5xl">{data.name}</h1>
                    <div className="flex flex-row align-middle items-center gap-[10rem] h-max w-max">
                        <SimpleImageSlider width={800}  height={600}  showBullets={true} showNavs={true} images={data.images}></SimpleImageSlider>
                        <MapContainer className="w-[40rem] h-full" center={data.geometry.coordinates}  zoom={9}scrollWheelZoom={true}>
                            <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />  
                            <Marker position={data.geometry.coordinates}></Marker>
                        </MapContainer>
                    </div>
                    <p className="text-2xl font-montserrat">{data.description}</p>
                </div>
            }
        </div>
    );
}
 
export default Location;