import React, { Component } from 'react'
import axios from 'axios'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default class ManageCourse extends Component{

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
  
  onClickUpdate = (courses) =>{
    sessionStorage.setItem('selectedPost', JSON.stringify(courses))
  }

  onDelete = (id) =>{
    axios.delete(`/course/delete/${id}`).then((res) =>{
      alert("Delete Successfully");
      this.retrievePosts();
    })
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

  generatePDF = () => {
    const { courses } = this.state;

    const docDefinition = {
      content: [
        { text: 'Courses Details', style: 'header' },
        { text: 'Courses information', style: 'subheader' },
        {
          table: {
            widths: ['*', '*', '*', '*', '*'],
            body: [
              [ 'Course Name', 'Location', 'Start Date', 'Time Duration', 'Description' ],
              ...courses.map(course => [ course.courseName, course.cLocation, course.startTime, course.timeDuration, course.description ]),
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
    
  
    pdfMake.createPdf(docDefinition).download('Course-Details.pdf');
  };
  

  
    render() {
     // const { pageNumber, numPages } = this.state;

      return (
        <div className="container">
          <div className="row">
          <div className="col-1g-9 mt-2 mb-2">
          <center><h1>Manage Courses Deatils</h1></center>
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
                <th scope= "col">Course Name</th>
                <th scope= "col">Location</th>
                <th scope= "col">Start Date</th>
                <th scope= "col">Time Duration</th>
                <th scope= "col">Description</th>
                <th scope= "col">Action</th>
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
                  <td>
                    <a className="btn btn-info" href={`/edits/${courses._id}`} onClick={() =>this.onClickUpdate(courses)}>
                      <i className="fas fa-edit"></i>&nbsp;Update
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(courses._id)}>
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
