import React, { Component } from 'react';
import './css/style.css';
import './css/util.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
class dashboard extends Component {
    render() {
        return (
          
        <div className="App">
        <aside className="side-nav" id="show-side-navigation1">
          <i className="fa fa-bars close-aside hidden-sm hidden-md hidden-lg" data-close="show-side-navigation1" />
          <div className="heading">
            <div className="info">
              <h2>DashBoard</h2>
              <p>Welcome</p>
            </div>
          </div>
          <ul className="categories">
            <li><i className="fa fa-home fa-fw" aria-hidden="true" /><a href="#"> Owner</a>
              <ul className="side-nav-dropdown">
                <li><a href="#">Create</a></li>
                <li><a href="#">Edit</a></li>
              </ul>
            </li>
            <li><i className="fa fa-support fa-fw" /><a href="#"> Project </a>
              <ul className="side-nav-dropdown">
                <li><a href="#">Create</a></li>
                <li><a href="#">Edit</a></li>
              </ul>
            </li>
            <li><i className="fa fa-envelope fa-fw" /><a href="#"> Building</a>
              <ul className="side-nav-dropdown">
                <li><a href="#">Create</a></li>
                <li><a href="#">Edit</a></li>
              </ul>
            </li>
            <li><i className="fa fa-users fa-fw" /><a href="#"> Room</a>
              <ul className="side-nav-dropdown">
                <li><a href="#">Create</a></li>
                <li><a href="#">Edit</a></li>
              </ul>
            </li>
          </ul>
        </aside>
        <section id="contents">
          <nav className="navbar navbar-default">
            <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="#"><i className="fa fa-bell-o" /><span>Logout</span></a></li>
                <li><a href="#"><i data-show="show-side-navigation1" className="fa fa-bars show-side-btn" /></a></li>
              </ul>
            </div>
          </nav>
          <div className="welcome">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="content">
                    <h2>Welcome to Dashboard</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="admins">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div className="box">
                    <h3>Owners:</h3>
                    <div className="admin">
                      <div className="img">
                     </div>
                      <div className="info">
                        <h3>Joge Lucky</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="chrt3">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-9">
                  <div className="chart-container">
                    <canvas id="chart3" width="100%" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
     
        </div>
            )
        }
    
}
export default dashboard;
