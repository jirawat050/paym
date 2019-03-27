import React, { Component } from 'react';
import axios from 'axios';
// import Cookies from 'universal-cookie';

import Cookies from 'js-cookie';
class Add extends Component {
  state = {
    persons: [],
  }
  componentDidMount() {
    var bodyFormData = new FormData();
    axios({
         method: 'GET',
         url: 'http://localhost/paym/backoffice/api/v1/category/all',

      }).then(result =>{
   
             const persons =result.data.data;
             this.setState({ persons });
              console.log(persons);
          
      })
         .catch(error => this.setState( { error: error.message } ));
    
  }
 
  constructor(props){
    super(props);
    this.state={
      number: '',
      description: '',
      category_id: '',
      floor_index: '',
      floor_name: ''
     
     
    }
  }
  
  handleFormSubmit = e =>{
    var bodyFormData = new FormData();
    var number =this.state.number;
    var description =this.state.description;
    var category_id = this.state.category_id;
    var floor_index =this.state.floor_index;
    var floor_name =this.state.floor_name;
   

    bodyFormData.append('number', number); 
    bodyFormData.append('description', description); 
    bodyFormData.append('category_id', category_id); 

    bodyFormData.append('floor_index', floor_index); 
    bodyFormData.append('floor_name', floor_name); 



   
    e.preventDefault();
      axios({
      method: 'POST',
      url: 'http://localhost/paym/backoffice/api/v1/room/add',
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
            <form className="login100-form validate-form" action="#">
            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input className="input100" type="text" name="number" placeholder="number"
              value={this.state.number }
              onChange={e => this.setState({ number: e.target.value })}
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
              <input className="input100" type="text" name="floor_index" placeholder="floor_index"
              value={this.state.floor_index }
              onChange={e => this.setState({ floor_index: e.target.value })}
              />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
            </div>
            
            <div className="wrap-input100 validate-input" data-validate="Password is required">
              <input className="input100" type="text" name="floor_name" placeholder="floor_name"
              value={this.state.floor_name }
              onChange={e => this.setState({ floor_name: e.target.value })}
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
export default Add;
