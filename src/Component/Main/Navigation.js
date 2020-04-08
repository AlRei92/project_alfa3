import React from "react";

import style from "../CssModule/HeaderStyle.css"

const Navigation = () => {
    return (
        <nav className="nav">

            <ul className='head'>
                <li className="manager">
                    Manager's panel|Herr Hans Landa
                </li>
                <li className="searching">
                    <input className={'search'} type={'text'} name={'text'} placeholder={'Search'}/>
                </li>
                <li className={'logout'}>
                Logout
                </li>
            </ul>
                <ul className='head2'>
                    <li className='addevent'>
                        Add event
                    </li>
                    <li className='eventlist'>
                        Event list
                    </li>
                </ul>

                </nav>
    );

};



export default Navigation;