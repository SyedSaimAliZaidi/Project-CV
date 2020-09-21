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
        <ul style={{listStyle:"none"}}>
            {
                props.data.map((item,index)=> <li key={index}><Typography><a href={item} target="_blank" style={{color:"black",textDecoration:"none"}}>{item}</a></Typography></li> )  
            }
        </ul>
    ) 
}
