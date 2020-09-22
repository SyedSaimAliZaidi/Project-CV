import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
}));

export default function Projects(props) {
    const classes = useStyles()
    return(
        <ul className="timeline">
          {
            props.data.map((item,index)=> {

              return(
                <li key={index}>            
                  <div style={{paddingBottom:20}}>
                    <Typography variant="h6" component="h4">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {item.technology}
                    </Typography>
                  </div>
                </li>
            
              )
            })            
          }
        </ul>
    ) 
}
