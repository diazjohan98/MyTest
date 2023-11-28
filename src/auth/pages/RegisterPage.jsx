// import { AuthLayout } from "../layout/AuthLayout"
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ImgSignUp from '../../assets/undraw_programming_re_kg9v.svg'
import { Link as RouterLink } from "react-router-dom"
import { Link } from '@mui/material';


const defaultTheme = createTheme();

export const RegisterPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${ImgSignUp})`, // Utiliza la imagen local
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#B0BAC3', // Cambia el color de fondo
            backgroundSize: '500px 479px', // Establece el tamaño de la imagen
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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

            <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold', }}>
              MyTest
            </Typography>
            <Typography component="h4" variant="h7" sx={{ fontWeight: 'bold', marginTop: '20px' }}>
              Create your free account
            </Typography>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="text"
                label="Full Name"
                name="text"
                autoComplete="text"
                autoFocus
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
              />

              <Button
                variant="contained"
                sx={{
                  ml: '190px',
                  mt: '20px',
                  mb: '20px',
                  backgroundColor: '#26A048',
                  color: '#000000',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#1F7F38',
                  },
                  paddingX: '40px', // Agregar padding horizontal de 15px
                }}
              >
                Create Account
              </Button>
              <Grid container>

                <Grid item>
                  <Link href="#" variant="body2" sx={{ color: '#7C838A', textDecorationLine: 'none' }}>
                    {"Already have a account? "}
                    <Typography variant="body2" component={RouterLink} to='/auth/login' sx={{ color: '#26A048' }}>
                      Log in
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}