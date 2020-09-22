import React,{useState} from 'react';
import { Container, Grid, Card, Avatar, Typography , Hidden } from "@material-ui/core"
import avatar from "../assets/img/dp.jpeg"
import Experience from "../components/experience"
import Education from "../components/education"
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import Chips from "../components/chips"
import ReferenceList from "../components/references"
import ProjectList from "../components/projects.js"

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
    grid:{
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },
    profile:{
        display: 'inline-block',
    },
    title:{
        fontWeight: 600,
        textTransform : 'uppercase',
        paddingTop: theme.spacing(3)
    },
    subtitle:{
        textTransform : 'uppercase',
        color: "#EEEEEE",
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
        padding: theme.spacing(0.5),
    },
    list:{
        paddingTop: theme.spacing(2),
        listStyle:"none",
        // display: "inline-block" 
    },
    profilePicSection:{
        paddingTop: theme.spacing(6),
        paddingLeft: theme.spacing(6),
    },
    contactSection:{
        paddingTop: theme.spacing(6),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },
    referenceSection:{
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },
    referenceSectionContent:{
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
    },
    objectiveSection:{
        paddingTop: theme.spacing(6),
        // paddingLeft: theme.spacing(1),
        // paddingRight: theme.spacing(1),

    }
}));
export default function CvLayout() {
    const classes = useStyles();
    const [softSkills,setSoftSkills] = useState([
        "Project Management","Team Work","Quick Learner","Problem Solver","Adaptability"
    ])
    const [technicalSkills,setTechSkills] = useState([
        "C / C++","Python","HTML","CSS","Bootstrap","PHP","MYSQL","MongoDB","Javascript","jQuery","Node.js","Reactjs","React Native","Laravel"
    ])
    const [references, setReferences] = useState([{icon: <i class="fa fa-github" style={{fontSize:"1.4rem"}}></i>,link:"https://github.com/SyedSaimAliZaidi?tab=repositories"},{icon: <i class="fa fa-linkedin" style={{fontSize:"1.3rem"}}></i>,link:"https://www.linkedin.com/in/syed-saim-ali-zaidi-a0542714b"}])
    const [projects, setProjects]  =useState([
        
        {name:"EveryWater FILES (Web App)", technology: "React, Node.js, Express.js, MySQL, AWS S3 Bucket, AWS hosting"},
        {name:"Protein Structure Prediction",technology:"C++, DataStructures"},
        {name:"Rest APIs",technology:"Node.js, Express,js, MySQL, passport.js, passport-jwt, jwt"},
        {name:"Aab Admin Portal",technology: "mdbootstrap, jQuery, JavaSctipt"},        
        {name:"Bank Management System",technology:"C++, Object-Oriented-Programing"},
        {name:"Student Management System UI",technology:"MaterializeCSS"},
        {name:"Landing Page UI",technology:"MaterializeCSS, React"},
        
    ])
    const [education, setEducation] = useState([
        {link:"http://nu.edu.pk/", year: '2017 - present',duration: "Aug 2017 - present", degree: "Bachelor in Computer Science (BS-CS)", institute: "National University Of Computer And Emerging Sciences(FAST-NU), Karachi.", semester: '7th smester', percentage: 'CGPA: 2.44' },
        {link:"http://citycollege.edu.pk/", year: '2015 - 2017',duration: "Aug 2015 - May 2017",  degree: "Higher Secondary School Certificate (Pre-Engineering)", institute: "City College Of Science And Commerce, Multan.", semester: '', percentage: 'Percentage: 76%'},
        {link:"https://nishat.edu.pk/", year: '2013 - 2015', duration: "May 2013- May 2015",  degree: "Secondary School Certificate (Pre-Engineering)", institute: "Nishat High School, Multan.", semester: '', percentage: 'Percentage: 88%'},
    ])
    const [experience, setExperience] = useState([
        { link: "https://www.skynners.com/", year: '2019 - 2020',duration: "Sep 2019 - July 2020", position: "Web Developer", category:'Part-Time', company: "Skynners (Pvt.) Ltd." },
        { link: "https://syscrypt.co.uk/",year: '2020',duration: "Jan 2020 - Feb 2020", position: "React Native Developer", category:'Internship', company: "Syscrypt.co.uk"},
        { link: "https://www.skynners.com/",year: '2019', duration: "July 2019 - August 2019", position: "JavaScript Developer", category:'Internship', company: "Skynners (Pvt.) Ltd."},
    ])
    const [interests, setInterests] = useState(["Coding","Gym","Cycling","Travelling",'Cricket',"Badminton","Cooking","Cooking & Baking","Chess"])
    return (
        <Container>
            <Card className="fadeInanimated fadeIn" style={{marginTop:20, marginBottom:20}} raised={true}>
                <Grid container style={{paddingBottom:30}}>
                    <Grid item xs={12} >
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12}>
                                <Grid container style={{backgroundColor: '#22c0e8', paddingBottom: 40}}>
                                    <Grid item xs={12} sm={12} md={4} className={classes.grid}>
                                        <div align="center" className={classes.paddingTop}>
                                            <div>
                                                <Avatar src={avatar} className={classes.large}/>
                                            </div>
                                            <div>
                                                <Typography variant="h5"  className={classes.title}>Syed Saim Ali Zaidi</Typography>
                                                <Typography variant="subtitle1" className={classes.subtitle}>
                                                    <strong>MERN Stack Developer</strong>
                                                </Typography>
                                            </div>

                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={8}  className={classes.grid}>
                                        <Grid container>
                                            <Hidden xlUp smDown implementation="css">
                                                <Grid item xs={12} sm={12} md={12}>
                                                    <div className={classes.objectiveSection}>
                                                        <Typography variant="h6"><strong>Objective</strong></Typography>
                                                        <Typography style={{paddingTop:10,paddingLeft:10}}>
                                                            Looking for an opportunity to utilize my strengths to build my career
                                                            that would intrinsically help mein enhancing my skills and achieving
                                                            greater practical excellence in Web Development, Software
                                                            Delopment And Web Apps .
                                                        </Typography>
                                                    </div>
                                                </Grid>
                                            </Hidden>
                                            <Hidden mdUp implementation="css">
                                                <Grid item xs={12} sm={12} md={12}>
                                                    <div align="center" className={classes.objectiveSection}>
                                                        <Typography variant="h6"><strong>Objective</strong></Typography>
                                                        <Typography style={{paddingTop:10,paddingLeft:10}}>
                                                            Looking for an opportunity to utilize my strengths to build my career
                                                            that would intrinsically help mein enhancing my skills and achieving
                                                            greater practical excellence in Web Development, Software
                                                            Delopment And Web Apps .
                                                        </Typography>
                                                    </div>
                                                </Grid>
                                            </Hidden>
                                        </Grid>
                                
                                        <div >                                                
                                            <Grid container>
                                                <Hidden xlUp smDown implementation="css">
                                                
                                                    <Grid item xs={12} sm={12} md={4} style={{marginTop:20, display:"flex"}}>
                                                        <PhoneIcon />
                                                        <Typography style={{paddingLeft:5}}>+92 300 2935165</Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={4} style={{marginTop:20, display:"flex"}}>
                                                        <EmailIcon  />
                                                        <Typography style={{paddingLeft:5}}>saimgt123@gmail.com</Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={12} style={{marginTop:20, display:"flex"}}>
                                                        <HomeIcon  />
                                                        <Typography style={{paddingLeft:5}}>House# A-55, Decent Homes, Block-11, Gulshan-e-Iqbal, Karachi.</Typography>
                                                    </Grid>
                                                </Hidden>
                                            </Grid>
                                        </div>                                 
                                        
                                    </Grid>                           
                                </Grid>
                                
                            </Grid>
                        </Grid>
                        <Grid container className={classes.grid}>
                            <Grid item md={4}  className={classes.grid}>
                                <Hidden xlUp smDown implementation="css">
                            
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <div align="center" className={classes.paddingTop}>
                                            <Typography variant="h6"><strong>Soft Skills</strong></Typography>
                                            <div style={{paddingTop:10}}></div>
                                            <Chips data={softSkills}/>
                                        </div>
                                    </Grid>
                                </Grid>                           
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <div align="center"  className={classes.paddingTop}>
                                            <Typography variant="h6"><strong>Technical Skills</strong></Typography>
                                            <div style={{paddingTop:10}}></div>
                                            <Chips data={technicalSkills}/>
                                        </div>
                                    </Grid>
                                </Grid>                           
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <div align="center"  className={classes.paddingTop}>
                                            <Typography variant="h6"><strong>Interests</strong></Typography>
                                            <div style={{paddingTop:10}}></div>
                                            <Chips data={interests}/>
                                        </div>
                                    </Grid>
                                </Grid>                           
                                </Hidden>
                                  
                            </Grid>
                                
                            <Grid item md={8}  className={classes.grid}>
                                <Grid container>
                                    <Grid item md={12}>
                                        <div className={classes.paddingTop}>
                                            <Typography variant="h6"><strong>Experience</strong></Typography>
                                            <div style={{paddingTop:10}}></div>
                                            <Experience data={experience}/>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={12}>
                                        <div className={classes.paddingTop}>
                                            <Typography variant="h6"><strong>Education</strong></Typography>
                                            <div style={{paddingTop:10}}></div>
                                            <Education data={education} />
                                        </div>
                                    </Grid>
                                </Grid>

                                <Grid container>
                                    <Grid item md={12}>
                                        <div className={classes.paddingTop}>
                                            <Typography variant="h6"><strong>Projects</strong></Typography>
                                            <div style={{paddingTop:10}}></div>
                                            <ProjectList data={projects}/>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Hidden mdUp implementation="css">
                                <Grid item md={4}  className={classes.grid}>
                                    <Grid container>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <div align="center" className={classes.paddingTop}>
                                                <Typography variant="h6"><strong>Soft Skills</strong></Typography>
                                                <div style={{paddingTop:10}}></div>
                                                <Chips data={softSkills}/>
                                            </div>
                                        </Grid>
                                    </Grid>                           
                                    <Grid container>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <div align="center"  className={classes.paddingTop}>
                                                <Typography variant="h6"><strong>Technical Skills</strong></Typography>
                                                <div style={{paddingTop:10}}></div>
                                                <Chips data={technicalSkills}/>
                                            </div>
                                        </Grid>
                                    </Grid>                           
                                    <Grid container>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <div align="center"  className={classes.paddingTop}>
                                                <Typography variant="h6"><strong>Interests</strong></Typography>
                                                <div style={{paddingTop:10}}></div>
                                                <Chips data={interests}/>
                                            </div>
                                        </Grid>
                                    </Grid>     
                                    
                                    <Grid container>
                                        <div align="center"  className={classes.paddingTop}>

                                            <Typography variant="h6"><strong>Contact</strong></Typography>
                                            <div style={{paddingTop:10}}></div>
                                            <Grid container>
                                                  
                                                <Grid item xs={12} sm={12} md={12} style={{marginTop:20, display:"inline-block"}}>
                                                    <PhoneIcon />
                                                    <Typography style={{paddingLeft:5}}>+92 300 2935165</Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={12} style={{marginTop:20, display:"inline-block"}}>
                                                    <EmailIcon  />
                                                    <Typography style={{paddingLeft:5}}>saimgt123@gmail.com</Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={12} style={{marginTop:20, display:"inline-block"}}>
                                                    <HomeIcon  />
                                                    <Typography style={{paddingLeft:5}}>House# A-55, Decent Homes, Block-11, Gulshan-e-Iqbal, Karachi.</Typography>
                                                </Grid>
                                                </Grid>
                                            </div>
                                        </Grid>
                                </Grid>
                                
                            </Hidden>
                            
                        </Grid>
                    </Grid>
                </Grid>
                <div style={{backgroundColor:"#22c0e8", width:'100%', height:40}}>
                    </div>

            </Card>

        </Container>
    );
}