import React from "react";
import {Link} from "react-router-dom";

class Inputlogin extends React.Component{
    render() {
        return (
            <div className='inputLogin'>
                <div>
                    <h3 className={'loginH'}> Login </h3>
                </div>
                <div>
                <input className={'email'} type={'email'} name={'email'} placeholder={'email'}/>
                </div>
                <input className={'password'} type={'password'} name={'password'} placeholder={'password'}/>
                <ul>
                    <li className={'login_button'}>
                        <Link to={'/main'}>
                        Login
                        </Link>
                    </li>
                    <li className={'forgot'}>
                        <Link to={'/forgot'}>
                        Forgot password?
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }

}

export default Inputlogin;