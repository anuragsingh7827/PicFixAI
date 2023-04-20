import React from 'react'
import googleLogo from '../../assets/googleLogo.png'
import styles from './LoginPage.module.css'

function LoginPage() {

    // useEffect(() => {
    //     ReactGA.pageview(window.location.pathname);
    // }, []);

    const googleAuth = ({setLoginGoogle}) => {
        window.open(`${process.env.REACT_APP_API_URL}/auth/google/callback`, '_self');
        setLoginGoogle(true)
    }
    return (
        <div className={styles.loginPage}>

            <div className={styles.contentContainer}>
                <h1 >The magic of restoring <br /> any photo with AI.
                </h1>
                <p >Sign in to Upload a photo of a face and we will restore it to its original state.<br />your privacy is our top priority - we don't store any images of our users.</p>

                <button onClick={googleAuth}>
                    <img src={googleLogo} style={{ marginLeft: '-40px', width: '5rem', height: '4rem' }} alt="Google Logo" />
                    <span className={styles.signInText}><p> Sign in With Google</p></span>
                </button>
            </div>

        </div>
    )
}

export default LoginPage