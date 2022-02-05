import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import classes from '../styles/Header.module.css'

const TradingGrowth = () => {
    return (
        <div className='trading-growth-schedule my-5'>
            <div className="container">
                <div className="title text-center mt-5">
                    <h2 className='mb-5'>Trading Growth Schedule</h2>
                </div>
                <Navigation></Navigation>
                <div className="row">
                    <div className="col-md-3">
                        <div className="trader-menu">
                            <NavLink to='risk90' className={(navInfo) => navInfo?.isActive ? classes.active1 : ''}>
                                <button>90k RISK MANAGER</button>
                            </NavLink>
                            <NavLink to='risk60' className={(navInfo) => navInfo?.isActive ? classes.active1 : ''}>
                                <button>60k RISK MANAGER</button>
                            </NavLink>
                            <NavLink to='risk40' className={(navInfo) => navInfo?.isActive ? classes.active1 : ''}>
                                <button>40k RISK MANAGER</button>
                            </NavLink>
                            <NavLink to='risk14' className={(navInfo) => navInfo?.isActive ? classes.active1 : ''}>
                                <button>14k RISK MANAGER</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradingGrowth;
