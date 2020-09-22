import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
}));

export default function Chips(props) {
    const classes = useStyles()
    return(
        <div component="ul" style={{listStyle:"none"}}>
          {
          props.data.map((item,index)=> <li style={{paddingTop:5}} key={index}><span style={{display:"inline-flex"}}>{item.icon}<Typography><a href={item.link} target="_blank" style={{color:"black",textDecoration:"none", marginLeft:5}}>{item.link}</a></Typography></span></li> )  
          }
        </div>
    ) 
}
