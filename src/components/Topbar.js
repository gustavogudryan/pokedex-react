import "./Topbar.css"
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import pokeball from "../images/pokeball.png"
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";

function stringToColor(string) {
    let hash = 0;
    let i;
  
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }


function Topbar () {

    const [clockState, setClockState] = useState()

    useEffect(() => {
      setInterval(() => {
        const date = new Date()
        setClockState(date.toLocaleTimeString())
      }, 1000);
    }, [])


    return(
        <div className="header">
            <div className="title_left">
                <CommentOutlinedIcon sx={{ fontSize: 40, color: "#f0a921" }}/>
                <p style={{marginLeft:"10px"}}>ALL POKÉMON</p>
            </div>
            <div className="caught_pokemon">
                <div className="caught">
                    <img src={pokeball} alt="pokeball" style={{width:"30px", marginRight: "10px"}}/>
                    <p>Number registered: <span style={{marginLeft:"30px"}}>1000</span></p>
                </div>
            </div>
            <div className="title_right">
                <p className="clockText">{clockState}</p>
                <Avatar {...stringAvatar('Your Name')} />
            </div>
        </div>
    )

}

export default Topbar
