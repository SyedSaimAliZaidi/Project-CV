import React from 'react';
import { Container, Grid, Card, Avatar, Typography  } from "@material-ui/core"
import avatar from "../assets/img/avatar.jpg"
import Timeline from "../components/timeline"
import Education from "../components/education"
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    grid:{
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
    },
    profile:{
        display: 'inline-block',
        paddingTop: theme.spacing(5)
    },
    title:{
        textTransform : 'uppercase',
        paddingLeft: theme.spacing(0)
    },
    subtitle:{
        textTransform : 'uppercase',
        color: "#22C0E8",
        paddingLeft: theme.spacing(0),
    },
    paddingTop:{
        paddingTop: theme.spacing(6)
    },
    subtitle1:{
        display:'flex'
    },
    listItem:{
        display : "flex",
        padding: theme.spacing(0.5)
    },
    list:{
        paddingTop: theme.spacing(2),
        listStyle:"none",
        display: "inline-block" 
    }
}));
export default function Layout() {
    const classes = useStyles();
    return (
        <Container>
            <Card style={{marginTop:20}} raised={true}>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container className={classes.grid}>
                            <Grid item md={4}>
                                <Grid container className={classes.grid}>
                                    <Grid item md={12}>
                                        <div align="center" className={classes.profile}>
                                            <Avatar src={avatar} className={classes.large}/>
                                            <div>
                                                <Typography variant="h6"  className={classes.title}>Syed Saim Ali Zaidi</Typography>
                                                <Typography variant="subtitle2" className={classes.subtitle}>
                                                    MERN Stack Developer
                                                </Typography>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                                
                                <Grid container>
                                    <Grid item md={12}>
                                        <div className={classes.paddingTop}>
                                            <Typography variant="h6"><strong>Contact</strong></Typography>

                                            <div compontent="ul" className={classes.list}>
                                                <li className={classes.listItem}><PhoneIcon fontSize="small"/>{"  +92 300 2935165"}</li>
                                                <li className={classes.listItem}><EmailIcon fontSize="small"/>{" saimgt123@gmail.com"}</li>
                                                <li className={classes.listItem}><HomeIcon fontSize="small"/>{"  House# A-55, Decent Homes, Block-11, Gulshan-e-Iqbal, Karachi."}</li>
                                            </div>
                                        </div>
                                    </Grid>                           
                                </Grid>                           
                            </Grid>
                            <Grid item md={8}>
                                <Grid item md={12}>
                                    <div className={classes.paddingTop}>
                                        <Typography variant="h6"><strong>Objective</strong></Typography>
                                        <Typography style={{paddingTop:10,paddingLeft:23}}>
                                            Looking for an opportunity to utilize my strengths to build my career
                                            that would intrinsically help mein enhancing my skills and achieving
                                            greater practical excellence in Web Development, Software
                                            Delopment And Web Apps .
                                        </Typography>
                                    </div>

                                </Grid>
                                <Grid item md={12}>
                                    <div className={classes.paddingTop}>
                                        <Typography variant="h6"><strong>Experience</strong></Typography>
                                        <Timeline/>
                                    </div>
                                </Grid>
                                <Grid item md={12}>
                                    <div className={classes.paddingTop}>
                                        <Typography variant="h6"><strong>Education</strong></Typography>
                                        <Education/>
                                    </div>
        
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
}