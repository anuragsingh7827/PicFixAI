import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import bluredImage from '../../assets/girlBluredImage.jpeg'
import MotionBlurImage from '../../assets/blurry-roads.jpg'
import { Box } from '@mui/system';
import styles from './CardContainer.module.css'
import { useNavigate } from 'react-router-dom';

export default function CardContainer({ isAuthenticated, setIsAuthenticated, setOpen, user, setUser }) {
    const navigate = useNavigate();
    const handleSignIn = () => {
        setOpen(false);
        if (user) {
            navigate('/restore')
        } else {
            navigate('/login')

        }
    }
    const handleMotionBlur=()=>{
      
        setOpen(false);
        if (user) {
            navigate('/motionblur')
        } else {
            navigate('/login')

        }
    }

    return (
        <div div className={styles.container}>
            <Box sx={{ display: 'flex', gap: '20px' }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={bluredImage}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Enhance the quality of your images with AI-based processing
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <button onClick={handleSignIn} className={styles.cardButton}>Restore Photo</button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={MotionBlurImage}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Enhance the quality of your images with AI-based processing
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <button onClick={handleMotionBlur} className={styles.cardButton}>Fix Motion Blurs</button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    );
}