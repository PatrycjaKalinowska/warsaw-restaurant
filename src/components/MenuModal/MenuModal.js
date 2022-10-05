import { useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import './MenuModal.css'

const MenuModal = ( { mealsList, mealsListName, setDisplayMenu } ) => {

    const handleClose = () => {
        setDisplayMenu(false);
    } 

    return <div className="menu-modal__container">
    <FaTimes className="menu-modal__close" onClick={handleClose}/>
    <p className='menu-modal__header'>{mealsListName}</p>
    <ul className="menu-modal__list">
    {
        mealsList.map(item => item.map((item, index) => <li key={index} className="menu-modal__item"><span className='menu-modal__item-name'>{item.title}</span><span className='menu-modal__item-price'>{item.price}</span></li>))
    }    
    </ul>
    </div>
}

export default MenuModal;