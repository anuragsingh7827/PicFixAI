// Installed by "react-uploader".
import { UploadDropzone } from "react-uploader";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import styles from "../dropzoneComponent/Dropzone.module.css";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import DownloadImage from "../downloadImage/DownloadImage";
import LoadingSpin from "react-loading-spin";

function Dropzone({ uploader, setFileUrl, fileUrl, setRestoredPhoto, restoredPhoto, showRestored, setShowRestored }) {

    const uploaderOptions = {
        maxFileCount: 1,
        mimeTypes: ["image/jpeg", "image/png", "image/jpg"],
        editor: { images: { crop: false } },
        styles: {
            colors: {
                'active': '#000',
                "error": "red",
                "primary": "#000",
                "shade100": "#000",
                "shade200": "#fff",
                "shade300": "#000",
                "shade400": "#000", // drag and drop text
                "shade500": "#fff",
                "shade600": "#000",
                "shade700": "#fff",
                "shade800": "#fff",
                "shade900": "#fff" //upload an image text 
            }
        },
        showFinishButton: false,

    }
    const handleSwitch = (event) => {
        setShowRestored(!showRestored);
        console.log('Switch toggled:', event);
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
            {
                !fileUrl && <UploadDropzone
                    uploader={uploader}
                    options={uploaderOptions}
                    onUpdate={files => setFileUrl(files.map(x => x.fileUrl).join("\n"))}
                    onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}
                    width="700px"
                    height="250px"
                />
            }
            {
                !showRestored &&
                <div className={styles.imageCollections}>

                    <div className={styles.originalImage}>
                        {fileUrl && <img src={fileUrl} alt="Original Pic" style={{ borderRadius: '10px' }} />}
                    </div>
                    {restoredPhoto && <div className={styles.restoredImage}>
                        <img src={restoredPhoto} alt="Restored Pic" style={{ borderRadius: '10px' }} />
                    </div>}


                    {fileUrl && <> {!restoredPhoto && <div className={styles.loader}>
                        <div > <LoadingSpin primaryColor='#000' secondaryColor='rgb(93, 220, 211)' />
                        </div>
                    </div>
                    }</>

                    }

                </div>
            }



            {
                showRestored && <div className={styles.compareImage}>
                    {fileUrl && <ReactCompareSlider
                        portrait={true}
                        gutterBottom
                        itemOne={<ReactCompareSliderImage src={fileUrl} alt="Image one" />} itemTwo={<ReactCompareSliderImage src={restoredPhoto} alt="Image two" />} style={{ width: "100%", height: "100%" }} />}
                </div>
            }
            <div>
            </div>
            {
                restoredPhoto &&
                <div className={styles.buttons}>
                    <button onClick={() => {
                        setFileUrl("")
                        window.location.reload();
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