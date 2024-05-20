import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LinkMui from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';




// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function ForgotPassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      
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
            backgroundImage: 'url(/log.png)',

            // backgroundImage: 'src="/log.png"',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
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
              alignItems: 'center',
            }}
          >


            <img src="/2-101@2x.png" alt="logo" style={{ width: '200px', height: '150px', marginBottom: '-30px' }} />

            <Typography component="h1" variant="h5" style={{ marginBottom: '30px' }}>
              Recovery Password
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, marginLeft:"-80px" }}>

              <div>Email</div>
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="email"
                type="email"
                id="email"
                autoComplete="email"
                sx={{ width: '120%' }}
              />

        


              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Link to="/recover-password">
                <Button s

                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, width: '120%' }}
                >
                  Recover
                </Button>
              </Link>
              <Grid container>
                <Grid item xs>
                  <LinkMui href="/login" variant="body2">
                    Do you have an account?SignIn
                  </LinkMui>
                </Grid>
              </Grid>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}