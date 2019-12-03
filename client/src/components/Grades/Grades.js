import React, { Component } from 'react';
//import { connect } from 'react-redux';
import './Grades.css';

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

class Grades extends Component {
  render() {
    let heading = "John Doe - 81%";
    return (
      <section className="hero is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{heading}</h1>
            <div className="is-two-thirds column  is-paddingless">
              <progress class="progress is-success" value="81" max="100">81%</progress>
            </div>
            <br></br>
            <br></br>

            <div class="field has-addons">
              <div class="control is-expanded">
                <div class="select three-fourths">
                  <select name="Assignments - Full Results">
                    <option value="01">Assignment #1 - 10/27 - 92%</option>
                    <option value="02">Assignment #2 - 09/23 - 73%</option>
                    <option value="03">Assignment #3 - 05/11 - 85%</option>
                    <option value="04">Assignment #4 - 03/24 - 92%</option>
                    <option value="05">Assignment #5 - 06/22 - 71%</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-primary">View Full Results</button>
            </div>
          </div>
        </div>
      </section>


    );

  };
};

export default Grades;