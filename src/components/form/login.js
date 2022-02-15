import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/actions';



const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {message} = useSelector(state => state.userReducer);
    const [serverError, setserverError] = useState('');
    useEffect(()=>{
        console.log(message);
        setserverError(message);
    },[message,setserverError])
    const [state, setState] = useState({
        email: "",
        password: "",
        emailError: "",
        passwordError: ""
    })

    const handleEmail = (event) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const newState = { ...state }
        newState.emailError = "";
        newState.email = event.target.value;

        if (!newState.email) {
            newState.emailError = 'Email is required'
        } else if (!regex.test(newState.email)) {
            newState.emailError = "This is not a valid email format!"
        }
        setState(newState)
    };

    const handlePassword = (event) => {
        const newState = { ...state }
        newState.passwordError = "";
        newState.password = event.target.value;

        if (!newState.password) {
            newState.passwordError = 'Password is required'
        } else if (newState.password.length < 4) {
            newState.passwordError = "Password must be more than 4 characters";
        } else if (newState.password.length > 10) {
            newState.passwordError = "Password cannot exceed more than 10 characters";
        }
        setState(newState)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const user = {
            email: state.email,
            password: state.password
        };
        dispatch(loginUser(user));

    };

    const handleSignup = () => {
        navigate('/register');
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
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={state.email}
                        error={!!state.emailError}
                        helperText={state.emailError}
                        onChange={handleEmail}
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
                        value={state.password}
                        error={!!state.passwordError}
                        helperText={state.passwordError}
                        onChange={handlePassword}
                    />
                    <Typography variant='body2' color={"red"}>
                    {serverError}
                    </Typography>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Button variant="text" onClick={handleSignup}>
                                {"Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}


export default SignIn;