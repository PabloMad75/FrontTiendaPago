import React, { useState } from 'react';
import { Avatar, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    mobilePhone: '',
    isLogin: true, // Establecemos el inicio de sesión como predeterminado
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegisterToggle = () => {
    setFormData({
      ...formData,
      isLogin: !formData.isLogin,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu servidor o realizar otras acciones.
    if (formData.isLogin) {
      console.log('Iniciar Sesión:', formData);
    } else {
      console.log('Registrarse:', formData);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div
          style={{
            marginTop: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar style={{ m: '1px', bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {formData.isLogin ? 'Iniciar Sesión' : 'Registrarse'}
          </Typography>
          <form onSubmit={handleSubmit} style={{ mt: '1px' }}>
            {formData.isLogin && (
              <>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Correo Electrónico"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </>
            )}
            {!formData.isLogin && (
              <>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Nombre"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Apellido"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Correo Electrónico"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Dirección"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Teléfono Móvil"
                  name="mobilePhone"
                  value={formData.mobilePhone}
                  onChange={handleChange}
                />
              </>
            )}
            {formData.isLogin && (
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordarme"
              />
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ mt: '3px', mb: '2px' }}
            >
              {formData.isLogin ? 'Iniciar Sesión' : 'Registrarse'}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={handleRegisterToggle}>
                  {formData.isLogin ? 'Registrarse' : '¿Ya tienes una cuenta? Iniciar Sesión'}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default Register;
