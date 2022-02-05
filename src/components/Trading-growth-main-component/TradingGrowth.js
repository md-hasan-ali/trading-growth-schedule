import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const TradingGrowth = () => {
    return (
        <div className='trading-growth-schedule'>
            <div className="container">
                <div className="title text-center mt-5">
                    <h2 className='mb-5'>Trading Growth Schedule</h2>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="trader-menu">
                            <Link to='/'>
                                <button>90k RISK MANAGER FOUND TRADER</button>
                            </Link>
                            <Link to='/risk60'>
                                <button>60k RISK MANAGER FOUND TRADER</button>
                            </Link>
                            <Link to='/risk40'>
                                <button>40k RISK MANAGER FOUND TRADER</button>
                            </Link>
                            <Link to='/risk14'>
                                <button>14k RISK MANAGER FOUND TRADER</button>
                            </Link>
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
