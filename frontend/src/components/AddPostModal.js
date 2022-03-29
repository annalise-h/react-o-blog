import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";

import FormControl from "@mui/material/FormControl";
import "../css/AddModal.css";

const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", md: "550px" },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  mt: 2,
};

class AddPostModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal open={this.props.open}>
        <Box
          sx={style}
          component="form"
          onSubmit={this.props.handleModalSubmit}
        >
          <CloseIcon
            id="close-modal-icon"
            onClick={this.props.handleModalClose}
          />
          <FormControl>
            <InputLabel htmlFor="title">Title</InputLabel>
            <OutlinedInput id="title" name="title" label="title" />
          </FormControl>
          <TextField
            id="post-content"
            label="Body"
            name="body"
            margin="normal"
            multiline
            rows={10}
          />
          <Button variant="outlined" type="submit">
            Create Post
          </Button>
        </Box>
      </Modal>
    );
  }
}

export default AddPostModal;
