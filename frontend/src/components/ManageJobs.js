import React, { Component } from 'react'
import axios from 'axios'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";


pdfMake.vfs = pdfFonts.pdfMake.vfs;



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
  
  onClickUpdate = (jobs) =>{
    sessionStorage.setItem('selectedPost', JSON.stringify(jobs))
  }

  onDelete = (id) =>{
    axios.delete(`/job/delete/${id}`).then((res) =>{
      alert("Delete Successfully");
      this.retrievePosts();
    })
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

  generatePDF = () => {
    const { jobs } = this.state;

    const docDefinition = {
      content: [
        { text: 'Jobs Details', style: 'header' },
        { text: 'Job information', style: 'subheader' },
        {
          table: {
            widths: ['*', '*', '*', '*', '*'],
            body: [
              [ 'Job Title', 'Company Name', 'Location', 'Experience', 'Description' ],
              ...jobs.map(job => [ job.jobTitle, job.companyName, job.companyLocation, job.reqExperience, job.description ]),
            ]
          }
        }
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        }
      }
    };
    
  
    pdfMake.createPdf(docDefinition).download('Job-Details.pdf');
  };
  

  
    render() {
     // const { pageNumber, numPages } = this.state;

      return (
        <div className="container">
          <div className="row">
          <div className="col-1g-9 mt-2 mb-2">
          <center><h1>Manage Jobs Deatils</h1></center>
          </div>

          <button className="btn btn-primary" style={{width: "200px", height: "40px", marginTop: '15px', margin: '10px 20px 20px'}} onClick={this.generatePDF}>
          Generate PDF
        </button>  

          {/* <div className="col-1g-3 mt-2 mb-2">
          <input className="form-control" 
                type="search" 
                placeholder="Search" 
                name="searchQuery" 
                onChange={this.handleSearchArea} style={{width: "400px", height: "40px"}}>
          </input>
          </div> */}
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
                <th scope= "col">Action</th>
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
                  <td>
                    <a className="btn btn-info" href={`/edit/${jobs._id}`} onClick={() =>this.onClickUpdate(jobs)}>
                      <i className="fas fa-edit"></i>&nbsp;Update
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(jobs._id)}>
                      <i className="fa fa-trasht"></i>&nbsp;Delete
                    </a>
                  </td>
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
