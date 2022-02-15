import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUserTODO } from '../store/actions';

export default function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [state, setState] = useState({
        fullName: "",
        email: "",
        password: "",
        fullNameError: "",
        emailError: "",
        passwordError: ""
    })
    const handlefullName = (event) => {
        const newState = { ...state };
        newState.fullNameError = ""
        newState.fullName = event.target.value;

        if (!newState.fullName) {
            newState.fullNameError = 'Fullname is required'
        }
        setState(newState);
    }

    const handleEmail = (event) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const newState = { ...state };
        newState.emailError = ""
        newState.email = event.target.value;

        if (!newState.email) {
            newState.emailError = 'Email is required'
        } else if (!regex.test(newState.email)) {
            newState.emailError = "This is not a valid email format!";
        }
        setState(newState);
    }
    const handlePassword = (event) => {
        const newState = { ...state };
        newState.passwordError = ""
        newState.password = event.target.value;

        if (!newState.password) {
            newState.passwordError = 'Password is required'
        } else if (newState.password.length < 4) {
            newState.passwordError = "Password must be more than 4 characters";
        } else if (newState.password.length > 10) {
            newState.passwordError = "Password cannot exceed more than 10 characters";
        }
        setState(newState);
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            name: state.fullName,
            email: state.email,
            password: state.password
        }
        dispatch(registerUserTODO(user));
        navigate('/')
    };

    const handleSignin = () => {
        navigate('/')
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <TextField
                                required
                                fullWidth
                                id="fullName"
                                label="Full Name"
                                name="fullName"
                                autoComplete="family-name"
                                value={state.fullName}
                                error={!!state.fullNameError}
                                helperText={state.fullNameError}
                                onChange={handlefullName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={state.email}
                                error={!!state.emailError}
                                helperText={state.emailError}
                                onChange={handleEmail}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                value={state.password}
                                error={!!state.passwordError}
                                helperText={state.passwordError}
                                onChange={handlePassword}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button variant="text" onClick={handleSignin}>
                                Already have an account? Sign in
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}