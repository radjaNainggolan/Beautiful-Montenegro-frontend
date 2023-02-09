const CardList = ({data}) => {
    return (
        <div className="font-montserrat text-lg font-normal flex flex-col justify-between w-1/4 h-good overflow-scroll scrollbar scrollbar-thumb-slate-700 scrollbar-thin">
            {data.map( (geom) => (
                <div key={geom.id} className="flex flex-col justify-between align-middle items-center h-96 content-center text-center mb-20 cursor-pointer">
                    <img 
                    src={geom.images[0].url} 
                    alt={geom.images[0].url}
                    className="w-4/5  rounded-md" 
                    />
                    <h3>{geom.name}</h3>
                    <p>{geom.description}</p>
                </div>
            ) )}
        
        </div>
    );
}
 
export default CardList;