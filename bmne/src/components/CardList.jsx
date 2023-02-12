import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { flushSync } from "react-dom";

const CardList = ({data, draw, setDraw}) => {
    
    // const context = useContext(AppContext);
    // const {draw , setDraw} = context;
    
    const onClick = (geom) => {
        let d = draw;
        const idx = d.findIndex(e => e.id = geom.id);
        //console.log(idx);
        if(idx !== -1){
            d.splice(idx,1);
            //console.log(d);
            flushSync(() => {
                setDraw(d);
            })
            return;
        }

        d.push(geom)
        flushSync(() => {
            setDraw(d);
        })

    }


    return (
        <div className="font-montserrat text-lg font-normal grid grid-cols-1 gap-y-10 py-6 justify-between w-1/4 h-full overflow-scroll scrollbar scrollbar-thumb-slate-700 scrollbar-thin">
            {data.map( (geom) => (
                <div key={geom.id}  
                className="flex flex-col p-3 items-center justify-between h-card content-center text-center cursor-pointer shadow-xl hover:scale-125 transition-transform duration-100 "
                onClick={(e) => onClick(geom)}>
                    {/* <img 
                    src={geom.images[0].url} 
                    alt={geom.images[0].url}
                    className="w-3/4 h-3/4 rounded-md" 
                    /> */}
                    
                    <SimpleImageSlider  width={250} style={{position:"relative"}} height={250} showBullets={false} showNavs={true} images={geom.images}/>
                    
                    <div className="flex flex-col justify-evenly h-1/3">
                        <h3>{geom.name}</h3>
                        <p>{geom.description}</p>
                        
                    </div>
                </div>
            ) )}
        
        </div>
    );
}
 
export default CardList;