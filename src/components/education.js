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

export default function CustomizedTimeline() {
    const classes = useStyles();
    const data = [
        {link:"http://nu.edu.pk/", year: '2017 - present',duration: "Aug 2017 - present", degree: "Bachelor in Computer Science (BS-CS)", institute: "National University Of Computer And Emerging Sciences(FAST-NU), Karachi.", semester: '7th smester', percentage: 'CGPA: 2.44' },
        {link:"#", year: '2015 - 2017',duration: "Aug 2015 - May 2017",  degree: "Higher Secondary School Certificate (Pre-Engineering)", institute: "City College Of Science And Commerce, Multan.", semester: '', percentage: 'Percentage: 76%'},
        {link:"#", year: '2013 - 2015', duration: "May 2013- May 2015",  degree: "Secondary School Certificate (Pre-Engineering)", institute: "Nishat High School, Multan.", semester: '', percentage: 'Percentage: 88%'},
    ]
    return (
        <ul className="timeline">
            {
                data.map((item,index)=>{
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
