import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";

import useStyles from "./form.styles";
import { createPost, updatePost } from "../../actions/posts.actions";

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId
      ? state.posts.find((updatedPost) => updatedPost._id === currentId)
      : null
  );
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }

    clear();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "tags") {
      setPostData({ ...postData, [name]: value.split(",") });
    } else {
      setPostData({ ...postData, [name]: value });
    }
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} a Memory
        </Typography>
        <TextField
          name="creator"
          label="Creator"
          value={postData.creator}
          onChange={(event) => handleChange(event)}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="title"
          label="Title"
          value={postData.title}
          onChange={(event) => handleChange(event)}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="message"
          label="Message"
          value={postData.message}
          onChange={(event) => handleChange(event)}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="tags"
          label="Tags"
          value={postData.tags}
          onChange={(event) => handleChange(event)}
          variant="outlined"
          fullWidth
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          type="button"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
