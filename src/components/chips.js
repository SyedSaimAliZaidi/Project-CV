import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
}));

export default function Chips(props) {
    const classes = useStyles()
    return props.data.map((item,index)=> <Chip className={classes.root} label={item} key={index} />  )
}
