import React from "react";

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const previousPage = () => {
    onPrevious();
  };

  const nextPage = () => {
    onNext();
  };

  return (
    <nav>
      <ul className="pagination justify-content-center mb-5 mt-5">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={previousPage}>
              {" "}
              Anterior
            </button>
          </li>
        ) : null}

        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={nextPage}>
              Siguiente
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
