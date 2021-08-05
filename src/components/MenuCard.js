import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="d-flex flex-wrap bd-highligh align-items-center justify-content-center">
        {menuData &&
          menuData.map((menuItem) => {
            const { id, name, image, category, description, price } = menuItem;
            return (
              <>
                <div
                  key={id}
                  className="card mx-3 my-3 animate__animated animate__flipInX"
                  style={{ width: "330px", border: "none", padding: "0" }}
                >
                  <div className="card-body">
                    <img
                      src={image}
                      className="card-img-top img-fluid img-fluid mb-3 rounded"
                      alt={name}
                      style={{ width: "100%", height: "185px", border: "none" }}
                    />
                    <h5 className="card-title">{name}</h5>
                    <h6
                      className="card-subtitle mb-2 text-muted"
                      style={{ textTransform: "capitalize" }}
                    >
                      {category}
                    </h6>
                    <p className="card-text">{description}</p>
                    <h5 className="card-subtitle mb-3 text-muted">₹ {price}</h5>
                    <a href="#" className="card-link btn btn-outline-dark">
                      Order Now{" "}
                      <i
                        className="fa-solid fa-circle-arrow-right"
                        style={{ color: "#fff" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </>
            );
          })}
      </section>
    </>
  );
};

export default MenuCard;
