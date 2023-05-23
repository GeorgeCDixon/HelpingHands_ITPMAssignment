import React, { Component } from 'react'
import axios from 'axios';

export default class CreateJobs extends Component {

  constructor(props){
    super(props);
    this.state={
      jobTitle:"",
      companyName:"",
      companyLocation:"",
      reqExperience:"",
      description:""

    }
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  onSubmit = (e) =>{

    e.preventDefault();

    const {jobTitle,companyName,companyLocation,reqExperience,description} = this.state;

    if (!jobTitle || !companyName || !companyLocation || !reqExperience || !description) {
      alert("Please fill in all fields.");
      return;
    }

    const data ={
      jobTitle:jobTitle,
      companyName:companyName,
      companyLocation:companyLocation,
      reqExperience:reqExperience,
      description:description
    }
    console.log(data)
  
    try {
      const res = axios.post("/job/save", data);
      if (res.data.success) {
        
        this.setState({
          jobTitle: "",
          companyName: "",
          companyLocation: "",
          reqExperience: "",
          description: ""
        });
      }
    } catch (error) {
      console.error(error);
    }
    alert("Job saved Successfully!");

  }

  render() {
 return (
      <div className="col-md-8 mt-4 mx-auto">
<h1 className="h3 mb-3 font-weight-normal">Create Jobs</h1>
<form className="needs-validation" noValidate>
  
<div className="form-group" style={{marginBottom: '15px'}}>
    <label style={{marginBottom: '5px'}} >Job Title</label>
    <input type="text"
    className="form-control"
    name="jobTitle"
    placeholder="Enter Job Title"
    value={this.state.jobTitle}
    onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom: '15px'}}>
    <label style={{marginBottom:'5px'}}>Company Name</label>
    <input type="text"
    className="form-control"
    name="companyName"
    placeholder="Enter Company Name"
    value={this.state.companyName}
    onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom: '15px'}}>
    <label style={{marginBottom: '5px'}}>Company Location</label>
    <input type="text"
    className="form-control"
    name="companyLocation"
    placeholder="Enter Company Location"
    value={this.state.companyLocation}
    onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom: '15px'}}>
    <label style={{marginBottom: '5px'}}>Requset Experience</label>
    <input type="text"
    className="form-control"
    name="reqExperience"
    placeholder="Enter Requset Experience"
    value={this.state.reqExperience}
    onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom: '15px'}}>
    <label style={{marginBottom: '5px'}}>Description</label>
    <input type="text"
    className="form-control"
    name="description"
    placeholder="Enter Description"
    value={this.state.description}
    onChange={this.handleInputChange}/>
</div>

<button className="btn btn-success" type="submit" style={{marginTop: '15px'}} onClick={this.onSubmit}><i className="far fa-check-square"></i>
&nbsp; Save
</button>

<button className="btn btn-warning" type="submit" style={{margin: '20px 20px 1px'}} onClick={this.onReset}><i className="far fa-check-square"></i>
&nbsp; Reset
</button>

</form>
</div>
    );
  }
  
}
