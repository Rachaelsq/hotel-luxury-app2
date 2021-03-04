import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//pages
import MakeAReservationPage from "../pages/MakeAReservationPage";
//components
import Calendar from "../components/calendarFiles/Calendar"
/* import calendarStyle from ".../calendarFiles/calendarStyle"
 */

/* 
============
END IMPORTS
===========
*/

export default function ReservationModal() {
  return(
    <>

<div class="modal fade" id="reserveModal" tabindex="-1" role="dialog" aria-labelledby="reserveModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="reserveModalLabel">Select your dates</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p> hi, this is where the booking calendar will display.</p>
        <Calendar />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
};
