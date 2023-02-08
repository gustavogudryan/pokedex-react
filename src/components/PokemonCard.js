import "./PokemonCard.css"
import { useState } from "react"

function PokemonCard ({id, name, image, type, weight, height, stats,
    statsName}) {

    const [isShown, setIsShown] = useState(false)

    return (
        <div className="container">
            {isShown && (
            <div className="show">
                <div className="stat-container-title">
                    <p style={{width:"180px"}}>No. {id}</p>
                    <p style={{marginRight:"10px"}}>{name}</p>
                    <p style={{fontSize:"16px"}}>{type[0].replace(/^./, (str) => str.toUpperCase())} Pokémon</p>
                </div>

                <img src={image} alt={name} />
                
                <div style={{ width:"100%"}}>
                    <div style={{background:"#8b6ebe", textAlign:"center", borderRadius:"0 10px"}}  className="stats-left">
                        <p>Type</p>
                    </div>
                    <div style={{background:"#fff",  marginBottom:"12px", textAlign:"end", height:"55px", color:"#504a5a"}} className="stats-right">
                        <p>{type.toString().padStart(3, "0")}</p>
                    </div>
                    <div style={{background:"#8b6ebe", textAlign:"center", borderRadius:"0 10px"}} className="stats-left">
                        <p>Height</p>
                    </div>
                    <div style={{background:"#fff", marginBottom:"12px", textAlign:"end", height:"55px", color:"#504a5a"}} className="stats-right">
                        <p>{height}0 cm</p>
                    </div>
                    <div style={{background:"#8b6ebe", textAlign:"center", borderRadius:"0 10px"}}  className="stats-left">
                        <p>Weight</p>
                    </div>
                    <div style={{background:"#fff", textAlign:"end", height:"55px", color:"#504a5a"}} className="stats-right">
                        <p>{weight} lbs.</p>
                    </div>
                </div>

                <div className="base-stats">
                    <div>
                        {statsName.map((stats) => (
                            <p className="stats">{stats}</p>
                        ))}
                    </div>
                    <div>
                        {stats.map((stats) => (
                            <p className="stats">{stats}</p>
                        ))}
                    </div>
                </div>
            </div>
            )}
                <div className="right" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                    <img src={image} alt={name} style={{maxHeight:"70px", marginRight: "30px", width:"70px"}} />
                    <p style={{width:"270px", marginRight: "55px"}}>No. {id}</p>
                    <p>{name}</p>
                </div>
        </div>
    )
}

export default PokemonCard