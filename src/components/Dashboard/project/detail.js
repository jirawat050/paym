import React, { Component } from 'react';
//import './css/style.css';

import axios from 'axios';
import Cookies from 'js-cookie';
//import list from '../building/list';
//import Lists from '../building/list.js';
class detail extends Component {
    state = {
        name: [],
        persons:[]
    }
 
  
    componentDidMount() {
      var bodyFormData = new FormData();
      axios({
           method: 'GET',
           url: 'http://localhost/paym/backoffice/api/v1/project/detail',
           params: {
            project_id: this.props.match.params.id,
         },
           headers: {
            'Content-Type': 'multipart/form-data',
            },
          data: bodyFormData,
        }).then(result =>{
            // if(result.data.success == 0){
            //     window.location.href = "/";
            //   }
                const name =result.data.data;
               
                console.log(result);
                this.setState( { persons: name.name } )
        })
           .catch(error => this.setState( { error: error.message } ));
           
           var bodyFormData = new FormData();
           axios({
                method: 'GET',
                url: 'http://localhost/paym/backoffice/api/v1/building/data_list',
                params: {
                   project_id: this.props.match.params.id,
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
          
              var results =result.data.data;
                
              const name= results.data_list;
                     console.log(result);
                     this.setState( { name} )
             })
                .catch(error => this.setState( { error: error.message } ));
           
    }
   


    render() {
        return (


    
        <div>
         
            <h1>
                {this.state.persons}
            </h1>

            <ul>
                   { this.state.name.map(name => <li>
                     <a href={"/building/detail/"+name.building_id}>
                       {name.name}
                       </a>
                       <a href={"/building/edit/"+name.building_id}>
                       ..edit
                       </a>
                       </li>)}
                  
                 </ul>
            <div>
   
            </div>
      
        </div>
        )
        }
    
}
export default detail;
