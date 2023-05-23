import React, { Component } from 'react'
import axios from 'axios';

export default class UpdateCourse extends Component {


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


  onUpdate = async(e) => {
    
    e.preventDefault();

    //const id = this.props.match.params.id;

    const course = JSON.parse(sessionStorage.getItem('selectedPost'))
  
    const {courseName, cLocation, startTime, timeDuration, description} = this.state;
  
    const data = {
      courseName: courseName,
      cLocation: cLocation,
      startTime: startTime,
      timeDuration: timeDuration,
      description: description
    };
    console.log(data);
  
    try {
           
      const res = await axios.put(`/course/update/${course._id}`, data);
      if (res.data.success) {
        alert("Update Succesfully");
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
     
  };
  

  componentDidMount(){
    try {

      const course = JSON.parse(sessionStorage.getItem('selectedPost'))
      console.log(course,typeof(course))
      //const id = this.props.match.params.id;

      //const res = axios.get(`/post/${post._id}`);
      axios.get(`/course/${course._id}`).then(res=>{
        if (res.data.success) {
          this.setState({
            courseName:res.data.course.courseName,
            cLocation:res.data.course.cLocation,
            startTime:res.data.course.startTime,
            timeDuration:res.data.course.timeDuration,
            description:res.data.course.description
          });
          console.log(this.state.course);
        }
      }).catch(error=>(console.log('error',error))) 
       
      
    }
      catch (error) {
      console.error(error);
    }
  }





  render() {
    return (
         <div className="col-md-8 mt-4 mx-auto">
   <h1 className="h3 mb-3 font-weight-normal">Update Course</h1>
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
       <label style={{marginBottom: '5px'}}>Start Time</label>
       <input type="text"
       className="form-control"
       name="startTime"
       value={this.state.startTime}
       onChange={this.handleInputChange}/>
   </div>
   
   <div className="form-group" style={{marginBottom: '15px'}}>
       <label style={{marginBottom: '5px'}}>Time Duration</label>
       <input type="text"
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
   
   <button className="btn btn-success" type="submit" style={{marginTop: '15px'}} onClick={this.onUpdate}><i className="far fa-check-square"></i>
   &nbsp; Update
   </button>
      
   </form>
   </div>
       );
     }
}
