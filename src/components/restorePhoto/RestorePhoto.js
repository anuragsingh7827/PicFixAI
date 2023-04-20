import Box from '@mui/material/Box';
import Dropzone from "../dropzoneComponent/Dropzone";
import { Typography } from '@mui/material';
import styles from './RestorePhoto.module.css'
import { Uploader } from "uploader";
// import ReactGA from 'react-ga';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const uploader = Uploader({
    apiKey: !!process.env.PUBLIC_UPLOAD_API_KEY
        ? process.env.PUBLIC_UPLOAD_API_KEY
        : "free",
});
function RestorePhoto() {

    // useEffect(() => {
    //     ReactGA.pageview(window.location.pathname)
    // }, []);

    // ReactGA.pageview(window.location.pathname + window.location.search);


    const [fileUrl, setFileUrl] = useState("");
    const [restoredPhoto, setRestoredPhoto] = useState("");
    const [showRestored, setShowRestored] = useState(false);


    async function getRestoredPhoto() {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/image`, {
            fileUrl: fileUrl
        })
        setRestoredPhoto(response.data)

    }
    useEffect(() => {
        if (fileUrl.length > 0) getRestoredPhoto();
    }, [fileUrl]);


    return (
        <React.Fragment>
            <div className={styles.restorePhoto}>
                <Typography variant="h2" gutterbottom
                    sx={{ paddingTop: '30px', fontSize: '3rem', fontWeight: '700', marginBottom: '5px', color: ' #000', lineHeight: '50px', textAlign: 'center' }}
                >
                    Restore Photo
                </Typography>
                <Typography variant="h6" gutterbottom
                    sx={{ fontWeight: '400', marginBottom: '25px', color: ' #000', textAlign: 'center' }}
                >
                    Enhance your images like a pro!
                </Typography>
                <Box>
                    <Dropzone uploader={uploader} setFileUrl={setFileUrl} fileUrl={fileUrl} setRestoredPhoto={setRestoredPhoto} restoredPhoto={restoredPhoto} showRestored={showRestored} setShowRestored={setShowRestored} />
                </Box>
            </div>


        </React.Fragment >
    )
}

export default RestorePhoto