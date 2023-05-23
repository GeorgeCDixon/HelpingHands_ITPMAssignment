import React, { Component } from 'react'
import axios from 'axios'


export default class ManageJobs extends Component{

  constructor(props){
    super(props)
  
    this.state={
      jobs:[]
    };
  }
  
  componentDidMount(){
    this.retrievePosts()
  }
  
  retrievePosts(){
    axios.get("/jobs").then(res =>{
      if(res.data.success){
        this.setState({
        jobs:res.data.existingJobs
        });
  
        console.log(this.state.jobs)
      }
        
    }) ;
  }
  
  
  
  filterData(jobs,searchKey){
    const result = jobs.filter((job) =>
      job.jobTitle.toLowerCase().includes(searchKey)||
      job.companyName.toLowerCase().includes(searchKey)
    )
  
    this.setState({jobs:result})
  }
  
  handleSearchArea = (e) =>{
    const searchKey= e.currentTarget.value;
  
    axios.get("/jobs").then(res =>{
      if(res.data.success){
        
        this.filterData(res.data.existingJobs,searchKey)
  
        }
        
    });
  }

 
  

  
    render() {
     // const { pageNumber, numPages } = this.state;

      return (
        <div className="container">
          <div className="row">
          <div className="col-1g-9 mt-2 mb-2">
          <center><h1>Serach Your Jobs</h1></center>
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
                <th scope= "col">Job Title</th>
                <th scope= "col">Company Name</th>
                <th scope= "col">Location</th>
                <th scope= "col">Experience</th>
                <th scope= "col">Description</th>
             
              </tr>
            </thead>
  
            <tbody>
              {this.state.jobs.map((jobs,index) =>(
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{jobs.jobTitle}</td>
                  <td>{jobs.companyName}</td>
                  <td>{jobs.companyLocation}</td>
                  <td>{jobs.reqExperience}</td>
                  <td>{jobs.description}</td>
                 
                </tr>
              ))}
            </tbody>
          </table>
          
                 
             
        </div>
      )
    }
    
}
