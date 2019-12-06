import React, { Component } from 'react';
import { Link } from 'react-router-dom';

interface HeaderState {
  isToggleOn: boolean
}

export default class Header extends Component<{}, HeaderState>{
  handleClick(): void {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
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
