import React from "react";
const Card = ({ s, index }) => {
  return (
    <div>
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{s.state}</h5>
            <div className="accordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#num${index}`}
                    aria-expanded="false"
                    aria-controls={`num${index}`}
                  >
                    Districts
                  </button>
                </h2>
                <div
                  id={`num${index}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {s.districts.map((d, ind) => (
                      <li key={ind}>{d}</li>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
