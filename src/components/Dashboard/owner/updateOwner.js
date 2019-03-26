import React, { Component } from 'react';
import axios from 'axios';
// import Cookies from 'universal-cookie';

import Cookies from 'js-cookie';
class updateOwner extends Component {
    state = {
        name: []
    }
    componentDidMount() {
        var bodyFormData = new FormData();
        axios({
             method: 'GET',
             url: 'http://localhost/paym/backoffice/api/v1/owner/detail',
             params: {
              owner_id: this.props.match.params.id,
           },
             headers: {
              'Content-Type': 'multipart/form-data',
              },
            data: bodyFormData,
          }).then(result =>{
            
                  const name =result.data.data;
                 
                  console.log(name);
                  this.setState( { name: name.name,description: name.description } )
          })
             .catch(error => this.setState( { error: error.message } ));
        
      }
  constructor(props){
    super(props);
    this.state={
      name: '',
      description: ''
   
    }
  }
  handleFormSubmit = e =>{
    var bodyFormData = new FormData();
    var name =this.state.name;
    var description =this.state.description;
    bodyFormData.append('owner_id', this.props.match.params.id); 
    bodyFormData.append('name', name); 
    bodyFormData.append('description', description); 


   
    e.preventDefault();
      axios({
      method: 'POST',
      url: 'http://localhost/paym/backoffice/api/v1/owner/update',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      params: {
        owner_id: this.props.match.params.id,
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
              <input className="input100" type="text" name="name" 
              value={this.state.name }
              onChange={e => this.setState({ name: e.target.value })}
              />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true" />
              </span>
            </div>
            <div className="wrap-input100 validate-input" data-validate="Password is required">
              <input className="input100" type="text" name="description" 
              value={this.state.description }
              onChange={e => this.setState({ description: e.target.value })}
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
export default updateOwner;
