import React, { Component } from 'react';
import axios from 'axios';
// import Cookies from 'universal-cookie';

import Cookies from 'js-cookie';
class addOwner extends Component {

  constructor(props){
    super(props);
    this.state={
      name: '',
      description: '',
      username: '',
      password: '',
      email: ''
    }
  }
  handleFormSubmit = e =>{
    var bodyFormData = new FormData();
    var name =this.state.name;
    var description =this.state.description;
    var username = this.state.username;
    var password = this.state.password;
    var email  =this.state.email;
    bodyFormData.append('name', name); 
    bodyFormData.append('description', description); 
    bodyFormData.append('username', username); 
    bodyFormData.append('password', password); 
    bodyFormData.append('email', email); 

   
    e.preventDefault();
      axios({
      method: 'POST',
      url: 'http://localhost/paym/backoffice/api/v1/owner/add',
      headers: {
        'Content-Type': 'multipart/form-data',
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
        }
      
      
      })
      .catch(error => this.setState( { error: error.message } ));
 };

  
        render() {
          return (
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
              <input className="input100" type="text" name="username" placeholder="username"
              value={this.state.username }
              onChange={e => this.setState({ username: e.target.value })}
              />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
            </div>
            <div className="wrap-input100 validate-input" data-validate="Password is required">
              <input className="input100" type="password" name="password" placeholder="password"
              value={this.state.password }
              onChange={e => this.setState({ password: e.target.value })}
              />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
            </div>
            <div className="wrap-input100 validate-input" data-validate="Password is required">
              <input className="input100" type="email" name="email" placeholder="email"
              value={this.state.email }
              onChange={e => this.setState({ email: e.target.value })}
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
       
          )
        }
    
}
export default addOwner;
