import React from "react";
import Header from "./Header";
import style from "../CssModule/MainPage.css"
// import Calendar from "./Calendar";
import Calendar from 'react-calendar'
import CalendarEvent from "./CalendarEvent";


class Main extends React.Component{
    render() {
        return (
            <div className={'mainPage'}>
                <Header/>
                <div className='col-sm-3'>
                    <Calendar className={'calendar1'}/>
                    <Calendar className={'calendar1'}/>
                </div>
                <div className='col-sm-3'>
<CalendarEvent/>
                </div>
            </div>
        );
    }
}

export default Main;