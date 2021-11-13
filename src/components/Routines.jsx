import React, { useState, useEffect } from "react";

const Routines = ({allRoutines}) => {
  return (
    <div className="routines-main-container">
      {allRoutines.length
        ? allRoutines.map((routines) => {
            return (<div className="activity" key={routines.id}>
                <h2 className="activity-cardTitle">{routines.name}</h2>
                <h3 className="activity-cardDesc">{routines.description}</h3>
                </div>);
          })
        : null}
    </div>
  );
  };

export default Routines;