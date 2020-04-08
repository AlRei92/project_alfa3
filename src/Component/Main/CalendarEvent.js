import React from "react";



class CalendarEvent extends React.Component {
    render(props) {
        const date = new Date();
        const year = date.getFullYear();
        let month = date.getMonth();
        return (
            <div>
                <PrevMonth/>
                <NexMonth/>
                <Month year={year} month={month}/>
                {/*<Month2 year={year} month={month+1}/>*/}
            </div>
        );
    }
}
function NexMonth(props) {
    return (
        <button > {">"} </button>
    );
}
function PrevMonth(props) {
    return(
        <button> {"<"} </button>
    );

}
function Month(props) {
    const nameMonth = ["January ", "February ", "March",
        "April","May ", "June ",
        "July","August","September",
        "October ","November","December"];
    let {year, month} = props;
    let curr = new Date(year, month);
    let next = new Date(year, month + 1);
    let dif = (next - curr)/(1000 * 3600 * 24);
    let index = (curr.getDay()+6) % 7;
    let table = [], tr,
        k = 1 - index;
    for (let i = 0; i < 5; i++) {
        tr = [];
        for (let j = 0; j < 7; j++) {
            tr.push(<td>{k > 0 && k <= dif ? k : '' }</td>);
            k++;
        }
        table.push(<tr>{tr}</tr>)
    }

    return (
        <div>
            <h3>Hall1</h3>
            <table>
                <caption>{nameMonth[month] + " "}{year}</caption>
                {table}
            </table>
        </div>
    )
}

export default CalendarEvent;