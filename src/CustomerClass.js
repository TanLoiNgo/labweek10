import React, { Component } from 'react';

export default class StudentClass extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            fullName: '',
            address: '',
            address2: '',
            city: '',
            province: '',
            postalCode: ''
        }
    }

    provinces = ["Alberta", "Bristish Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Price Edward Island", "Quebec", "Saskatchewan"]

    handleSubmit = (event) => {
        this.setState({ email: event.target.email.value })
        this.setState({ fullName: event.target.fullName.value })
        this.setState({ address: event.target.address.value })
        this.setState({ address2: event.target.address2.value })
        this.setState({ city: event.target.city.value })
        this.setState({ province: event.target.province.value })
        this.setState({ postalCode: event.target.postalCode.value })
        event.preventDefault()

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="container border border-4 border-success mt-5">
                    <h1>Data Entry Form</h1>

                    <div class="form-group">
                        <div class="row mt-4">
                            <div class="col-sm-6">
                                <label >Email </label>
                                <input type="email" name="email" placeholder="Enter Email" class=" mt-2 form-control"></input>
                            </div>
                            <div class="col-sm-6">
                                <label > Name </label>
                                <input type="text" name="fullName" placeholder="Full Name" class=" mt-2 form-control"></input>
                            </div>
                        </div>
                        <div class="form-group mt-4">
                            <label > Address </label>
                            <input type="text" class=" mt-2 form-control" name="address" placeholder="1234 Main st" />
                        </div>
                        <div class="form-group mt-4">
                            <label > Address 2 </label>
                            <input type="text" class=" mt-2 form-control" name="address2" placeholder="Apartment, Studio, or floor" />
                        </div>
                        <div class="row mt-4">
                            <div class="col-sm-4">
                                <label > City </label>
                                <input type="text" name="city" class=" mt-2 form-control"></input>
                            </div>
                            <div class="col-sm-4">
                                <label > Province </label>
                                <select name="province" class="form-control mt-2">
                                    <option value="">Choose...</option>
                                    {
                                        this.provinces.map(p => (
                                            <option value={p} key={p}>{p}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div class="col-sm-4">
                                <label > Postal Code </label>
                                <input type="text" name="postalCode" class=" mt-2 form-control"></input>
                            </div>
                        </div>
                        <div class=" form-group mt-4 ">
                            <label class="checkbox-inline" >
                                <input type="checkbox" class="check-space" value="agreement" />
                                Agree Term & Condition?</label>
                        </div>
                    </div>
                    <input type="submit" value="Submit" class="mt-4 btn btn-success" />
                    <br></br>
                    <br></br>
                </div>

                <div class="container border border-success w-50 p-3 mt-5">
                    <div class="form-group row ">
                        <p class="col-sm-6 text-right">Email: </p>
                        <div class="col-sm-6 text-left">
                            {this.state.email}
                        </div>
                    </div>
                    <div class="form-group row ">
                        <p class="col-sm-6 text-right">Address: </p>
                        <div class="col-sm-6 text-left">
                            {this.state.address}
                        </div>
                    </div>
                    <div class="form-group row">
                        <p class="col-sm-6 text-right">City: </p>
                        <div class="col-sm-6 text-left">
                            {this.state.city}
                        </div>
                    </div>

                    <div class="form-group row">
                        <p class="col-sm-6 text-right">Province: </p>
                        <div class="col-sm-6 text-left">
                            {this.state.province}
                        </div>
                    </div>
                    <div class="form-group row">
                        <p class="col-sm-6 text-right">Postal Code: </p>
                        <div class="col-sm-6 text-left">
                            {this.state.postalCode}
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
            </form >

        )
    }

}