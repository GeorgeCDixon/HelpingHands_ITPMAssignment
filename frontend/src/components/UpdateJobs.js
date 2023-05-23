import React, { Component } from 'react'
import axios from 'axios';

export default class UpdateJobs extends Component {


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


  onUpdate = async(e) => {
    
    e.preventDefault();

    //const id = this.props.match.params.id;

    const job = JSON.parse(sessionStorage.getItem('selectedPost'))
  
    const {jobTitle, companyName, companyLocation, reqExperience, description} = this.state;
  
    const data = {
      jobTitle: jobTitle,
      companyName: companyName,
      companyLocation: companyLocation,
      reqExperience: reqExperience,
      description: description
    };
    console.log(data);
  
    try {
           
      const res = await axios.put(`/job/update/${job._id}`, data);
      if (res.data.success) {
        alert("Update Succesfully");
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
     
  };
  

  componentDidMount(){
    try {

      const job = JSON.parse(sessionStorage.getItem('selectedPost'))
      console.log(job,typeof(job))
      //const id = this.props.match.params.id;

      //const res = axios.get(`/post/${post._id}`);
      axios.get(`/job/${job._id}`).then(res=>{
        if (res.data.success) {
          this.setState({
            jobTitle:res.data.job.jobTitle,
            companyName:res.data.job.companyName,
            companyLocation:res.data.job.companyLocation,
            reqExperience:res.data.job.reqExperience,
            description:res.data.job.description
          });
          console.log(this.state.job);
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
   <h1 className="h3 mb-3 font-weight-normal">Update Job</h1>
   <form className="needs-validation" noValidate>
     
   <div className="form-group" style={{marginBottom: '15px'}}>
       <label style={{marginBottom: '5px'}} >Job Title</label>
       <input type="text"
       className="form-control"
       name="jobTitle"
       value={this.state.jobTitle}
       onChange={this.handleInputChange}/>
   </div>
   
   <div className="form-group" style={{marginBottom: '15px'}}>
       <label style={{marginBottom:'5px'}}>Company Name</label>
       <input type="text"
       className="form-control"
       name="companyName"
       value={this.state.companyName}
       onChange={this.handleInputChange}/>
   </div>
   
   <div className="form-group" style={{marginBottom: '15px'}}>
       <label style={{marginBottom: '5px'}}>Location</label>
       <input type="text"
       className="form-control"
       name="companyLocation"
       value={this.state.companyLocation}
       onChange={this.handleInputChange}/>
   </div>
   
   <div className="form-group" style={{marginBottom: '15px'}}>
       <label style={{marginBottom: '5px'}}>Experience</label>
       <input type="text"
       className="form-control"
       name="reqExperience"
       value={this.state.reqExperience}
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
