import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">SDC</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/view">Jobs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/viewcourse">Courses</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/add">Create Job</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/jobs">Manage Jobs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/addCourse">Create Courses</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/manageCourse">Manage Courses</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
