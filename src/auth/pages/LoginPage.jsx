import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import {
  Grid,
  TextField,
  Typography,
  Button,
  Link,
  Alert,
} from '@mui/material';
import { Google } from '@mui/icons-material';

import { AuthLayout } from '../layout/AuthLayout.jsx';

import { useForm } from '../../hooks';
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from '../../store/auth/';

const formData = {
  email: '',
  password: '',
};

export const LoginPage = () => {
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector((state) => state.auth);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const { email, password, onInputChange, formState } = useForm(formData);

  const onSubmit = (e) => {
    e.preventDefault();

    setFormSubmitted(true);

    dispatch(startLoginWithEmailPassword(formState));
  };

  const onGoogleSigniIn = () => {
    dispatch(startGoogleSignIn());
  };
  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
          {/* Inputs */}
          <Grid
            item
            xs={12}
            sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              onChange={onInputChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
              name="password"
              onChange={onInputChange}
            />
          </Grid>

          {/* Botones */}
          <Grid
            container
            spacing={2}
            sx={{ mb: 2, mt: 1 }}>
            <Grid
              item
              xs={12}
              display={!!errorMessage ? '' : 'none'}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}>
              <Button
                disabled={isAuthenticating}
                variant="contained"
                fullWidth
                type="submit">
                Login
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}>
              <Button
                disabled={isAuthenticating}
                onClick={onGoogleSigniIn}
                variant="contained"
                fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="end">
            <Link
              component={RouterLink}
              color="inherit"
              to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
