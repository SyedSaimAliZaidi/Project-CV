import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  secondaryText:{
    display: "inline-flex"
  },
  secondaryTitle:{
    paddingLeft: theme.spacing(2.5)
  },
  
}));

export default function CustomizedTimeline(props) {
    const classes = useStyles();
    return (
        <ul className="timeline">
            {
                props.data.map((item,index)=>{
                    return(
                        <li key={index}>            
                            <div style={{paddingBottom:10}}>
                                <Typography style={{color: "#22C0E8"}} variant="h6" component="h4">
                                    {item.degree}
                                </Typography>
                                <Typography  variant="subtitle" component="h3"><a href={item.link} target="_blank" style={{color:"black",textDecoration:"none"}}>{item.institute}</a></Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {item.duration}
                                </Typography>
                            </div>
                        </li>
                    
                    )
                })
            }
        </ul>
    );
}
