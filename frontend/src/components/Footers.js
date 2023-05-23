import React, { Component } from 'react';

export default class Footers extends Component {
  render() {
    return (
      <footer className="bg-dark text-light">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <h5>About Us</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales lectus non turpis rutrum, id sagittis lectus congue.
              </p>
            </div>
            <div className="col-md-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Contact Us</h5>
              <address>
                123 Main Street
                <br />
                City, State ZIP
                <br />
                <abbr title="Phone">P:</abbr> (123) 456-7890
              </address>
            </div>
          </div>
        </div>
        <div className="text-center py-3">&copy; 2023 Your Company. All rights reserved.</div>
      </footer>
    );
  }
}
