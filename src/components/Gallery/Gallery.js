import './Gallery.css';
import photo01 from '../../assets/photos/photo01.jpg';
import photo02 from '../../assets/photos/photo02.jpg';
import photo03 from '../../assets/photos/photo03.jpg';
import photo04 from '../../assets/photos/photo04.jpg';
import photo05 from '../../assets/photos/photo05.jpg';
import { useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Gallery = () => {
    const photos = [photo01, photo02, photo03, photo04, photo05];
    
    const scrollImage = useRef(null);

    const handleArrowClick = (direction) => {
        const { current } = scrollImage;
        if (direction === 'left') {
            current.scrollLeft -= 300; 
        } else {
            current.scrollLeft += 300;
        }
    }

    return <div className='gallery' id="gallery">
        <div className='gallery__text-container'>
            <h2 className='gallery__header'>Gallery</h2>
            <p className='gallery__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  <br /><br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div className='gallery__gallery-container'>
            <FaAngleLeft className='gallery__arrow gallery__arrow-left' onClick={() => handleArrowClick('left')} />
            <FaAngleRight className='gallery__arrow gallery__arrow-right' onClick={() => handleArrowClick('right')}/>
            <div className='gallery__photos-container' ref={scrollImage}>
                {photos.map((item, index) => <img key={index} className="gallery__gallery-photo" src={item} alt='gallery'></img>)}
            </div>
        </div>
    </div>
}


export default Gallery;