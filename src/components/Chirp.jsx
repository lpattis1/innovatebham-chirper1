import React, { useEffect } from "react";
import { gsap } from "gsap";
import { createRef } from "react";

const Chirp = ({ children }) => {
  const cardRef = createRef();

  useEffect(() => {
    gsap.to(cardRef.current, { opacity: "1" });
  });
  return (
    <div>
      <div className="row chirp-row">
        <div className="col col-12 chirp-col">
          <div ref={cardRef} className="card chirp mb-3 ">
            <div
              id="#chirpline"
              className="container d-flex justify-content-between align-items-center"
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chirp;
