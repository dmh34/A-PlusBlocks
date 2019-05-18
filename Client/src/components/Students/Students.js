import React, { Component } from 'react';
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

    
    render() {
        return (
            <section className="hero is-bold is-fullheight">
            <div className="hero-body">
            <table class="table is-bordered is-striped is-narrow is-hoverable is-narrow">
  <thead><div className="sf"><a class="button is-primary is-large" href="/Menu">Go Back</a></div>
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
    <tr>
      <th>1</th>
      <td><a>John Doe</a>
      </td>
      <td>67</td>
      <td>99</td>
      <td>64</td>
      <td>93</td>
      <td>68</td>
      <td>82</td>
      <td>81</td>
      <td><a class="button is-primary" href="/Grades">View Student</a></td>
    </tr>    <tr>
      <th>2</th>
      <td><a>John Doe</a>
      </td>
      <td>67</td>
      <td>99</td>
      <td>64</td>
      <td>93</td>
      <td>68</td>
      <td>82</td>
      <td>81</td>
      <td><a class="button is-primary">View Student</a></td>
    </tr>    <tr>
      <th>2</th>
      <td><a>John Doe</a>
      </td>
      <td>67</td>
      <td>99</td>
      <td>64</td>
      <td>93</td>
      <td>68</td>
      <td>82</td>
      <td>81</td>
      <td><a class="button is-primary">View Student</a></td>
    </tr>    <tr>
      <th>3</th>
      <td><a>John Doe</a>
      </td>
      <td>67</td>
      <td>99</td>
      <td>64</td>
      <td>93</td>
      <td>68</td>
      <td>82</td>
      <td>81</td>
      <td><a class="button is-primary">View Student</a></td>
    </tr>    <tr>
      <th>4</th>
      <td><a>John Doe</a>
      </td>
      <td>67</td>
      <td>99</td>
      <td>64</td>
      <td>93</td>
      <td>68</td>
      <td>82</td>
      <td>81</td>
      <td><a class="button is-primary">View Student</a></td>
    </tr>    <tr>
      <th>5</th>
      <td><a>John Doe</a>
      </td>
      <td>67</td>
      <td>99</td>
      <td>64</td>
      <td>93</td>
      <td>68</td>
      <td>82</td>
      <td>81</td>
      <td><a class="button is-primary">View Student</a></td>
    </tr>    <tr>
      <th>6</th>
      <td><a>John Doe</a>
      </td>
      <td>67</td>
      <td>99</td>
      <td>64</td>
      <td>93</td>
      <td>68</td>
      <td>82</td>
      <td>81</td>
      <td><a class="button is-primary">View Student</a></td>
    </tr>    <tr>
      <th>7</th>
      <td><a>John Doe</a>
      </td>
      <td>67</td>
      <td>99</td>
      <td>64</td>
      <td>93</td>
      <td>68</td>
      <td>82</td>
      <td>81</td>
      <td><a class="button is-primary">View Student</a></td>
    </tr>    <tr>
      <th>8</th>
      <td><a>John Doe</a>
      </td>
      <td>67</td>
      <td>99</td>
      <td>64</td>
      <td>93</td>
      <td>68</td>
      <td>82</td>
      <td>81</td>
      <td><a class="button is-primary">View Student</a></td>
    </tr>    <tr>
      <th>9</th>
      <td><a>John Doe</a>
      </td>
      <td>67</td>
      <td>99</td>
      <td>64</td>
      <td>93</td>
      <td>68</td>
      <td>82</td>
      <td>81</td>
      <td><a class="button is-primary">View Student</a></td>
    </tr>    <tr>
      <th>10</th>
      <td><a>John Doe</a>
      </td>
      <td>67</td>
      <td>99</td>
      <td>64</td>
      <td>93</td>
      <td>68</td>
      <td>82</td>
      <td>81</td>
      <td><a class="button is-primary">View Student</a></td>
    </tr>    <tr>
      <th>11</th>
      <td><a>John Doe</a>
      </td>
      <td>67</td>
      <td>99</td>
      <td>64</td>
      <td>93</td>
      <td>68</td>
      <td>82</td>
      <td>81</td>
      <td><a class="button is-primary">View Student</a></td>
    </tr>
    <tr>
      <th>12</th>
      <td><a>John Doe</a>
      </td>
      <td>67</td>
      <td>99</td>
      <td>64</td>
      <td>93</td>
      <td>68</td>
      <td>82</td>
      <td>81</td>
      <td><a class="button is-primary">View Student</a></td>
    </tr>
    <tr>
      <th>13</th>
      <td><a>John Doe</a>
      </td>
      <td>67</td>
      <td>99</td>
      <td>64</td>
      <td>93</td>
      <td>68</td>
      <td>82</td>
      <td>81</td>
      <td><a class="button is-primary">View Student</a></td>
    </tr>
    <tr>
      <th>14</th>
      <td><a>John Doe</a>
      </td>
      <td>67</td>
      <td>99</td>
      <td>64</td>
      <td>93</td>
      <td>68</td>
      <td>82</td>
      <td>81</td>
      <td><a class="button is-primary">View Student</a></td>
    </tr><tr>
      <th>15</th>
      <td><a>John Doe</a>
      </td>
      <td>67</td>
      <td>99</td>
      <td>64</td>
      <td>93</td>
      <td>68</td>
      <td>82</td>
      <td>81</td>
      <td><a class="button is-primary">View Student</a></td>
    </tr><tr>
      <th>16</th>
      <td><a>John Doe</a>
      </td>
      <td>67</td>
      <td>99</td>
      <td>64</td>
      <td>93</td>
      <td>68</td>
      <td>82</td>
      <td>81</td>
      <td><a class="button is-primary">View Student</a></td>
    </tr>
    <tr>
      <th>17</th>
      <td><a>John Doe</a>
      </td>
      <td>67</td>
      <td>99</td>
      <td>64</td>
      <td>93</td>
      <td>68</td>
      <td>82</td>
      <td>81</td>
      <td><a class="button is-primary">View Student</a></td>
    </tr>
    <tr>
      <th>18</th>
      <td><a>John Doe</a>
      </td>
      <td>67</td>
      <td>99</td>
      <td>64</td>
      <td>93</td>
      <td>68</td>
      <td>82</td>
      <td>81</td>
      <td><a class="button is-primary">View Student</a></td>
    </tr>
    
  </tbody>
</table>
    
          
            
            
            </div>
        </section>     
        );

    };
};

export default Students;