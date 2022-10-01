import './AboutUs.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';


const AboutUs = () => {

    return <div className='aboutUs__container'>


        <div className='aboutUs__section-left__container'>
            <div className='image_background'>
                <img src={image1} className="aboutUs__image aboutUs__image-1" alt='restaurant_photo'></img>
            </div>

        </div>
        <div className='aboutUs__text-header-container'>
            <h2>About Us</h2>
            <p className='aboutUs__text aboutUs__text-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='aboutUs__text-2-container'>
            <p className='aboutUs__text aboutUs__text-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /><br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br /> Duis aute irure dolor in </p>
        </div>
        <img src={image2} className="image aboutUs__image image aboutUs__image-2" alt='restaurant_photo'></img>



    </div>
}

export default AboutUs;