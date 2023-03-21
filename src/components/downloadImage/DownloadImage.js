import axios from 'axios';
import React from 'react'
import styles from './DownloadImage.module.css'

function DownloadImage({ restoredPhoto }) {
    // Get the value of the input field
    const downloadFile = () => {




        // Use Axios to download the file
        axios({
            url: restoredPhoto,
            method: 'GET',
            responseType: 'blob',
        }).then((response) => {
            // Create a link element to trigger the download
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(new Blob([response.data]));
            link.setAttribute('download', 'image.jpg'); // set the file name
            document.body.appendChild(link);
            link.click();
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <div className={styles.downloadButtons}>
            <button onClick={downloadFile}>Download Pic</button>
        </div>
    )
}

export default DownloadImage