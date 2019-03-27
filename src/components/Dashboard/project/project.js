import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
class owner extends Component {
    state = {
        persons: [],
        options: []
    }
    onChange(e) {
      const options = this.state.options
      let index
      if (e.target.checked) {
        options.push(+e.target.value)
      } else {
        index = options.indexOf(+e.target.value)
        options.splice(index, 1)
      }
        this.setState({ options: options })
    }

    handleClick = (e) => {
        
        e.preventDefault();

         var project_id_json = this.state.options;
         var bodyFormData = new FormData();
         bodyFormData.append('project_id_json',JSON.stringify(project_id_json)); 
         axios({
             method: 'POST',
             url: 'http://localhost/paym/backoffice/api/v1/project/delete',
             headers: {
              'Content-Type': 'multipart/form-data',
              'access_token': Cookies.get('access_token'),
              'refresh_token':  Cookies.get('refresh_token')
            },
            data: bodyFormData,
          }).then(result =>{
              console.log(result);
          })
             .catch(error => this.setState( { error: error.message } ));
        
      };
  
    componentDidMount() {
      var bodyFormData = new FormData();
      axios({
           method: 'GET',
           url: 'http://localhost/paym/backoffice/api/v1/project/data_list',
           params: {
            cur_page: '1',
            per_page: '10',
           },
           headers: {
            'Content-Type': 'multipart/form-data',
            'access_token': Cookies.get('access_token'),
            'refresh_token':  Cookies.get('refresh_token')
          },
          data: bodyFormData,
        }).then(result =>{
                if(result.data.success == 0){
                  window.location.href = "/";
                }
                var results =result.data.data;
                
                const persons= results.data_list;
  
                console.log(persons);
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
                 <a className="nav-link" href="./building">
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
                     <a href={"project/detail/"+person.project_id}>
                       {person.name}
                       </a>
                       <a href={"project/edit/"+person.project_id}>
                       ..edit
                       </a>
                       <input type="checkbox" name={person.name} value={person.project_id} onChange={this.onChange.bind(this)} />
                       </li>)}
                     <a href="#" onClick={this.handleClick}>
                      Delete
                      </a>
             </div>
         </div>
     
         </div>
           </body>
     </div>
                 

        
            )
        }
    
}
export default owner;
