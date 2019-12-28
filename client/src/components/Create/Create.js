import React, { Component } from 'react';
import QuizForm from '../QuizForm/QuizForm';
import QuizFormResult from '../QuizForm/QuizFormResult';

class Create extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		result : null
  	};
  }

  setResult = (values) =>{
	  this.setState({
	  	result : JSON.stringify(values, null, 2)
	  })
  }

  render() {
    return (
      <div className="Create">
       	<QuizForm onSubmit={this.setResult} />
       	<QuizFormResult result={this.state.result}/>
      </div>
    );
  }
};


export default Create;