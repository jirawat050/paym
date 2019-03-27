import React, { Component } from 'react';
//import './css/style.css';

import axios from 'axios';
import Cookies from 'js-cookie';
class owner extends Component {
    state = {
        persons: []
    }
 
    
  
    componentDidMount() {
      var bodyFormData = new FormData();
      axios({
           method: 'GET',
           url: 'http://localhost/paym/backoffice/api/v1/owner/data_list',
           params: {
            cur_page: '1',
            per_page: '10',
           },
           headers: {
            'Content-Type': 'multipart/form-data',
          },
          data: bodyFormData,
        }).then(result =>{
                var results =result.data.data;
                
                const persons= results.data_list;
  
                //console
                 this.setState({ persons });
               
               

              
                
          })
           .catch(error => this.setState( { error: error.message } ));
      
    }
   


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
          
          { this.state.persons.map(person => <li>
            <a href={"/owner/detail/"+person.owner_id}>
              {person.name}
              </a>
              <a href={"/owner/edit/"+person.owner_id}>
              ..edit
              </a>
            
            </li>)}
       
            </div>
        </div>
  
        </div>
          </body>
    </div>
        
        
            )
        }
    
}
export default owner;
