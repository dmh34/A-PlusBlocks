import React, { Component } from 'react';
import API from "../../API/API";
import StudentListItem from "../StudentListItem/StudentListItem";
import xlsx from "../../Util/xlsxparse";
//import { connect } from 'react-redux';
import './Students.css';

/*connect(
	state => ({
		student: state.students
	}),
	null
);
export default class Students extends Component {
	render() {
		const { students } = this.props
		const mapstudents = students.map( (board, index) => {
			return (
				<div key = {index} className = 'studentsWrapper'>
					<h3>{board.quiz}</h3>
					{board.scores.map( (student, idx) => {
						return (
							<div key = {idx} className = 'studentsWrapper'>
								<p>{student.user}<span>{student.score}%</span></p>
							</div>
						)
					}) }
				</div>
			);
		})
		return (
			<div className = 'StudentsComponent'>
				<h1 className = 'title'>Student</h1>
				{mapstudents}
			</div>
		);
	}
};
*/

class Students extends Component {


  state = {
    students: []
  }

  async componentDidMount() {
    let s = await API.getStudents();
    console.log(s);
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
                <input type="file" placeholder="Import a csv or spreadsheet">

                </input>
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