import {useState} from "react";
import {signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "../../../firebase";
import {useNavigate} from "react-router-dom";
import {useSnackbar} from "../../Snackbar";
// import {delay} from "../../../utils/delayUtil";

/**
 * Custom hook to manage authentication actions and state.
 *
 * Provides functionality to log in and log out a user
 * using Firebase Authentication, and to manage and
 * expose any errors that occur during these processes.
 * @return {Object} An object containing methods for login
 * and logout, and the current error state.
 */
export const useAuth = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {openError} = useSnackbar();

  /**
   * Attempts to log in a user with the provided email and password.
   *
   * @param {string} email - The user's email address.
   * @param {string} password - The user's password.
   * @return {Promise<void>} A promise that resolves
   * when the login attempt has been completed.
   * If the login attempt fails, the promise will reject with an error.
   */
  const login = async (email, password) => {
    if (loading) { // Check if a login operation is already in progress
      console.warn("Login is already in progress.");
      return; // Exit the function early if `loading` is true
    }
    setError(null);
    setLoading(true);
    let isSuccess = false;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      isSuccess = true;
    } catch (error) {
      console.error("Error signing in with email and password", error);
      setError(error.message);
      openError("Hiba a bejelentkezés során");
    } finally {
      setLoading(false);
      return isSuccess;
    }
  };

  /**
   * Logs out the currently authenticated user.
   *
   * @return {Promise<void>} A promise that resolves
   * when the user has been successfully logged out.
   * If the logout attempt fails, the promise will reject with an error.
   */
  const logout = async () => {
    setError(null);
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error logging out", error);
      setError(error.message);
    }
  };

  return {login, logout, error, loading};
};
