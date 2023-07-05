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
import { useForm } from '../../hooks/useForm.js';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks.js';

const formData = {
  email: '',
  password: '',
  displayName: '',
};

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [
    (value) => value.length >= 8,
    'El password debe tener mas de 8 caracteres',
  ],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === 'checking',
    [status]
  );
  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();

    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Crear cuenta">
      <h1>FormValid {isFormValid ? 'Valido' : 'Incorrecto'}</h1>
      <form onSubmit={onSubmit}>
        <Grid container>
          {/* Inputs */}

          <Grid
            item
            xs={12}
            sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre Completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="email@google.com"
              fullWidth
              name="email"
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
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
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
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
              xs={12}>
              <Button
                disabled={isCheckingAuthentication}
                type="submit"
                variant="contained"
                fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="end">
            <Typography sx={{ mr: 1 }}>Ya tienes cuenta?</Typography>
            <Link
              component={RouterLink}
              color="inherit"
              to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
