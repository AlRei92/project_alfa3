import React from "react";
import Inputlogin from "./inputlogin";
import {Switch} from "react-bootstrap";
import {Route} from "react-router-dom";
import style from "../CssModule/Loginpage.css"
import Main from "../Main/Main";


class Loginpage extends React.Component{
        render() {
                return (
                    <Switch className='switch'>
                            <Route path='/' exact component={Inputlogin}/>
                            <Route path='/main' component={Main}/>
                    </Switch>

                );
        }

}
export default Loginpage;