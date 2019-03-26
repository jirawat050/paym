import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
class owner extends Component {
    state = {
        persons: [],
        options: []
    }
    onChange(e) {
      // current array of options
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
                 <ul>
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
                 </ul>

        
            )
        }
    
}
export default owner;
