import { Grid, TextField, Typography, Button, Link } from '@mui/material';
import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout.jsx';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
      <form action="">
        <Grid container>
          {/* Inputs */}

          <Grid
            item
            xs={12}
            sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Ezequiel Grynberg"
              fullWidth
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
              sm={6}>
              <Button
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
