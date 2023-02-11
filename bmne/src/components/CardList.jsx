import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const CardList = ({data}) => {
    
    const context = useContext(AppContext);
    const {draw , setDraw} = context;
    
    const onClick = (geom) => {
        let d = draw;
        const idx = d.findIndex(e => {e.id = geom.id});

        if(idx !== -1){
            d.splice(idx,1);
            setDraw(d);
            return;
        }

        d.append(geom)
        setDraw(d);

    }


    return (
        <div className="font-montserrat text-lg font-normal flex flex-col justify-between w-1/4 h-full overflow-scroll scrollbar scrollbar-thumb-slate-700 scrollbar-thin">
            {data.map( (geom) => (
                <div key={geom.id}  
                className={`flex flex-col items-center justify-between h-card content-center text-center`}>
                    <img 
                    src={geom.images[0].url} 
                    alt={geom.images[0].url}
                    className="w-3/4 h-3/4 rounded-md" 
                    />
                    <div className="flex flex-col justify-evenly h-1/3">
                        <h3>{geom.name}</h3>
                        <p>{geom.description}</p>
                    </div>
                    <div className="flex flex-row items-end text-base">
                        <button>Show Location</button>
                    </div>
                </div>
            ) )}
        
        </div>
    );
}
 
export default CardList;