import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import euroImg from '../../images/euro-icon-removebg-preview.png';
import gbpImg from '../../images/gbp-icon-removebg-preview.png';
import usdImg from '../../images/usd-icon-removebg-preview.png'
import classes from '../styles/Header.module.css';

const Navigation = () => {
    const [gbp, setGbp] = useState(false);
    const [euro, setEuro] = useState(false);

    const handleGBP = () => {
        setGbp(true);
    }
    const handleEuro = () => {
        setEuro(true);
    }
    console.log(gbp, euro)
    return (
        <div className="row">
            <div className="col-md-10 mx-auto mb-4">
                <div className="row">
                    <div className="col-lg-7">
                        <ul className='currency-menu'>
                            <h4>Currency</h4>
                            <li>
                                <NavLink style={{ background: '#6CD2F7', color: '#fff' }} onClick={handleGBP} to=''>
                                    <img src={gbpImg} alt="" /> GBP
                                </NavLink>
                                <NavLink to='' >
                                    <img src={usdImg} alt="" /> USD
                                </NavLink>
                                <NavLink to='' onClick={handleEuro}>
                                    <img src={euroImg} alt="" /> EURO
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-5">
                        <ul className='growth-menu'>
                            <h4>Low Risk</h4>
                            <li>
                                <NavLink to='/' className={(navInfo) => navInfo.isActive ? classes.active : ''}>
                                    Low Risk
                                </NavLink>
                                <NavLink to='/aggresive' className={(navInfo) => navInfo.isActive ? classes.active : ''}>
                                    Aggressive
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;