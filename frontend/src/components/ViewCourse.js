import React, { Component } from 'react'
import axios from 'axios'

export default class ViewCourse extends Component{

  constructor(props){
    super(props)
  
    this.state={
        courses:[]
    };
  }
  
  componentDidMount(){
    this.retrievePosts()
  }
  
  retrievePosts(){
    axios.get("/courses").then(res =>{
      if(res.data.success){
        this.setState({
        courses:res.data.existingCourses
        });
  
        console.log(this.state.courses)
      }
        
    }) ;
  }
  
  
  
  filterData(courses,searchKey){
    const result = courses.filter((course) =>
    course.courseName.toLowerCase().includes(searchKey)||
    course.cLocation.toLowerCase().includes(searchKey)
    )
  
    this.setState({courses:result})
  }
  
  handleSearchArea = (e) =>{
    const searchKey= e.currentTarget.value;
  
    axios.get("/courses").then(res =>{
      if(res.data.success){
        
        this.filterData(res.data.existingCourses,searchKey)
  
        }
        
    });
  }

  
  

  
    render() {
     // const { pageNumber, numPages } = this.state;

      return (
        <div className="container">
          <div className="row">
          <div className="col-1g-9 mt-2 mb-2">
          <center><h1>Manage Courses Deatils</h1></center>
          </div>

        

          <div className="col-1g-3 mt-2 mb-2">
          <input className="form-control" 
                type="search" 
                placeholder="Search" 
                name="searchQuery" 
                onChange={this.handleSearchArea} style={{width: "400px", height: "40px"}}>
          </input>
          </div>
          </div>
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th scope= "col">No</th>
                <th scope= "col">Course Name</th>
                <th scope= "col">Location</th>
                <th scope= "col">Start Date</th>
                <th scope= "col">Time Duration</th>
                <th scope= "col">Description</th>
          
              </tr>
            </thead>
  
            <tbody>
              {this.state.courses.map((courses,index) =>(
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{courses.courseName}</td>
                  <td>{courses.cLocation}</td>
                  <td>{courses.startTime}</td>
                  <td>{courses.timeDuration}</td>
                  <td>{courses.description}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* <button className="btn btn-success"><a href={`/add`} style={{textDecoration: 'none', color:'white'}}>Create New Tour</a></button>
                 */}
                 
             
        </div>
      )
    }
    
}
