import React, { Component } from 'react';
import axios from 'axios';
// import Cookies from 'universal-cookie';

import Cookies from 'js-cookie';
class login extends Component {

  constructor(props){
    super(props);
    this.state={
      username: '',
      password: ''
    }
  }
  handleFormSubmit = e =>{
    var bodyFormData = new FormData();
    var username =this.state.username;
    var password =this.state.password;
    bodyFormData.append('username', username); 
    bodyFormData.append('password', password); 
    console.log(this.state.username);
    console.log(this.state.password);
    e.preventDefault();
      axios({
      method: 'POST',
      url: 'http://localhost/paym/backoffice/api/v1/staff/login',
    
      headers: {
        'Content-Type': 'multipart/form-data',
        //'Content-Type': 'application/x-www-form-urlencoded',
      
      },
      data: bodyFormData, 
      
    
      })
      .then(result =>{
        if (result.data.success == "1")
        {  
           var results = result.data.data;
          
           Cookies.set('access_token',results.access_token, { path: '/dashboard'});
           Cookies.set('access_token',results.access_token, { path: '/project'});
           Cookies.set('access_token',results.access_token, { path: '/project/add'});
           Cookies.set('refresh_token',results.refresh_token);
          console.log(Cookies.set('access_token',results.access_token));
            alert("Success");
            window.location.href = "/dashboard";
       
        }
        else{
          console.log(result);
          alert("incorrect");
          window.location.href = "/";
        }
      
      
      })
      .catch(error => this.setState( { error: error.message } ));
 };
 handleClick = () => {
  console.log("acces "+Cookies.get('access_token'));
}
    render() {
        return (
<div className="App">
         <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <span className="login100-form-title">
              <h1>PayM Login</h1>
            </span>
            <div className="login100-pic js-tilt" data-tilt>
             <img src={require('../images/img-01.png')} />
            </div>
            <form className="login100-form validate-form" action="#">
              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="username" placeholder="Username"
                value={this.state.username }
                onChange={e => this.setState({ username: e.target.value })}
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </span>
              </div>
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input className="input100" type="password" name="password" placeholder="Password"
                value={this.state.password }
                onChange={e => this.setState({ password: e.target.value })}
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true" />
                </span>
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn" onClick = {e => this.handleFormSubmit(e)}>
                  Login
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
            )
        }
    
}
export default login;
