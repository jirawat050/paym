import React, { Component } from 'react';
//import './css/style.css';

import axios from 'axios';
import Cookies from 'js-cookie';
class detail extends Component {
    state = {
        name: [],
        persons: []
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
           var bodyFormData = new FormData();
           axios({
                method: 'GET',
                url: 'http://localhost/paym/backoffice/api/v1/room/data_list',
                params: {
                   building_id: this.props.match.params.id,
                   cur_page: '1',
                   per_page: '10',
                   filter_json: "",
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
                     this.setState({name})
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
       <a href={"/room/detail/"+name.room_id}>
         {name.number}
         </a>
         <a href={"/room/edit/"+name.room_id}>
         ..edit
         </a>
         </li>)}
    
   </ul>
   </div>
        
            )
        }
    
}
export default detail;
