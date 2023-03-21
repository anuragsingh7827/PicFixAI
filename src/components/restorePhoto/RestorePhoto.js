import React from 'react'
import Box from '@mui/material/Box';
import Dropzone from "../dropzoneComponent/Dropzone";
import { Typography } from '@mui/material';
import styles from './RestorePhoto.module.css'

function RestorePhoto() {

    return (
        <React.Fragment>
            <div className={styles.restorePhoto}>
                <Typography variant="h2" gutterBottom
                    sx={{ fontWeight: '700', marginBottom: '25px', color: ' #000', lineHeight: '70px', fontSize: '4em', textAlign: 'center' }}
                >
                    Renew any portrait photo
                </Typography>
                <Box>
                    <Dropzone />
                </Box>
            </div>


        </React.Fragment >
    )
}

export default RestorePhoto