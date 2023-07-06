import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/auth/authSlice.js';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config.js';
import { startLoadingNotes } from '../store/journal/index.js';

export const useCheckAuth = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout({ errorMessage }));
      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
      dispatch(startLoadingNotes());
    });
  }, []);

  return {
    status,
  };
};
