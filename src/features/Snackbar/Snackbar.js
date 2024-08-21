import React, {createContext, useState} from "react";
import {CSSTransition} from "react-transition-group";
import styles from "./Snackbar.module.css";

// Snackbar default values
export const defaultPosition = "bottom-center";
export const defaultDuration = 5000;
export const defaultInterval = 250;
export const positions = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];
export const errorStyle = {
  background: "#E80000",
  color: "#FFFFFF",
};

// Context used by the hook useSnackbar() and HoC withSnackbar()
export const SnackbarContext = createContext(null);

export default function Snackbar({children}) {
  // Current open state
  const [open, setOpen] = useState(false);
  // Current timeout ID
  const [timeoutId, setTimeoutId] = useState(null);
  // Snackbar's text
  const [text, setText] = useState("");
  // Snackbar's duration
  const [duration, setDuration] = useState(defaultDuration);
  // Snackbar's position
  const [position, setPosition] = useState(defaultPosition);
  // Custom styles for the snackbar itself
  const [customStyles, setCustomStyles] = useState({});
  // Custom styles for the close button
  const [closeCustomStyles, setCloseCustomStyles] = useState({});

  const triggerSnackbar = (text, duration, position, style, closeStyle) => {
    setText(text);
    setDuration(duration);
    setPosition(position);
    setCustomStyles(style);
    setCloseCustomStyles(closeStyle);
    setOpen(true);
  };

  // Manages all the snackbar's opening process
  const openSnackbar = (text, duration, position, style, closeStyle) => {
    // Closes the snackbar if it is already open
    if (open === true) {
      setOpen(false);
      setTimeout(() => {
        triggerSnackbar(text, duration, position, style, closeStyle);
      }, defaultInterval);
    } else {
      triggerSnackbar(text, duration, position, style, closeStyle);
    }
  };

  // Closes the snackbar just by setting the "open" state to false
  const closeSnackbar = () => {
    setOpen(false);
  };

  // Returns the Provider that must wrap the application
  return (
    <SnackbarContext.Provider value={{openSnackbar, closeSnackbar}}>
      {children}

      {/* Renders Snackbar on the end of the page */}
      <CSSTransition
        in={open}
        timeout={150}
        mountOnEnter
        unmountOnExit
        // Sets timeout to close the snackbar
        onEnter={() => {
          clearTimeout(timeoutId);
          setTimeoutId(setTimeout(() => setOpen(false), duration));
        }}
        // Sets custom classNames based on "position"
        className={`${styles["snackbar-wrapper"]} ${
          styles[`snackbar-wrapper-${position}`]
        }`}
        classNames={{
          // eslint-disable-next-line max-len
          enter: `${styles["snackbar-enter"]} ${styles[`snackbar-enter-${position}`]}`,
          enterActive: `${styles["snackbar-enter-active"]} ${
            styles[`snackbar-enter-active-${position}`]
          }`,
          exitActive: `${styles["snackbar-exit-active"]} ${
            styles[`snackbar-exit-active-${position}`]
          }`,
        }}
      >
        {/* This div will be rendered with CSSTransition classNames */}
        <div>
          <div className={styles.snackbar} style={customStyles}>
            {/* Snackbar's text */}
            <div className={styles.snackbar__text}>{text}</div>

            {/* Snackbar's close button */}
            <button
              onClick={closeSnackbar}
              className={styles.snackbar__close}
              style={closeCustomStyles}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      </CSSTransition>
    </SnackbarContext.Provider>
  );
}

// CloseIcon SVG is styled with font properties
const CloseIcon = () => (

  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      // eslint-disable-next-line max-len
      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
      fill="#ECE6F0"/>
  </svg>
);
