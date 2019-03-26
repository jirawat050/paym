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
          <ul>
          { this.state.persons.map(person => <li>
            <a href={"detail/"+person.owner_id}>
              {person.name}
              </a>
              <a href={"edit/"+person.owner_id}>
              ..edit
              </a>
            
            </li>)}
        </ul>
        
            )
        }
    
}
export default owner;
