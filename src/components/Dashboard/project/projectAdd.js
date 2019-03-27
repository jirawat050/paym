import React, { Component } from 'react';
import axios from 'axios';
// import Cookies from 'universal-cookie';

import Cookies from 'js-cookie';
class projectAdd extends Component {

  constructor(props){
    super(props);
    this.state={
      name: '',
      description: '',
      lat: '',
      long: ''
     
    }
  }
  
  handleFormSubmit = e =>{
    var bodyFormData = new FormData();
    var name =this.state.name;
    var description =this.state.description;
    var lat = this.state.lat;
    var long = this.state.long;

    bodyFormData.append('name', name); 
    bodyFormData.append('description', description); 
    bodyFormData.append('gps_lat', lat); 
    bodyFormData.append('gps_long', long); 


   
    e.preventDefault();
      axios({
      method: 'POST',
      url: 'http://localhost/paym/backoffice/api/v1/project/add',
      headers: {
        'Content-Type': 'multipart/form-data',
        'access_token': Cookies.get('access_token'),
        'refresh_token':  Cookies.get('refresh_token')
      },
      data: bodyFormData, 
    })
      .then(result =>{
       
        if (result.data.success == "1")
        {  
           var results = result.data.data;
            alert("Success");
           // window.location.href = "/dashboard";
       
        }
      
        else{
          console.log(result);
          //alert("incorrect");
          window.location.href = "/";
        }
      
      
      })
      .catch(error => this.setState( { error: error.message } ));
 };

  
        render() {
          return (
            <div>
         <body className="dark-edition">
         <div className="wrapper ">
        <div className="sidebar" data-color="purple" data-background-color="black" data-image="../assets/img/sidebar-2.jpg">
 
          <div className="logo">
            <a href className="simple-text logo-normal">
              PAY M
            </a>
          </div>
          <div className="sidebar-wrapper">
            <ul className="nav">
              <li className="nav-item active  ">
                <a className="nav-link" href="/dashboard">
                  <p>Dashboard</p>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="./owner">
                  <p>Owner</p>
                </a>
              </li>
              <li className="nav-item ">
              <a className="nav-link" href="./project">
                  <p>Project List</p>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="./typography.html">
                  <p>Building List</p>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="./icons.html">
                  <p>Room list</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-panel">
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top " id="navigation-example">
            <div className="container-fluid">
              <div className="navbar-wrapper">
                <a className="navbar-brand" href="javascript:void(0)">Dashboard</a>
              </div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation" data-target="#navigation-example">
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon icon-bar" />
                <span className="navbar-toggler-icon icon-bar" />
                <span className="navbar-toggler-icon icon-bar" />
              </button>
              <div className="collapse navbar-collapse justify-content-end">
                <ul className="navbar-nav">
                 
                </ul>
                
              </div>
            </div>
          </nav>
            <div className="content">
            <div>
            <form className="login100-form validate-form" action="#">
            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input className="input100" type="text" name="name" placeholder="name"
              value={this.state.name }
              onChange={e => this.setState({ name: e.target.value })}
              />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true" />
              </span>
            </div>
            <div className="wrap-input100 validate-input" data-validate="Password is required">
              <input className="input100" type="text" name="description" placeholder="description"
              value={this.state.description }
              onChange={e => this.setState({ description: e.target.value })}
              />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
            </div>
            <div className="wrap-input100 validate-input" data-validate="Password is required">
              <input className="input100" type="number" name="lat" placeholder="lat"
              value={this.state.lat }
              onChange={e => this.setState({ lat: e.target.value })}
              />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
            </div>
            <div className="wrap-input100 validate-input" data-validate="Password is required">
              <input className="input100" type="number" name="long" placeholder="long"
              value={this.state.long }
              onChange={e => this.setState({ long: e.target.value })}
              />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
            </div>
            
            <div className="container-login100-form-btn">
              <button className="login100-form-btn" onClick = {e => this.handleFormSubmit(e)}>
                Add
              </button>
            </div>
            <div className="text-center p-t-12">
            </div>
            <div className="text-center p-t-136">
            </div>
            </form>
            </div>
            </div>
        </div>
    
        </div>
          </body>
    </div>
           
       
          )
        }
    
}
export default projectAdd;
