import React from 'react'
import styles from './../mobileView/mobileLandingPage.module.css'
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import bluredImage from '../../assets/girlBluredImage.jpeg'
import MotionBlurImage from '../../assets/blurry-roads.jpg'
import { useNavigate } from 'react-router-dom';

function MobileLandingPage({ user }) {
    const navigate = useNavigate();
    const handleSignIn = () => {
        if (user) {
            navigate('/restore')
        } else {
            navigate('/login')

        }
    }
    return (
        <div className={styles.mobileLandingPage}>
            <div className={styles.info}>
                <h1>Introducing One-Click Image Restoration <br /> with AI</h1>
                <p>Transform your blurry, low-resolution images into stunning works of art with AI. Our advanced AI-powered algorithm takes care of everything - from removing noise to enhancing sharpness and restoring lost details - all with just one click</p>
            </div>
            <div className={styles.mobileModel}>
                <h1>Restore Quality and Fix Motion Blur </h1>
                <div className={styles.container}>
                    <Grid container spacing={2}>
                        <Grid item sm={6}>
                            <Card onClick={handleSignIn}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={bluredImage}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.primary">
                                        Enhance the quality of your images with AI-based processing
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item sm={6}>
                            <Card onClick={handleSignIn} >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={MotionBlurImage}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.primary">
                                        Enhance the quality of your images with AI-based processing
                                    </Typography>
                                </CardContent>

                            </Card>

                        </Grid>
                    </Grid>

                </div>


            </div>

        </div >


    )
}

export default MobileLandingPage