import React, { Component } from 'react';

class Courses extends Component {
    state = {
        courses: [],
        apiResponse: ""
    }

    componentDidMount() {
        fetch('/course', {
            headers : { Authorization: `Bearer ${this.props.auth.getAccessToken()}`}
        })
            .then(response => {
                if(response.ok) return response.json();
                throw new Error('Network response was not ok.');
            })
            .then(response => this.setState({ courses: response.courses }))
            .catch(error => this.setState({message: error.message}));

            fetch('/admin', {
                headers : { Authorization: `Bearer ${this.props.auth.getAccessToken()}`}
            })
                .then(response => {
                    if(response.ok) return response.json();
                    throw new Error('Network response was not ok.');
                })
                .then(response => {
                    this.setState({apiResponse : response.message})
                })
                .catch(error => this.setState({message: error.message}));
    }

    render() {
        return (
            <div className="callout">
              <h1>Courses</h1>
              <p>{this.state.apiResponse}</p>
              <ul>
                  {this.state.courses.map(course => {
                      return <li key={course.id}>{course.title}</li>
                  })}
              </ul>
            </div>
        );
    }
}

export default Courses;