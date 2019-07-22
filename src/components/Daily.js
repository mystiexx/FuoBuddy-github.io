import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FaCalendarDay, FaCalendar, FaCalendarPlus } from 'react-icons/fa'

export class Daily extends Component {
    render() {
        return (
            <div>
            <div className="container">
            <div className="table-responsive pl-3 pr-3 flex-wrap">
                <table className="table table-striped table-bordered table-hover table-dark">
                    <caption> Timetable </caption>
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Time</th>
                            <th scope="col">Class Details</th>
                            <th scope="col">Venue</th>
                           
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" rowSpan="4">8:30AM-9:30AM</th>
                            <td id="Course Code">BIO 205</td>
                            <td id="Course Code">FB1(BIOLOGY LAB/CHEMISTRY LAB)</td>
                        </tr>
                        <tr>
                            <td scope="row">ECO 401</td>
                            <td id="Course Code">FB3(104F)</td>
                        </tr>
                        <tr>
                            <td scope="row">ECO 401</td>
                            <td id="Course Code">FB3(104F)</td>
                        </tr>
                        <tr>
                            <td scope="row">ECO 401</td>
                            <td id="Course Code">FB3(104F)</td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan="4">9:30AM-10:30AM</th>
                            <td id="Course Code">BIO 205</td>
                            <td id="Course Code">FB1(BIOLOGY LAB/CHEMISTRY LAB)</td>
                        </tr>
                        </tbody>
                        </table>
                        </div>
            <div className="row">
            <div className="col ml-5">
            <button className="btn btn-dark ml-5">
            <FaCalendarDay style={{ width: 30, height: 30 }} className="d-inline-block align-top" /> <br/>
            Day
            </button>
            </div>
            <div className="col ml-5">
            <button className="btn btn-dark ml-5">
            <FaCalendar style={{ width: 30, height: 30 }} className="d-inline-block align-top" /> <br/>
            Month 
            </button>
            </div>
            <div className="col ml-5">
            <button className="btn btn-dark ml-5">
            <FaCalendarPlus style={{ width: 30, height: 30 }} className="d-inline-block align-top" /> <br/>
            Add Course 
            </button>
            </div>
            </div>
                </div>
                </div>
        )
    }
}