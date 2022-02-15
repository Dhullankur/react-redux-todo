import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions";


const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer.user);
    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        My Todo
                    </Typography>
                    <Typography variant='subtitle2'>
                        {user?.name}
                    </Typography>
                    <Button variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick={handleLogout}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
};

export default Header;