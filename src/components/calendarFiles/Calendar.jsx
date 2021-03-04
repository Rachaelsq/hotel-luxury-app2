import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment"
//pages
//components
/*  import "../calendarFiles/calendarStyle"*/ 
import Header from "./Header"

/* 
============
END IMPORTS
===========
*/







export default function calendar() {
  
  //value is what we are getting back from moment
  const value = moment()
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");
  const day = startDay.clone().subtract(1, "day")
  const calendar = []

  
  /* if you call methods onto the JS date objects, you are going to change the actual date.
  i dont want to change the value/date, i just want to work with the date. a way around this
  is to work with .clone to work with a clone of the date/value so that the actual date is not changed.  
  im getting the start of the month and then the start of the week to display first in the calendar
  */

  /* 
  1. get moment (inside of value)
  2. get the start day which is the start of the month then week
  3. get the end day which is the end of the month then week
  4. display the start and end day inside of a JS expression inside of the return
  5. use a while loop to go through the dates and place them in the array
  6. create an empty array (calendar) for the dates to display into
  7. for each iteration in the while loop there will be a weeks worth of dates
  
  */


while(day.isBefore(endDay, "day")) {
  calendar.push(
    Array(7)
    .fill(0)
    .map(() => day.add(1, "day").clone())
  );
}


return (
  <div>
  
  </div>
    ) 
  }





























/* 

return(
  <div> 
    <p>calendar here</p>
      {
        calendar.map(week => <div>
          {
            week.map(day => <div>
              {day.format("D")</div>}
              
              )

          }
          
          )
      }    
  </div>
  )
};
 */