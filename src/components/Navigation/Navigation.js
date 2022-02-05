import React from 'react';
import { NavLink } from 'react-router-dom';
import euroImg from '../../images/euro-icon-removebg-preview.png';
import gbpImg from '../../images/gbp-icon-removebg-preview.png';
import usdImg from '../../images/usd-icon-removebg-preview.png'
import classes from '../styles/Header.module.css';

const Navigation = () => {
    return (
        <div className="row">
            <div className="col-md-10 mx-auto mb-4">
                <div className="row">
                    <div className="col-md-7">
                        <ul className='currency-menu'>
                            <li>
                                <NavLink to=''>
                                    <img src={gbpImg} alt="" /> GBP
                                </NavLink>
                                <NavLink to='' >
                                    <img src={usdImg} alt="" /> USD
                                </NavLink>
                                <NavLink to='' >
                                    <img src={euroImg} alt="" /> EURO
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <ul className='growth-menu'>
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