import React, { Component } from 'react';
//import './css/style.css';

import axios from 'axios';
import Cookies from 'js-cookie';
class detail extends Component {
    state = {
        name: []
    }
 
  
    componentDidMount() {
      var bodyFormData = new FormData();
      axios({
           method: 'GET',
           url: 'http://localhost/paym/backoffice/api/v1/building/detail',
           params: {
            building_id: this.props.match.params.id,
         },
           headers: {
            'Content-Type': 'multipart/form-data',
            },
          data: bodyFormData,
        }).then(result =>{
            if(result.data.success == 0){
                window.location.href = "/";
              }
                const name =result.data.data;
               
                console.log(result);
                this.setState( { persons: name.name } )
        })
           .catch(error => this.setState( { error: error.message } ));
      
    }
   


    render() {
        return (
     <h1>
         {this.state.persons}
     </h1>
        
            )
        }
    
}
export default detail;
