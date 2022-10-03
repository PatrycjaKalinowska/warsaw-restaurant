import './Menu.css';
import menuList from '../../constants/menuList.js';
import MenuModal from '../MenuModal/MenuModal';
import { useState } from 'react';

const Menu = () => {
    const [mealsList, setMealsList] = useState([]);
    const [mealsListName, setMealsListName] = useState("");
    const [displayMenu, setDisplayMenu] = useState(false);

    const handleMenuClick = (e) => {
        setMealsList([]);

        if (e.target.className.includes("1")) {
            setMealsList([menuList.breakfast]);
            setMealsListName('Breakfast:');
            setDisplayMenu(true);
        } else if (e.target.className.includes("2")) {
            setMealsList([menuList.salad]);
            setMealsListName('Salads:');
            setDisplayMenu(true);
        } else if (e.target.className.includes("3")) {
            setMealsList([menuList.soup]);
            setMealsListName('Soups:');
            setDisplayMenu(true);
        } else if (e.target.className.includes("4")) {
            setMealsList([menuList.mainCourse]);
            setMealsListName('Main Courses:');
            setDisplayMenu(true);
        } else if (e.target.className.includes("5")) {
            setMealsList([menuList.dessert]);
            setMealsListName('Desserts:');
            setDisplayMenu(true);
        } else if (e.target.className.includes("6")) {
            setMealsList([menuList.drinks]);
            setMealsListName('Drinks:');
            setDisplayMenu(true);
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
        {displayMenu ? <MenuModal mealsList={mealsList} mealsListName={mealsListName} setDisplayMenu={setDisplayMenu}/> : ''}
    </div>
}

export default Menu;