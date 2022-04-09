import React, { useState } from "react";

import CustomInput from "../custom-input/custom-input.component";
import { GoogleLogin } from "react-google-login";

import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  Grow,
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { BsGoogle as GoogleIcon } from "react-icons/bs";

import useStyles from "./auth.styles";
import { max } from "moment";

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = () => {
    return 0;
  };

  const handleChange = () => {
    return 0;
  };

  const handleShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const switchMode = () => {
    setIsSignup((isSignup) => !isSignup);
    setShowPassword(false);
  };

  const googleSuccess = (res) => {
    console.log(res);
  };

  const googleFailure = () => {
    console.log("Google Sign in Was unsuccessful. Try again later");
  };

  return (
    <Grow in>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">
            {isSignup ? "Sign up" : "Sign in"}
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <CustomInput
                    name="firstName"
                    label="First Name"
                    handleChange={handleChange}
                    half
                  />
                  <CustomInput
                    name="lastName"
                    label="Last Name"
                    handleChange={handleChange}
                    half
                  />
                </>
              )}
              <CustomInput
                name="email"
                label="Email Address"
                handleChange={handleChange}
                type="email"
              />
              <CustomInput
                name="password"
                label="Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
              {isSignup && (
                <CustomInput
                  name="confirmPassword"
                  label="Repeat Password"
                  handleChange={handleChange}
                  type="password"
                />
              )}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {isSignup ? "Sign up" : "Sign in"}
            </Button>

            <GoogleLogin
              clientId="231595243221-kerjv6dk57eurmrrhgocl4sjage0ds1u.apps.googleusercontent.com"
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
              render={(renderProps) => (
                <Button
                  className={classes.googleButton}
                  color="primary"
                  fullWidth
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  startIcon={
                    <GoogleIcon style={{ width: "20px", height: "20px" }} />
                  }
                  variant="contained"
                >
                  Googl Sign in
                </Button>
              )}
            />
          </form>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign in !"
                  : "Don't have an account? Sign up!"}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Grow>
  );
};

export default Auth;
