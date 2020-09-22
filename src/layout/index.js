import React,{useState} from 'react';
import { Container, Grid, Card, Avatar, Typography  } from "@material-ui/core"
import avatar from "../assets/img/dp.jpeg"
import Timeline from "../components/timeline"
import Education from "../components/education"
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import Skills from "../components/skills"
import ReferenceList from "../components/references"
import ProjectList from "../components/projects.js"
const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    grid:{
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },
    profile:{
        display: 'inline-block',
        paddingTop: theme.spacing(5)
    },
    profilePic:{
        // paddingLeft: theme.spacing(10),
        paddingTop: theme.spacing(6),
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
        // display : "flex",
        padding: theme.spacing(0.5)
    },
    list:{
        paddingTop: theme.spacing(2),
        listStyle:"none",
        // display: "inline-block" 
    }
}));
export default function Layout() {
    const classes = useStyles();
    const [softSkills,setSoftSkills] = useState([
        "Project Management","Team Work","Quick Learner","Problem Solver","Adaptability"
    ])
    const [technicalSkills,setTechSkills] = useState([
        "C / C++","Python","HTML","CSS","Bootstrap","PHP","MYSQL","MongoDB","Javascript","jQuery","Node.js","Reactjs","React Native","Laravel"
    ])
    const [references, setReferences] = useState([{icon: <i class="fa fa-github" style={{fontSize:'1.4rem'}}></i>,link:"https://github.com/SyedSaimAliZaidi?tab=repositories"},{icon: <i class="fa fa-linkedin"></i>,link:"https://www.linkedin.com/in/syed-saim-ali-zaidi-a0542714b"}])
    const [projects, setProjects]  =useState(
        {
            academic:[
                "Bank Management System in C++(OOP)",
                "Protein Structure Prediction in C++ (Data Structures)",
                "CMS Blog (PHP/MySQL)",
                "Student Management System(UI using MaterializeCSS)",
                "Landing Page (UI using MaterializeCSS and React)",
                "Rest api using node.js, express, mysql, passport and jwt",
                "Rest api using node.js, express, graphql, mongodb",        
            ],
            professional:[
                "EW FILES (Web App)",
                "Aab Admin Portal",        
            ]
        }
    )
    return (
        <Container>
            <Card style={{marginTop:20, marginBottom:20}} raised={true}>
                <Grid container style={{paddingBottom:30}}>
                    <Grid item xs={12}  className={classes.grid}>
                        <Grid container>
                            <Grid item md={4}>
                                <Grid container >
                                    <Grid item xs={12} sm={12} md={12}>
                                        <div align="center">
                                            <div className={classes.profilePic}>
                                                <Avatar src={avatar} className={classes.large}/>
                                            </div>
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
                                    <Grid item xs={12} sm={12} md={12}>
                                        <div  className={classes.paddingTop}>
                                            <Typography variant="h6"><strong>Contact</strong></Typography>

                                            <div component="ul" style={{listStyle:"none"}}>
                                                <li className={classes.listItem}>
                                                    <span style={{display: "inline-flex"}}><PhoneIcon fontSize="small"/><Typography style={{paddingLeft:5}}>{"  +92 300 2935165"}</Typography></span>
                                                </li>
                                                <li className={classes.listItem}>
                                                    <span style={{display: "inline-flex"}}><EmailIcon fontSize="small"/><Typography style={{paddingLeft:5}}>{" saimgt123@gmail.com"}</Typography></span>
                                                </li>
                                                <li className={classes.listItem}>
                                                    <span style={{display: "inline-flex"}}><HomeIcon fontSize="small"/><Typography style={{paddingLeft:5}}>{"  House# A-55, Decent Homes, Block-11, Gulshan-e-Iqbal, Karachi."}</Typography></span>
                                                </li>
                                            </div>
                                        </div>
                                    </Grid>                           
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <div  className={classes.paddingTop}>
                                            <Typography variant="h6"><strong>Soft Skills</strong></Typography>
                                            <div style={{paddingTop:10}}></div>
                                            <Skills data={softSkills}/>
                                        </div>
                                    </Grid>
                                </Grid>                           
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <div   className={classes.paddingTop}>
                                            <Typography variant="h6"><strong>Technical Skills</strong></Typography>
                                            <div style={{paddingTop:10}}></div>
                                            <Skills data={technicalSkills}/>
                                        </div>
                                    </Grid>
                                </Grid>                           
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <div   className={classes.paddingTop}>
                                            <Typography variant="h6"><strong>References</strong></Typography>
                                            <ReferenceList data={references}/>
                                        </div>
                                    </Grid>
                                </Grid>  
                            </Grid>
                            <Grid item md={8} >
                                <Grid container>
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
                                </Grid>
                                <Grid container>
                                    <Grid item md={12}>
                                        <div className={classes.paddingTop}>
                                            <Typography variant="h6"><strong>Experience</strong></Typography>
                                            <Timeline/>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={12}>
                                        <div className={classes.paddingTop}>
                                            <Typography variant="h6"><strong>Education</strong></Typography>
                                            <Education/>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={12}>
                                        <div className={classes.paddingTop}>
                                            <Typography variant="h6"><strong>Projects</strong></Typography>
                                            <div>
                                                <ul className="timeline">
                                                    <li>                
                                                        <Typography><strong>Academic</strong></Typography>                       
                                                        <ProjectList data={projects.academic}/>
                                                    </li>
                                                    <li>
                                                        <Typography><strong>Professional</strong></Typography>                       
                                                        <ProjectList data={projects.professional}/>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
}