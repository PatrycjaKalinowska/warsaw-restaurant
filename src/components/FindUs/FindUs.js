import './FindUs.css';

const FindUs = () => {
    return <div className='find-us' id='findUs'>
        <h2 className='find-us__header'>Find Us</h2>
        <div className='find-us__container'>
            <div className='find-us__text-container'>
                <div className='find-us__text find-us__location'>
                    <h3>Location:</h3>
                    <p>Mokotowska 17</p>
                    <p>00-640 Warsaw</p>
                </div>
                <div className='find-us__text find-us__opening'>
                    <h3>Opening hours:</h3>
                    <p>Monday - Thursday:  10:00-22:00</p>
                    <p>Saturday - Sunday:  12:00-22:00</p>
                </div>
                <div className='find-us__text find-us__contact'>
                    <h3>Contact us:</h3>
                    <p>phone:  22 666 55 44</p>
                    <p>email:  warsaw.restaurant@gmail.com</p>
                </div>
            </div>
            <div className='find-us__map-container'>
                <iframe className="find-us__map" title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1989.190313177854!2d21.01510141523145!3d52.21945726621169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecce6010cab07%3A0x5ec9aabfbc881889!2sMokotowska%2017%2C%2000-640%20Warszawa!5e1!3m2!1spl!2spl!4v1665329386582!5m2!1spl!2spl" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

    </div>
}

export default FindUs;