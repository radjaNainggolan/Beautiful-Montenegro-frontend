const CardList = ({data}) => {
    return (
        <div className="font-montserrat text-lg font-normal flex flex-col justify-between w-1/4 h-full overflow-scroll scrollbar scrollbar-thumb-slate-700 scrollbar-thin">
            {data.map( (geom) => (
                <div key={geom.id} className="flex flex-col items-center justify-evenly h-card content-center text-center cursor-pointer">
                    <img 
                    src={geom.images[0].url} 
                    alt={geom.images[0].url}
                    className="w-3/4 h-3/4 rounded-md" 
                    />
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