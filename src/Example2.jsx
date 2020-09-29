import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
root: {
    "& > *": {
    margin: theme.spacing(1),
    },
},
}));
export function Example2(props) {
const [count, setCount] = useState(0);
const classes = useStyles();
return (
    <div className={classes.root}>
    <p>{count}</p>
    <Button variant="contained" color="secondary" onClick={()=>setCount(count + 1)}>
        Suppport
    </Button>
    </div>
);
}
