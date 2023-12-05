// Importa la imagen de ilustración y otros elementos necesarios
import ImgSignUp from '../../assets/undraw_programming_re_kg9v.svg';
import { Link as RouterLink } from "react-router-dom";
import * as MUI from './MaterialUIComponents'; // Importa todos los componentes de Material-UI
import { useState } from 'react';
import axios from 'axios'

// Extrae los componentes necesarios de Material-UI
const { Button, CssBaseline, TextField, Paper, Box, Grid, Typography, createTheme, ThemeProvider } = MUI;

// Crea el tema por defecto para el componente
const defaultTheme = createTheme();

// Definición del componente de registro
export const RegisterPage = () => {

   // Define estado para manejar los errores de la API
   const [apiErrors, setApiErrors] = useState([]);

   const handleSubmit = async (event) => {
     event.preventDefault();
     const formData = new FormData(event.currentTarget);
 
     try {
       // Realiza la solicitud POST a la API utilizando Axios
       const response = await axios.post('https://proyecto-mytest.fly.dev/v1/user', {
         nombre: formData.get('fullName'),
         correo: formData.get('email'),
         contrasenia: formData.get('password'),
       });
 
       // Verifica si la solicitud fue exitosa (código de estado 2xx)
       if (response.status === 200) {
         // El usuario se registró exitosamente
         console.log('Usuario registrado exitosamente');
         // Puedes redirigir al usuario a otra página o realizar alguna acción adicional aquí
       } else {
         // La solicitud falló, maneja los errores de la API
         setApiErrors(response.data.errors || []);
         console.error('Error al registrar usuario:', response.data.errors);
       }
     } catch (error) {
       console.error('Error al conectarse con la API:', error);
     }
   };

  return (
    // Provee el tema por defecto a todos los componentes bajo este árbol.
    <ThemeProvider theme={defaultTheme}>
      {/* Contenedor principal */}
      <Grid container component="main" sx={{ height: '100vh' }}>
        {/* Limpia los estilos del navegador */}
        <CssBaseline />
        {/* Columna izquierda con la imagen de fondo */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${ImgSignUp})`, // Utiliza la imagen local como fondo
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#B0BAC3', // Cambia el color de fondo
            backgroundSize: '500px 479px', // Establece el tamaño de la imagen de fondo
            backgroundPosition: 'center',
          }}
        />
        {/* Columna derecha con el formulario */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          {/* Contenedor de elementos */}
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              mt: '160px',
              alignItems: 'center',
            }}
          >
            {/* Título */}
            <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold' }}>
              MyTest
            </Typography>
            {/* Título secundario */}
            <Typography component="h4" variant="h7" sx={{ fontWeight: 'bold', marginTop: '20px' }}>
              Create your free account
            </Typography>
            {/* Formulario */}
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Campos de texto */}
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                margin="normal"
                size="medium"
                name="fullName"
                required
                sx={{
                  width: '250%'
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{
                  width: '250%'
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{
                  width: '250%'
                }}
              />
              {/* Botón de crear cuenta */}
              <Button
                type="submit" // Indica que este botón es de tipo submit
                variant="contained"
                sx={{
                  mt: '20px',
                  mb: '20px',
                  backgroundColor: '#26A048',
                  color: '#000000',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  paddingX: '40px',
                }}
              >
                Create Account
              </Button>
              {/* Mostrar errores de la API, si existen */}
              {apiErrors.length > 0 && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" color="error">
                    {apiErrors.map((error, index) => (
                      <div key={index}>{error.msg}</div>
                    ))}
                  </Typography>
                </Box>
              )}
              {/* Enlace para iniciar sesión */}
              <Grid container>
                <Grid item>
                  {/* Texto y enlace para iniciar sesión */}
                  <Typography variant="body2" sx={{ color: '#7C838A', textDecorationLine: 'none' }}>
                    {"Already have an account?"}
                    <RouterLink to='/auth/login' style={{ color: '#26A048', textDecoration: 'none' }}>
                      Log in
                    </RouterLink>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};