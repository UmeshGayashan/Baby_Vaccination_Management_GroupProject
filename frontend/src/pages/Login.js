import React, { useState } from 'react';
import { Button, TextField, Link, Paper, Box, Grid, Typography, Snackbar, Alert } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const defaultTheme = createTheme();

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();
    const [notification, setNotification] = useState({ open: false, message: '', severity: '' });

    const handleCloseNotification = () => {
        setNotification({ ...notification, open: false });
    };

    const handleLinkClick = () => {
        setNotification({ open: true, message: 'Contact Healthcare Professional', severity: 'error' });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://baby-vaccination-management-groupproject-w51l.onrender.com/public/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                document.cookie = `jwt=${data.token}; path=/; max-age=3600;`;
                login(data.userType, data.token, data.username, data.nic);

                if (data.userType === 'User') {
                    navigate("/high-admin-parants");
                } else if (data.userType === 'Guardian') {
                    navigate("/user-page");
                } else if (data.userType === 'Healthcare Professional') {
                    navigate("/low-admin");
                } else {
                    setError('Unknown user type');
                }
            } else {
                setError('Invalid username or password');
            }
        } catch (error) {
            setError('Network error occurred');
        }
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
                            Welcome To BabyVaxPro
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <div>User Name</div>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="username"
                                label="User Name"
                                autoComplete="username"
                                id="username"
                                autoFocus
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <div>Password</div>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            {error && (
                                <Typography variant="body2" color="error" align="center" sx={{ mt: 1 }}>
                                    {error}
                                </Typography>
                            )}

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Login
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2" onClick={handleLinkClick}>
                                        Forgot password?
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Snackbar
                open={notification.open}
                autoHideDuration={6000}
                onClose={handleCloseNotification}
            >
                <Alert onClose={handleCloseNotification} severity={notification.severity} sx={{ width: '100%' }}>
                    {notification.message}
                </Alert>
            </Snackbar>
        </ThemeProvider>
    );
}
