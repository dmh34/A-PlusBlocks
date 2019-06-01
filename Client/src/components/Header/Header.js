import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import importxlsx from "../FileImport/ImportFile";



class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }


  render() {

    let menuActive = this.state.isToggleOn ? 'is-active' : '';

    return (
      <div className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">A+ Quizzes</a>
          </div>

          <span className={'nav-toggle ' + menuActive} onClick={this.handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </span>

          <div className={'nav-right nav-menu ' + menuActive}>
            <div className="button is-primary is-outlined" onClick={this.handleTest}>Click</div>

            <Link to="/" className="nav-item r-item">Home</Link>
            <Link to="/faq" className="nav-item r-item">About</Link>

            <div className="nav-item">
              <p className="control">
                <a className="button is-primary is-outlined" href="/menu"> Sign In
              </a>
              </p>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // renderNavlinks() {
  //   switch (this.props.user) {
  //     case null:
  //       return;
  //     case false:
  //       return (
  //         <p className="control">
  //           <a className="button is-danger" href="/auth/google">
  //             <span className="icon">
  //               <i className="fab fa-google" />
  //             </span>
  //             <span>Login With Google</span>
  //           </a>
  //         </p>
  //       );
  //     default:
  //       return [
  //         <p key="1" className="control">
  //           <Link className="button is-primary" to="/stats">
  //             <span className="icon">
  //               <i className="fas fa-file-alt" />
  //             </span>
  //             <span>Results</span>
  //           </Link>
  //         </p>,
  //         <p key="2" className="control">
  //           <Link className="button is-primary" to="/dashboard">
  //             <span className="icon">
  //               <i className="fas fa-user-circle" />
  //             </span>
  //             <span>Dashboard</span>
  //           </Link>
  //         </p>,
  //         <p key="3" className="control">
  //           <a className="button is-white is-outlined" href="/api/logout">
  //             <span className="icon">
  //               <i className="fas fa-sign-out-alt" />
  //             </span>
  //             <span>Logout</span>
  //           </a>
  //         </p>
  //       ];
  //   }
  // }


  // render() {
  //   return (
  //     <nav className="navbar is-link">
  //       <div className="navbar-brand is-dark">
        
  //         <Link
  //           className="navbar-item "
  //           to="/dashboard"
  //           style={{ fontWeight: 'bold', fontSize: '20px' }}
  //         >
  //           A+ Quizzes
  //       </Link>
  //         <div className="navbar-burger burger is-dark" data-target="navMenu">
  //           <span />
  //           <span />
  //           <span />
  //         </div>
  //       </div>

  //       <div id="navMenu is-dark" className="navbar-menu is-dark">
  //         <div className="navbar-end">
  //           <div className="navbar-item">
  //             <div className="field is-grouped">{this.renderNavlinks()}</div>
  //           </div>
  //         </div>
  //       </div>
  //       <div>
  //         <importxlsx></importxlsx>
  //     </div>
  //     </nav>
      
  //   );
  // }
}

export default Header;
