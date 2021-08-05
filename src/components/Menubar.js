import React from "react";

const Menubar = ({ menuList, filterItem }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white mt-5 mb-2 rounded">
        <div className="container-fluid px-4">
          <a className="navbar-brand" href="#">
            Meals Filter
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {menuList.map((menuItem) => {
                return (
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      style={{ textTransform: "capitalize" }}
                      aria-current="page"
                      href="#"
                      onClick={() => filterItem(menuItem)}
                    >
                      {menuItem}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menubar;
