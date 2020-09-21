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

export default function CustomizedTimeline() {
    const classes = useStyles();
    const data = [
        { year: '2019 - 2020',duration: "Sep 2019 - June 2020", position: "Web Developer", category:'Part-Time', company: "Skynners (Pvt.) Ltd." },
        { year: '2020',duration: "Jan 2020 - Feb 2020", position: "React Native Developer", category:'Internship', company: "Syscrypt.co.uk"},
        { year: '2019', duration: "July 2019 - August 2019", position: "JavaScript Developer", category:'Internship', company: "Skynners (Pvt.) Ltd."},
    ]
    return (
        <ul className="timeline">
            {
                data.map((item,index)=>{
                    return(
                        <li key={index}>        
                            <div style={{paddingBottom:10}}>
                                <Typography style={{color: "#22C0E8"}}  variant="h6" component="h1">
                                    {item.position}
                                </Typography>
                                <Typography>{item.company}</Typography>
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
