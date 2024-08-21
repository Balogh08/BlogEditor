import {useCallback, useContext} from "react";
import {SnackbarContext, defaultDuration,
  defaultPosition, errorStyle} from "./Snackbar";

export const useSnackbar = () => {
  const {openSnackbar} = useContext(SnackbarContext);

  const open = useCallback(async (text = "", duration = defaultDuration) => {
    openSnackbar(text, duration, defaultPosition);
  }, [openSnackbar]);

  const openError = useCallback(async (text = "", duration = defaultDuration) => {
    openSnackbar(text, duration, defaultPosition, errorStyle);
  }, [openSnackbar]);

  return {open, openError};
};
