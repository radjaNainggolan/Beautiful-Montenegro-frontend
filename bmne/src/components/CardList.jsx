const CardList = ({data}) => {
    return (
        <div>
            {data.map( (geom) => (
                <div key={geom.id}>
                    <img src={geom.images[0].link} alt={geom.images[0].link} />
                    <h3>{geom.name}</h3>
                    <p>{geom.description}</p>
                    <h1>raden</h1>
                </div>
            ) )}
        
        </div>
    );
}
 
export default CardList;