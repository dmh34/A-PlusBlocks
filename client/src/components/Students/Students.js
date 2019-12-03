import React, { Component } from 'react';
import API from "../../Util/API";
import StudentListItem from "../StudentListItem/StudentListItem";
import FileImport from "../FileImport/ImportFile.js";
import './Students.css';

class Students extends Component {


  state = {
    students: []
  }

  async componentDidMount() {
    let s = await API.getStudents();
    this.setState({ students: s });
  }

  handleStudents = event => {
    for (let i = 0; i < this.state.students.length; i++) {
      console.log(this.state.students[i]);
    }

  }
  render() {
    return (
      <section className="hero is-bold is-fullheight">
        <div className="hero-body">
          <table className="table is-bordered is-striped is-narrow is-hoverable is-narrow">
            <thead>
              <span className="sf">
                <a class="button is-primary is-large" href="/Menu">Go Back</a>
              </span>
              <span className="sf">
                <div className="button is-primary is-large">Add a Student</div>
              </span>
              <span className="sf">
                <FileImport></FileImport>
              </span>

            </thead><br></br><thead>
              <tr>
                <th><abbr title="Student #">ID #</abbr></th>
                <th>Student</th>
                <th><abbr title="Assignment #">#1</abbr></th>
                <th><abbr title="Assignment #">#2</abbr></th>
                <th><abbr title="Assignment #">#3</abbr></th>
                <th><abbr title="Assignment #">#4</abbr></th>
                <th><abbr title="Assignment #">#5</abbr></th>
                <th><abbr title="Assignment #">#6</abbr></th>
                <th><abbr title="Average Grade">% Avg. </abbr></th>
                <th>View Student</th>
              </tr>
            </thead>
            <tfoot>
            </tfoot>
            <tbody>
              {this.state.students.map(obj => {
                return (
                  <StudentListItem student={obj} />)
              })}


            </tbody>
          </table>
        </div>
      </section>
    );

  };
};

export default Students;

