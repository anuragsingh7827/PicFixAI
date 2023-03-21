import styles from './Navbar.module.css'
import * as React from 'react';
import { Avatar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/PicFixAILogo.png';

function Navbar({ open, setOpen, user, isAuthenticated, setUser, setIsAuthenticated }) {

    const handleClickOpen = () => {
        setOpen(true);
    };
    const navigate = useNavigate();
    const logout = async () => {
        window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, '_self');
        // const res =await fetch('http://localhost:3001/auth/logout')
        // const newRes = await res.json();
        setIsAuthenticated(false);
        setUser(null);
        navigate('/');
    };
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/" style={{ textDecoration: 'none', color: "black" }}> <img className={styles.logo} src={logo} alt="" /></Link>
            </div>

            <div className={styles.buttons}>
                {user &&
                    <button onClick={logout}>
                        Log Out
                    </button>
                }
                {isAuthenticated ? (
                    <Avatar sx={{ marginLeft: '20px' }} alt={user.name} src={user.picture} />
                ) : (
                    <button onClick={handleClickOpen} style={{ cursor: 'pointer' }}>Try Now</button>
                )}
            </div>

        </div >
    )
}

export default Navbar;