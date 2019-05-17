import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
    render() {
        return (
            <section className="hero is-bold is-fullheight">
            <container>
            <div className="hero-body">
            <div class="column is-half is-center is-mobile">
                <level>
                <level-item>  
                <div className="card">
                <div class="card-header" id="menu">
            <level-item><div className="title" id="welcome"><strong>Welcome, John Doe!</strong></div></level-item>
                </div>
                    <div class="card-content">
                    <br></br>
                    <a className="button is-large is-fullwidth is-primary is-inverted is-rounded" id="Students" href="/Students">Students</a>
                    <br></br>
                    <br></br>
                    <a className="button is-large is-fullwidth is-primary is-inverted is-rounded" id="Create" href="/Create">Create Activity</a>
                    <br></br>
                    <br></br>
                    <a className="button is-large is-fullwidth is-primary is-inverted is-rounded" id="Edit" href="/Edit">Edit Activities</a>
                    <br></br>
                </div>
            </div>
            </level-item>
            </level>
                </div>
                </div>
            </container>
        </section>     
        );
    };
};    

export default Menu;
