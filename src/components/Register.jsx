import { useContext, useEffect, useState } from 'react';
import UsersContext from '../context/UsersContext/UsersContext';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Copyright } from './Copyright/Copyright';

const defaultTheme = createTheme();

function Register() {
  const navigate = useNavigate();

  const userCtx = useContext(UsersContext)

  console.log(userCtx)
  const {
    loginUser,
    signupUser,
    usersData,
    authStatus,
    // verifyingToken
  } = userCtx

  console.log('valor del register authstatus', authStatus)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    address: '',
    phoneNumber: '',
    role: '',
    isLogin: true, // Establecemos el inicio de sesión como predeterminado
    error: ''
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu servidor o realizar otras acciones.
    console.log(formData)
    if (formData.isLogin) {
      await loginUser(formData).then(() => {
        navigate('/Products'); //Redirige al usuario si el inicio de sesión es exitoso
      }).catch((error) => {
        console.log('error mensaje', error)
        navigate('/register')
      });
    } else {
      await signupUser(formData).then(() => {
        navigate('/Products');
      }).catch((error) => {
        navigate('/register')
        console.log("Error en registro", error);
      })
    }
    console.log('Registrarse:', formData);
  }


  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div
            style={{
              marginTop: '40px',
              marginBottom: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px',
              border: '2px solid #1976d2',
              borderRadius: '25px',
              boxShadow: '0 2px 500px rgba(0, 0, 0, 0.4)'
            }}
          >
            <img
              src="/LogoAny.png" // Ruta de la imagen del logo en la carpeta "public"
              alt="Logo del negocio"
              style={{ width: '100px', height: '100px', marginBottom: '20px' }} // Ajusta el tamaño de la imagen según tus necesidades
            />
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
                    name="emailAddress"
                    autoComplete="email"
                    autoFocus
                    value={formData.emailAddress}
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
                    required
                    fullWidth
                    label="Correo Electrónico"
                    name="emailAddress"
                    autoComplete="email"
                    value={formData.emailAddress}
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
                    required
                    fullWidth
                    label="Dirección"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Teléfono Móvil"
                    name="phoneNumber"
                    value={formData.phoneNumber}
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
              <Grid container marginTop={2}>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                    ¿Olvidaste tu contraseña?
                  </Link> */}
                </Grid>
                <Grid item>
                  <Link to="#" variant="body2" onClick={handleRegisterToggle}>
                    {formData.isLogin ? 'Registrarse' : '¿Ya tienes una cuenta? Iniciar Sesión'}
                  </Link>
                </Grid>
              </Grid>
            </form>
            {/* <Copyright marginTop={2}/> */}
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Register;
