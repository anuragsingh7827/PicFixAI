import styles from './LandingPage.module.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import blurimg from '../../assets/girlImg.png'
import girlWithBluredImage from '../../assets/girlBluredImage.jpeg'
import MotionBlurImage from '../../assets/blurry-roads.jpg'
import RestoredMotionBlurImage from '../../assets/RestoredMotionBlurImage.png'
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Icon } from '@mui/material';

function LandingPage({ setOpen, open }) {

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div className={styles.landingPage}>
      <div className={styles.landingPageImage}>
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          transitionTime={4000}
          showIndicators={false}
          showStatus={false}
        >
          <div className={styles.carouselOne}>
            <div className={styles.landingPageContent}>
              <h1>Introducing One-Click <br />   Image Restoration <br /> with AI</h1>
              <p>Transform your blurry, low-resolution images into stunning works of art with AI. Our advanced AI-powered algorithm takes care of everything - from removing noise to enhancing sharpness and restoring lost details - all with just one click</p>
              <button onClick={handleClickOpen}>Try Now <Icon fontSize='small'><ArrowOutwardIcon /></Icon></button>
            </div>
            <div className={styles.compareSliderContainer}>
              <ReactCompareSlider
                changePositionOnHover={false}
                className={styles.reactCompareSlider}
                itemOne={<>
                  <ReactCompareSliderImage src={girlWithBluredImage} alt="Image one" />
                </>} itemTwo={<ReactCompareSliderImage src={blurimg} alt="Image two" />} />
            </div>
          </div>
          <div className={styles.carouselTwo}>
            <div className={styles.landingPageContent}>
              <h1>Eliminate Motion Blur <br /> with AI in just one Click </h1>
              <p>Our state-of-the-art image restoration algorithm is specifically designed to eliminate motion blur and give you crisp, clear images every time.
                Restore your images to their full potential and eliminate any motion blur.<br /><br /><br /></p>
              <button onClick={handleClickOpen}>Try Now<Icon fontSize='small'><ArrowOutwardIcon /></Icon>  </button>
            </div>
            <div className={styles.compareSliderContainer}>
              <ReactCompareSlider
                className={styles.reactCompareSlider}
                changePositionOnHover={false}
                itemOne={<ReactCompareSliderImage src={MotionBlurImage} alt="Image Before" />} itemTwo={<ReactCompareSliderImage src={RestoredMotionBlurImage} alt="Image after" />} />
            </div>
          </div>

        </Carousel >
      </div>
    
    </div>
  )
}

export default LandingPage