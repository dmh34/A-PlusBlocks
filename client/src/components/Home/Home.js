import React, { Component } from 'react';
import './Home.css';
import auth from "../../auth/auth";
import File from "../FileImport/ImportFile";


const auth0 = new auth();


class Home extends Component {
   
  handleLogin(){
    auth0.login();
  }

    render() {
        let heading = "Building a better tomorrow one quiz at a time.";
        let subheading = "The majority of today's students will end up working in jobs that don't exist yet— using and developing technologies that haven't been invented. Join now to start building a foundation for a better future.";

        return (
            <div>
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                        <h1 className="title">{ heading }</h1>
                        <div className="is-two-thirds column  is-paddingless">
                            <h2 className="subtitle is-4">{ subheading }</h2>
                        </div>
                        <div className="button is-large is-primary" onClick={this.handleLogin}>
                          Join Now
                        </div>
                       
                        
                        </div>
                    </div>
                </section>


    <section className="section">
      <div className="container">
        <div className="columns pd is-desktop">
          <div className="column is-1 has-text-centered">
            <i className="fa fa-cubes is-primary"></i>
          </div>
          <div className="column is-one-third-desktop">
            <p className="title"><strong>We provide the tools for teachers and students to thrive in a technology-driven tomorrow.</strong></p>
          </div>
          <div className="column">
            <p><strong></strong>We've created an innovative platform for teachers to enhance student success through our digital classrooms and online assessments. Sign up today and make grading assignments manually a thing of the past.</p>
          </div>
        </div>
      

      </div>
    </section>
            </div>
        );
    }
}

export default Home;