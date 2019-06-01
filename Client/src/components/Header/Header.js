import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';



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
}

export default Header;
