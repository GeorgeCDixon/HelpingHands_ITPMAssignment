import React, { Component } from 'react'
import axios from 'axios';

export default class CreateCourse extends Component {

  constructor(props){
    super(props);
    this.state={
      courseName:"",
      cLocation:"",
      startTime:"",
      timeDuration:"",
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

    const {courseName,cLocation,startTime,timeDuration,description} = this.state;

    if (!courseName || !cLocation || !startTime || !timeDuration || !description) {
      alert("Please fill in all fields.");
      return;
    }

    const data ={
      courseName:courseName,
      cLocation:cLocation,
      startTime:startTime,
      timeDuration:timeDuration,
      description:description
    }
    console.log(data)
  
    try {
      const res = axios.post("/course/save", data);
      if (res.data.success) {
        
        this.setState({
          courseName: "",
          cLocation: "",
          startTime: "",
          timeDuration: "",
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
<h1 className="h3 mb-3 font-weight-normal">Create Courses</h1>
<form className="needs-validation" noValidate>
  
<div className="form-group" style={{marginBottom: '15px'}}>
    <label style={{marginBottom: '5px'}} >Course Name</label>
    <input type="text"
    className="form-control"
    name="courseName"
    
    value={this.state.courseName}
    onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom: '15px'}}>
    <label style={{marginBottom:'5px'}}>Location</label>
    <input type="text"
    className="form-control"
    name="cLocation"
    
    value={this.state.cLocation}
    onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom: '15px'}}>
    <label style={{marginBottom: '5px'}}>Start Date</label>
    <input type="date"
    className="form-control"
    name="startTime"
    
    value={this.state.startTime}
    onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom: '15px'}}>
    <label style={{marginBottom: '5px'}}>Time Duration</label>
    <input type="time"
    className="form-control"
    name="timeDuration"
    
    value={this.state.timeDuration}
    onChange={this.handleInputChange}/>
</div>

<div className="form-group" style={{marginBottom: '15px'}}>
    <label style={{marginBottom: '5px'}}>Description</label>
    <input type="text"
    className="form-control"
    name="description"
    
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
