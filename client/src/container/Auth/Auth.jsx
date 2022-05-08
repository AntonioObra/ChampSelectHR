import React, { useState } from "react";
import { ApperWrap, MotionWrap } from "../../wrapper";
import { motion, MotionConfig } from "framer-motion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "../../actions/auth";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./Auth.scss";

const initialState = {
  userName: "",
  email: "",
  password: "",
  confirmedPassword: "",
};

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [isSignUp, setSignUp] = useState(false);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (
        formData.userName.length &&
        formData.password.length &&
        formData.email.length &&
        formData.confirmedPassword.length > 0
      ) {
        dispatch(signUp(formData, navigate));
      } else {
        setOpen(true);
      }
    } else {
      if (formData.userName.length && formData.password.length > 0) {
        dispatch(signIn(formData, navigate));
      } else {
        setOpen(true);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = (e) => {
    setShowPassword(!showPassword);
  };

  const switchMode = (e) => {
    e.preventDefault();
    setShowPassword(false);
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setSignUp(!isSignUp);
      setAnimateCard({ y: 0, opacity: 1 });
    }, 500);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      {/* <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button> */}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__auth-motion"
      >
        <div className="app__auth-input app__flex">
          <form onSubmit={handleSubmit}>
            <div className="app__auth-form-div">
              <div>
                <p className="p-text">UserName*</p>
                <input
                  className="p-text"
                  name="userName"
                  autoFocus
                  onChange={handleChange}
                />
              </div>
              {isSignUp && (
                <div>
                  <p className="p-text">E-Mail*</p>
                  <input
                    className="p-text"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              )}

              <div>
                <p className="p-text">Password*</p>
                <input
                  className="p-text"
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              {isSignUp && (
                <div>
                  <p className="p-text">ConfirmPassword*</p>
                  <input
                    type="password"
                    className="p-text"
                    name="confirmedPassword"
                    onChange={handleChange}
                  />
                </div>
              )}
            </div>

            <div className="app__auth-button">
              <button className="border-2 bg-lol-gold">
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
              <p onClick={switchMode}>
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </p>
            </div>
          </form>
        </div>
      </motion.div>

      <Snackbar
        open={open}
        // sx={{ background: "white", color: "black" }}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Please fill out all the required fields"
        action={action}
      />
    </>
  );
};

export default ApperWrap(
  MotionWrap(Auth, "app__auths"),
  "auth",
  "app__whitebg"
);
