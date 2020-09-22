import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Card from "@material-ui/core/Card"
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
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
                                <Typography style={{color: "#22C0E8"}}  variant="h6" component="h4">
                                    {item.position}
                                </Typography>
                                <Typography variant="subtitle" component="h3"><a href={item.link} target="_blank" style={{color:"black",textDecoration:"none"}}>{item.company}</a></Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {item.duration}
                                    <br></br>
                                    <small>{item.category}</small>
                                </Typography>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    );
}
