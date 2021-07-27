import React from "react";

export default function FormattedDate(props){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
    let month = months[props.date.getMonth()];
    let date = props.date.getDate();
    if (minutes <10) {
        minutes = `0${minutes}`;
    }
    if (hours <10) {
        hours = `0${hours}`;
    }
    return (
        <div>
            Last updated: {day} {date} {month} {hours}:{minutes}
        </div>
    );
}