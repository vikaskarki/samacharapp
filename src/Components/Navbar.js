import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
    <div>
      <nav className=" navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/"><strong>NewsForYou</strong></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
              <li className='nav-item'><Link className="nav-link" to="/Business">Business</Link> </li>
              <li className='nav-item'><Link className="nav-link" to="/Entertainment">Entertainment</Link> </li>
              <li className='nav-item'><Link className="nav-link" to="/Health">Health</Link></li>
              <li className='nav-item'><Link className="nav-link" to="/Science">Science</Link></li>
              <li className='nav-item'><Link className="nav-link" to="/Sports">Sports</Link></li>
              <li className='nav-item'><Link className="nav-link" to="/Technology">Technology</Link></li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );

};

export default Navbar;
