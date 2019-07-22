import React, { Component } from 'react'

export class Select extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row flex-wrap">
                            <div className="col">
                            <form>
                                <div className="form-group pl-7">
                                    <label className="exampleFormControlSelect1"> Choose Faculty</label>
                                    <select className="form-control">
                                        <option className="disabled">--Select Faculty--</option>
                                        <option> Name</option>
                                        <option> Name</option>
                                        <option> Name</option>
                                    </select>
                                </div>
                                </form>
                                </div>
                                <div className="col pl-6">
                                    <div className="form-group pl-5">
                                        <label className="exampleFormControlSelect1"> Choose Department</label>
                                        <select className="form-control">
                                            <option className="disabled">--Select Department--</option>
                                            <option> Name</option>
                                            <option> Name</option>
                                            <option> Name</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group pl-5">
                                        <label className="exampleFormControlSelect1"> Choose Level</label>
                                        <select className="form-control">
                                            <option className="disabled">--Select Level--</option>
                                            <option> 100</option>
                                            <option> 200</option>
                                            <option> 300 </option>
                                            <option> 400 </option>
                                        </select>
                                    </div>
                                </div>
                                <br/>
                                <div className="col mt-4">
                                <form>
                                <div className="form-group mt-2">
                                <button className="btn btn-primary">Go</button>
                                   </div>
                                   </form>
                                </div>
                    </div>
                    </div>
               
            </div>

        )
    }
}