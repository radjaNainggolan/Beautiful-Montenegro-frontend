import { Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
const CardList = ({data, draw, setDraw}) => {
    
    // const context = useContext(AppContext);
    // const {draw , setDraw} = context;
    
    // const onClick = (geom) => {
    //     let d = draw;
    //     const idx = d.findIndex(e => e.id = geom.id);
    //     //console.log(idx);
    //     if(idx !== -1){
    //         d.splice(idx,1);
    //         //console.log(d);
    //         flushSync(() => {
    //             setDraw(d);
    //         })
    //         return;
    //     }

    //     d.push(geom)
    //     flushSync(() => {
    //         setDraw(d);
    //     })

    // }


    return (
        <div className="font-montserrat text-lg font-normal grid grid-cols-1 gap-y-10 py-6 justify-between align-middle items-center w-1/4 h-full overflow-scroll scrollbar scrollbar-thumb-slate-700 scrollbar-thin ">
            {data.map( (geom) => (
                <div id={geom.id} key={geom.id}  
                className="flex flex-col p-3 items-center justify-between w-96 h-card content-center text-center cursor-pointer mx-auto"
                >
                    {/* <img 
                    src={geom.images[0].url} 
                    alt={geom.images[0].url}
                    className="w-3/4 h-3/4 rounded-md" 
                    /> */}
                    
                    <SimpleImageSlider  width={470} style={{position:"relative", borderRadius:"4px"}} height={310} showBullets={false} showNavs={true} images={geom.images}/>
                    
                    <div className="flex flex-col justify-evenly h-1/6">
                        <h3>{geom.name}</h3>
                        {/* <p>{geom.city}</p> */}
                    </div>
                    <Link to={`/location/${geom.id}`} className=" border-2 px-3 rounded-xl border-gray-500 hover:text-white hover:bg-black transition-colors duration-150 ">See more</Link>
                </div>
            ) )}
        
        </div>
    );
}
 
export default CardList;