import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//pages
//components
import "./calendarStyle.css"



/* 
============
END IMPORTS
===========
*/







export default function calendar() {
  




  /* 
  1. 3 main parts: current month, weekdays, and days of the month
  2. 
  3. 
  4. 
  5. 
  6
  7. 
  
  */



return (
  <>
  <div className="container">
    <div className="calendar">
      <div className="month">
        <i className="fas fa-angle-left prev"></i>

        <div class="date">
          <h1>May</h1>
          <p>Friday May 29, 2020</p>
        </div>

        <i className="fas fa-angle-right next"></i>
      </div>

      <div className="weekdays">
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
        <div>Sunday</div>
      </div>

      <div className="days">
        <div className="prev-date">26</div>
        <div className="prev-date">27</div>
        <div className="prev-date">28</div>
        <div className="prev-date">29</div>
        <div className="prev-date">30</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
          <div>17</div>
          <div>18</div>
          <div>19</div>
          <div>20</div>
          <div>21</div>
          <div>22</div>
          <div>23</div>
          <div>24</div>
          <div>25</div>
          <div>26</div>
          <div>27</div>
          <div>28</div>
          <div>29</div>
          <div>30</div>
          <div>31</div>
          <div className="next-date">1</div>
          <div className="next-date">2</div>
          <div className="next-date">3</div>
          <div className="next-date">4</div>
          <div className="next-date">5</div>
          <div className="next-date">6</div>
      </div>
    </div>
  </div>
  </>
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