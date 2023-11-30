import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import imgError404 from '../../assets/undraw_page_not_found_re_e9o6.svg'

export const Error404 = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <Box sx={{
                width: '100px',
            }}>
                <img src={imgError404} alt="Ejemplo" />
            </Box>
            <Typography variant="body1">
                Lo sentimos, la página que estás buscando no existe.
            </Typography>
            <Button
                component={RouterLink}
                to="/"
                variant="contained"
                color="primary"
                style={{ marginTop: '20px' }}
            >
                Ir a la página de inicio
            </Button>
        </div>
    );
};

