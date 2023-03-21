// Installed by "react-uploader".
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";
import { useEffect, useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import axios from "axios";
import styles from "../dropzoneComponent/Dropzone.module.css";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import DownloadImage from "../downloadImage/DownloadImage";


// Initialize once (at the start of your app).
// const uploader = Uploader({ apiKey: "public_12a1y4ACPhzb5HDn9Nzjopp6CfyB" }); // Replace "free" with your API key.

const uploader = Uploader({
    apiKey: !!process.env.PUBLIC_UPLOAD_API_KEY
        ? process.env.PUBLIC_UPLOAD_API_KEY
        : "free",
});



const uploaderOptions = {
    maxFileCount: 1,
    mimeTypes: ["image/jpeg", "image/png", "image/jpg"],
    editor: { images: { crop: false } },
    styles: { colors: { primary: "#000" } },
    // Comment out this line & use 'onUpdate' instead of
    // 'onComplete' to have the dropzone close after upload.
    showFinishButton: false,

    styles: {
        colors: {
            primary: "#377dff"
        }
    }
}

function Dropzone() {
    const [fileUrl, setFileUrl] = useState("");
    const [restoredPhoto, setRestoredPhoto] = useState("");
    const [showRestored, setShowRestored] = useState(false);

    console.log(restoredPhoto);


    // download restored image by click on button
    const handleDownloadRestoredImage = () => {
        const link = document.createElement('a');

    }




    async function getRestoredPhoto() {
        // const response = await axios.post('http://localhost:3001/api/image', {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/image`, {
            fileUrl: fileUrl
        })
        setRestoredPhoto(response.data)

    }
    useEffect(() => {
        if (fileUrl.length > 0) getRestoredPhoto();
    }, [fileUrl]);

    const handleSwitch = (event) => {
        setShowRestored(!showRestored);
        console.log('Switch toggled:', event.target.checked);
    };

    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        marginRight: 17,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#000',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'rgb(100, 214, 207)' ? '#rgb(100, 214, 207)' : 'rgb(100, 214, 207)',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));




    return (
        <div className={styles.dropzone} >
            {restoredPhoto &&
                <div className={styles.toggleButton}>
                    {/* switch controll */}
                    {!showRestored && <FormControlLabel
                        control={<IOSSwitch checked={showRestored} onChange={handleSwitch} />}
                        gutterBottom
                        label="Show Compare"
                    />}
                    {showRestored && <FormControlLabel
                        gutterBottom
                        control={<IOSSwitch checked={showRestored} onChange={handleSwitch} />}
                        label="Show Compare"
                    />
                    }
                </div>
            }

            {/* Dropdown */}
            {!fileUrl && <UploadDropzone uploader={uploader}
                Options={uploaderOptions}
                onUpdate={files => setFileUrl(files.map(x => x.fileUrl).join("\n"))}
                onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}
                width="700px"
                height="250px" />
            }

            {!showRestored && <div className={styles.imageCollections}>
                <div className={styles.originalImage}>
                    {fileUrl && <img src={fileUrl} alt="Original Pic" style={{ borderRadius: '10px' }} />}
                </div>
                <div className={styles.restoredImage}>
                    {restoredPhoto && <img src={restoredPhoto} alt="Restored Pic" style={{ borderRadius: '10px' }} />}
                </div>
            </div>}
            {showRestored && <div className={styles.compareImage}>
                {fileUrl && <ReactCompareSlider
                    portrait={true}
                    gutterBottom
                    itemOne={<ReactCompareSliderImage src={fileUrl} alt="Image one" />} itemTwo={<ReactCompareSliderImage src={restoredPhoto} alt="Image two" />} style={{ width: "100%", height: "100%" }} />}
            </div>}
            <div>
            </div>
            {restoredPhoto &&
                <div className={styles.buttons}>
                    <button onClick={() => {
                        setFileUrl("")
                        setRestoredPhoto("")
                    }
                    }>Upload New</button>
                    <DownloadImage restoredPhoto={restoredPhoto} showRestored={showRestored} />



                </div>
            }
        </div >

    )
}

export default Dropzone;