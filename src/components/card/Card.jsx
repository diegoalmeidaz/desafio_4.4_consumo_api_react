import React from "react";

const Card = ({ characters, search }) => {
  return (
    <div className="container">
      <div className="row">
        {characters
          .filter(
            (item) =>
              item.name.toLowerCase().includes(search.toLowerCase()) ||
              item.species.toLowerCase().includes(search.toLowerCase()) ||
              item.location.name.toLowerCase().includes(search.toLowerCase()) ||
              item.status.toLowerCase().includes(search.toLowerCase())
          )

          .map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card" style={{ minWidth: "200px" }}>
                <img
                  className="card-img-top"
                  src={item.image}
                  alt="character"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <hr />
                  <p className="card-text">Species: {item.species}</p>
                  <p className="card-text">Location: {item.location.name}</p>
                  {(() => {
                    if (item.status === "Dead") {
                      return (
                        <div className="badge bg-danger">{item.status}</div>
                      );
                    } else if (item.status === "Alive") {
                      return (
                        <div className="badge bg-success">{item.status}</div>
                      );
                    } else {
                      return (
                        <div className="badge bg-secondary">{item.status}</div>
                      );
                    }
                  })()}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
