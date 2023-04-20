import styles from './Navbar.module.css'
import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/PicFixAILogo.png';
import AccountMenu from '../menu/AccountMenu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Navbar({ open, setOpen, user, isAuthenticated, setUser, setIsAuthenticated }) {

    const [dropDown, setDropDown] = React.useState(null);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const handleDropdown = () => {
        setDropDown(true)

    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/" style={{ textDecoration: 'none', color: "black" }}>
                    <img className={styles.logo} src={logo} alt="" /></Link>
            </div>

            <div className={styles.buttons}>

                {isAuthenticated &&
                    <div className={styles.dropDownMenu} onClick={handleDropdown}>
                        {
                            <AccountMenu user={user} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
                        }
                    </div>
                }
                {!matches ? ''
                    : !isAuthenticated &&
                    <button onClick={handleClickOpen} style={{ cursor: 'pointer' }}>Try Now</button>

                }
            </div>

        </div >
    )
}

export default Navbar;