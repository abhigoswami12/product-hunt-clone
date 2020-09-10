import React from "react";

function Header() {
  return (
    <header className="header">
      <nav className="container flex-between">
        <div className="flex-center">
          <div className="header-col1-1">
            <a className="logo" href="#">
              <img
                src="/images/article-images/producthunt-svgrepo-com.svg"
                alt="altcampus"
              />
            </a>
          </div>
          <div className="header-col1-2">
            <input
              className="search"
              type="text"
              placeholder="Discover your next favourite thing..."
            />
          </div>
          <div className="header-col1-3">
            <ul className="nav-menu flex">
              <li className="nav-item">
                <a href="#">Deals</a>
              </li>
              <li className="nav-item">
                <a href="#">Jobs</a>
              </li>
              <li className="nav-item">
                <a href="#">Discussion</a>
              </li>
              <li className="nav-item">
                <a href="#">ship</a>
              </li>
              <li className="nav-item">
                <a href="#">Mentors</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="flex-between">
            <li className="nav-item">
              <a href="#">Post</a>
            </li>
            <li className="nav-item">
              <a href="#">
                <i title="notification" class="fas fa-bell"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="profile-img" href="#">
                <img src="/images/article-images/image3.png" alt="altcampus" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
