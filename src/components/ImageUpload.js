import { Button, Input, makeStyles, Modal } from "@material-ui/core";
import React, { useState } from "react";
import "./ImageUpload.css";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { setOpenAction, setCloseAction } from "./../actions/boleanAction";
import { storage, db } from "../firebase";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function ImageUpload() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const openModul = useSelector((state) => state.validation.open);
  const user = useSelector((state) => state.user.userloged);
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);
  const [imagen, setImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    // here goes the fancy code to upload the image
    if (imagen === null) {
      return alert("you should upload a image first!");
    }
    const uploadTask = storage.ref(`images/${imagen.name}`).put(imagen);

    // here the code from line 51 to 57 it's just to set a progress bar and to know how much time take doing an upload
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function ---
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      // this line of code just show us an error in case there is something wrong with the uploading
      (error) => {
        // error function ...name
        alert(error.message);
        console.log(error);
      },
      () => {
        // completly function to get a link to download the image and then use that images into our post in instagram

        storage
          .ref("images")
          .child(imagen.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: user?.displayName,
            });

            setProgress(0);
            setCaption("");
            setImage(null);
            dispatch(setCloseAction());
          });
      }
    );
  };
  return (
    <>
      <Modal
        open={openModul}
        onClose={() => dispatch(setCloseAction())}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <div className="imageupload">
            <progress value={progress} max="100" />
            <Input
              type="text"
              placeholder="Enter a caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
            <Input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>Upload</Button>
          </div>
        </div>
      </Modal>

      {/* I want to have ... */}
      {/*  caption input */}
      {/* File picker */}
      {/* post button */}
    </>
  );
}

export default ImageUpload;
