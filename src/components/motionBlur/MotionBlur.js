import { Box, Typography } from '@mui/material'
import React from 'react'
import Dropzone from "../dropzoneComponent/Dropzone";
import { Uploader } from "uploader";
// import ReactGA from 'react-ga';
import { useEffect, useState } from 'react';
import styles from '../motionBlur/MotionBlur.module.css'
import axios from 'axios';
const uploader = Uploader({
    apiKey: !!process.env.PUBLIC_UPLOAD_API_KEY
        ? process.env.PUBLIC_UPLOAD_API_KEY
        : "free",
});

function MotionBlur() {


    const [fileUrl, setFileUrl] = useState("");
    const [restoredPhoto, setRestoredPhoto] = useState("");
    const [showRestored, setShowRestored] = useState(false);


    async function getRestoredPhoto() {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/motionblur`, {
            fileUrl: fileUrl
        })
        setRestoredPhoto(response.data)

    }
    useEffect(() => {
        if (fileUrl.length > 0) getRestoredPhoto();
    }, [fileUrl]);


    return (
        <div className={styles.motionBlur}>
            <React.Fragment>
                <Typography variant="h2" gutterbottom
                    sx={{ paddingTop: '30px',fontSize:'3rem', fontWeight: '700', marginBottom: '5px', color: ' #000', lineHeight: '50px', textAlign: 'center' }}
                >
                    Motion Blur
                </Typography>
                <Typography variant="h6" gutterbottom
                    sx={{ fontWeight: '500', marginBottom: '25px', color: ' #0e0e0e', textAlign: 'center' }}
                >
                    Turn your blurry memories into crystal-clear masterpiecess
                </Typography>
                <Box sx={{}}>
                    <Dropzone uploader={uploader} setFileUrl={setFileUrl} fileUrl={fileUrl} setRestoredPhoto={setRestoredPhoto} restoredPhoto={restoredPhoto} showRestored={showRestored} setShowRestored={setShowRestored} />
                </Box>
            </React.Fragment >
        </div>

    )
}

export default MotionBlur