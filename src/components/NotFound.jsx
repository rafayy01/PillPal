import React from "react";
import '../App.css'
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function NotFound() {
  return (
    <div id="oopss">
      <div id="error-text">
        <img
          src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
          alt="404"
        />
        <span>404 PAGE</span>
      </div>
      <Button href="/" variant="contained" color="success">
        Go Back
      </Button>
    </div>
  );
}
