import './Menu.css';
import menuList from '../../constants/menuList.js';
import MenuModal from '../MenuModal/MenuModal';
import { useState } from 'react';

const Menu = () => {
    const [mealsList, setMealsList] = useState([]);

    const handleMenuClick = (e) => {
        setMealsList([]);

        if (e.target.className.includes("1")) {
            setMealsList([menuList.breakfast]);
        } else if (e.target.className.includes("2")) {
            setMealsList([menuList.salad]);
        } else if (e.target.className.includes("3")) {
            setMealsList([menuList.soup]);
        } else if (e.target.className.includes("4")) {
            setMealsList([menuList.mainCourse]);
        } else if (e.target.className.includes("5")) {
            setMealsList([menuList.dessert]);
        } else if (e.target.className.includes("6")) {
            setMealsList([menuList.drinks]);
        }
    }
    return <div className='menu'>
        <div className='menu__container'>
            <div className='menu__item menu__item-1' onClick={handleMenuClick}>
                <p className='item-1' onClick={handleMenuClick} >Breakfast</p>
            </div>
            <div className='menu__item menu__item-2' onClick={handleMenuClick} >
                <p className='item-2' onClick={handleMenuClick} >Salads</p>
            </div>
            <div className='menu__item menu__item-3' onClick={handleMenuClick} >
                <p className='item-3' onClick={handleMenuClick} >Soups</p>
            </div>
            <div className='menu__item menu__item-4' onClick={handleMenuClick} >
                <p className='item-4' onClick={handleMenuClick} >Main courses</p>
            </div>
            <div className='menu__item menu__item-5' onClick={handleMenuClick} >
                <p className='item-5' onClick={handleMenuClick} >Desserts</p>
            </div>
            <div className='menu__item menu__item-6' onClick={handleMenuClick} >
                <p className='item-6' onClick={handleMenuClick} >Drinks</p>
            </div>
        </div>
        <MenuModal mealsList={mealsList}/>
    </div>
}

export default Menu;