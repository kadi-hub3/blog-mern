import React from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
const Form = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Create a memory</Typography>
      </form>
    </Paper>
  );
};

export default Form;
