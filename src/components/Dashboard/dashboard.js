import React, { Component } from 'react';
//import './css/style.css';
import './css/util.css?v=2.1.0';
import axios from 'axios';
import Cookies from 'js-cookie';
class dashboard extends Component {
    state = {
        persons: []
    }
    
    componentDidMount() {


  // console.log("acces "+Cookies.get('access_token'));
  axios({
           method: 'GET',
           url: 'http://localhost/paym/backoffice/api/v1/staff/me',
           headers: { 
           'access_token': Cookies.get('access_token'),
           'refresh_token':  Cookies.get('refresh_token'),
          
       },
        })
           .then(result =>{
           
            if (result.data.success == "1")
            {  
          
               console.log( Cookies.get('access_token'));
                //console.log(result);
                const persons = result.data.data;
                this.setState( { persons: persons.username } )
                console.log(persons);
              
            }
            else
            {
              console.log("dail")
              window.location.href = "/";
              
            }
          })
           .catch(error => this.setState( { error: error.message } ));
      
    }
    handleClick = () => {
      console.log("acces "+Cookies.get('access_token'));
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
                <a className="nav-link" href="./tables.html">
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
                  <a className="navbar-brand" href="javascript:void(0)">username</a>
                </ul>
                
              </div>
            </div>
          </nav>
            <div className="content">
 
                <p>aaaa</p>
                <ul>
                <h1>Hello, {this.state.persons}</h1>;
               </ul>
            </div>
        </div>
        <button onClick={this.handleClick}>
        Click me
      </button>
        </div>
          </body>
    </div>
        
            );
        }
    
}
export default dashboard;
