// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'

import ScormProvider from 'react-scorm-provider';
import { withScorm } from 'react-scorm-provider';

const App = (props) => {
  return (
    <ScormProvider version="1.2" debug={true} apiConnected={true} setScore>
      <iframe src="teste-scorm/index_scorm.html"></iframe>
    </ScormProvider>
  );
};

const setScore = ({ value, min, max, status }) => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve()
    } else {
      reject()
    }
  })
}

const StandardFunctionalComponent = (props) => {
  return (
    <div>
      <p>Welcome, {props.sco.learnerName}!</p>
      <p>Your course status is currently: {props.sco.completionStatus}</p>
      <p>Click the button below to complete the course!</p>
      <button onClick={() => props.sco.setStatus('completed')}>Mark me complete!</button>
    </div>
  );
};

const EnhancedComponent = withScorm()(StandardFunctionalComponent);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <EnhancedComponent name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
