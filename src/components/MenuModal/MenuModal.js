import { useState } from 'react'
import './MenuModal.css'

const MenuModal = ( { mealsList } ) => {

    // 

    return <div className="menu-modal__container">
    <ul className="menu-modal__list">
    {
        mealsList.map(item => item.map((item, index) => <li key={index} className="menu-modal__item">{item.title}</li>))
    }    
    </ul>
    </div>
}

export default MenuModal;