import React,{useState,useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
root: {
    "& > *": {
    margin: theme.spacing(1),
    },
},
}));
export function Example(){
    const[count,setCount]=useState(0)
    useEffect(()=>{
        document.title = `Vous cliquez ${count} times`;
    })
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <p>{count}</p>
        <Button variant="contained" color="primary" onClick={()=>setCount(count+1)}>
        Primary
        </Button>
    </div>
    );
}