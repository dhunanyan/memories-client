import React from "react";

import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const CustomInput = ({
  type,
  name,
  label,
  handleChange,
  handleShowPassword,
  autoFocus,
  half,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        type={type}
        name={name}
        label={label}
        onChange={handleChange}
        variant="outlined"
        required
        autoFocus={autoFocus}
        fullWidth
        InputProps={
          name === "password" && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type === "password" ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }
        }
      />
    </Grid>
  );
};

export default CustomInput;
