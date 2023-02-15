import {MapContainer, TileLayer, Marker, Tooltip} from 'react-leaflet';
import useGetRequest from '../customHooks/useGetRequest';
import CardList from '../components/CardList';
import { useEffect, useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';


//42.7044223 19.3957785
const Home = () => {
    
    const {data, loading, error} = useGetRequest("http://localhost:8080/locations/all");    
    
    const [clicked, setClicked] = useState();
    
    let d = [];

    // if(data){
    //     for(let i = data[0].id; i < data.length; i++){
    //         d[i] = false;
    //     }
    // }


    useEffect(() => {
        
        if(data !== null){

            for(let i = 0; i < data.length; i++){
                d[i] = {id:data[i].id, focus:false };
            }
            
            setClicked(d);
        }

        

    },[data]);




    const handleClick = (id) => {
        
        const element = document.getElementById(id);
        
        if(element){
            let d = clicked;
            for(let i = 0; i < data.length; i++){
                d[i].focus = false;
            }
            
            let idx = d.findIndex(e => e.id = id);
            d[idx].focus = true;
            setClicked(d);
            console.log(clicked);
            element.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <div className="w-screen h-sc flex flex-row justify-evenly align-middle py-6 relative z-0">
           {data && 
            <MapContainer className="w-4/6  rounded-lg" center={[42.6289, 19.3854]}  zoom={9}scrollWheelZoom={true}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {data.map(geom => (
                    <Marker eventHandlers={{click:()=> {handleClick(geom.id)}}}  key={geom.id} position={geom.geometry.coordinates}><Tooltip>{geom.name+" "+geom.geometry.coordinates}</Tooltip></Marker>
                ))}     
                      

            </MapContainer>
            }
            {data && <CardList data={data} clicked={clicked} ></CardList>}

        </div>
    );
}
 
export default Home;