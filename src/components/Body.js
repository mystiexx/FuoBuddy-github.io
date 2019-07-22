import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../stylesheets/clock.css'


export const Body = React.createClass({
    render() {
        return (
            <div className="table-responsive pl-3 pr-3 flex-wrap">
                <table className="table table-bordered table-striped">
                    <caption> Timetable </caption>
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Days</th>
                            <th rowspan="3">Course Code</th>
                            <th scope="col">Programme</th>
                            <th scope="col">Venue</th>
                            <th scope="col">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" rowSpan="5">MONDAY <br /> 3/6/2019</th>
                            <th id="Course Code">BIO 205</th>
                            <td> BIOLOGY </td>
                            <td> FBI (BIOLOGY LAB/CHEMISTRY LAQB) </td>
                            <td rowSpan="5"> 8:30AM - 11:00AM </td>
                        </tr>
                        <tr>
                            <th id="Course Code"> ECO 401 </th>
                            <td> ECONOMICS AND DEV.STUDIES </td>
                            <td> FB3 (104F)</td>
                        </tr>
                        <tr>
                            <th id="Course Code" rowSpan="3">FEN 301</th>
                            <td>CIVIL/ELECCTRICAL-ELECTRONICS ENGINEERING </td>
                            <td>FB2 (101D) </td>
                        </tr>
                        <tr>
                            <td>MECHANICAL/MECHATRONICS ENGINEERING</td>
                            <td>FEB LTA </td>
                        </tr>
                        <tr>
                            <td>CHEMICAL/PETROLEUM AND GAS ENINEERING</td>
                            <td>FB1(101D) </td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan="4">TUESDAY <br /> 4/6/2019 </th>
                            <th id="Course Code">HIS 301 </th>
                            <td>HISTORY AND INTERNATIONAL RELATIONS </td>
                            <td>FB3 (104C) </td>
                            <td rowSpan="4">11:30AM - 2:00PM </td>
                        </tr>
                        <tr>
                            <th id="Course Code">MTH 305 </th>
                            <td>MATHEMATICS/PHYSICS </td>
                            <td>FB1 (101C) </td>
                        </tr>
                        <tr>
                            <th id="Course Code">ENG 307 </th>
                            <td>ENGLISH AND COMM STUDIES </td>
                            <td>FMS LTB </td>
                        </tr>
                        <tr>
                            <th id="Course Code">BUS 305 </th>
                            <td>ACCOUNTING/MARKETING <br/> BUSINESS ADMIN/BUSINESS EDU </td>
                            <td>AUDITORUIM 1 <br/> FB1 (102C) </td>
                        </tr>
                    </tbody>
                </table>


            </div>


        )
    }
})