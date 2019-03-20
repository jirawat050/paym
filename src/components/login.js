import React, { Component } from 'react';
class login extends Component {
    render() {
        return (
<div className="App">
         <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <span className="login100-form-title">
              <h1>PayM Login</h1>
            </span>
            <div className="login100-pic js-tilt" data-tilt>
             <img src={require('../images/img-01.png')} />
            </div>
            <form className="login100-form validate-form">
              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="username" placeholder="Username" />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </span>
              </div>
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input className="input100" type="password" name="pass" placeholder="Password" />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true" />
                </span>
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn">
                  Login
                </button>
              </div>
              <div className="text-center p-t-12">
              </div>
              <div className="text-center p-t-136">
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
            )
        }
    
}
export default login;
