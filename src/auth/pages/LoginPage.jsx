import ImgSignUp from '../../assets/undraw_mobile_development_re_wwsn.svg';
import { Link as RouterLink, useNavigate } from "react-router-dom"
import * as MUI from './MaterialUIComponents'; // Importa todos los componentes de Material-UI
import { useState } from 'react';
import axios from 'axios'


const { Button, CssBaseline, TextField, Paper, Box, Grid, Typography, createTheme, ThemeProvider } = MUI;

const defaultTheme = createTheme();

export const LoginPage = () => {
  const navigate = useNavigate()

  // const [modalOpen, setModalOpen] = useState(false);
  // const handleModalOpen = () => {
  //   setModalOpen(true);
  // };
  // const handleModalClose = () => {
  //   setModalOpen(false);
  // };

  const [apiErrors, setApiErrors] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasenia, setContrasenia] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiErrors("");

    if ( correo === "" || contrasenia === "") {
      setApiErrors(["Todos los campos son obligatorios"]);
      // setModalOpen(true)
      return;
    }

    try {
      const datosRegistro = {
        correo: correo,
        contrasenia: contrasenia,
      };
      console.log (correo, contrasenia);
      const response = await axios.post(
        "https://proyecto-mytest.fly.dev/v1/login",
        datosRegistro, {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      );

      console.log(response.data);

      setCorreo("");
      setContrasenia("");
    } catch (error) {
      console.error(error);
      // handleModalOpen(true)
    }

    navigate('/')

  };

  return (
    // Provee el tema por defecto a todos los componentes bajo este árbol.
    <ThemeProvider theme={defaultTheme}>
      {/* Contenedor principal */}
      <Grid container component="main" sx={{ height: '100vh' }}>
        {/* Limpia los estilos del navegador */}
        <CssBaseline />
        {/* Columna izquierda */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${ImgSignUp})`, // Establece la imagen de fondo
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#B0BAC3', // Establece el color de fondo
            backgroundSize: '500px 479px', // Establece el tamaño de la imagen de fondo
            backgroundPosition: 'center',
          }}
        />
        {/* Columna derecha */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          {/* Contenedor de elementos */}
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              mt: '200px',
              alignItems: 'center',
            }}
          >
            {/* Encabezado */}
            <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold' }}>
              MyTest
            </Typography>
            {/* Formulario */}
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Campos de texto */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
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
                value={contrasenia}
                onChange={(e) => setContrasenia(e.target.value)}
                autoComplete="current-password"
                sx={{
                  width: '250%'
                }}
              />
              {/* Botón de iniciar sesión */}
              <Button
                type='submit'
                variant="contained"
                sx={{
                  mt: '20px',
                  mb: '20px',
                  backgroundColor: '#26A048',
                  color: '#000000',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  paddingX: '30px', // Agregar padding horizontal de 15px
                }}
              >
                Iniciar Sesión
              </Button>
              {/* <Modal
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={{
                  //  position: 'absolute' as 'absolute',
                   top: '50%',
                   left: '50%',
                   transform: 'translate(-50%, -50%)',
                   width: 400,
                   bgcolor: 'background.paper',
                   border: '2px solid #000',
                   boxShadow: 24,
                   p: 4,
                }}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  </Typography>
                </Box>
              </Modal> */}
              {/* Enlace para registrarse */}
              {apiErrors && <p className="errorRegister">{apiErrors}</p>}
              <Grid container justifyContent="flex-end">
                <Grid item>
                  {/* Texto y enlace para registro */}
                  <Typography variant="body2" sx={{ color: '#7C838A', textDecorationLine: 'none', marginLeft: 'auto' }}>
                    {"Don't have an account? "}
                    <RouterLink to='/auth/register' style={{ color: '#26A048', textDecoration: 'none' }}>
                      Sign Up
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
}