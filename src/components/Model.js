import React, { useState } from "react";

export default function Model() {
  const [model, setModel] = useState(false);

  const toggleModel = () => {
    setModel(!model);
  };

  if (model) {
    document.body.classList.add('active-model')
  } else {
    document.body.classList.remove('active-model')
  }

  return (
    <>
      <button onClick={toggleModel} className="btn-model">
        Open
      </button>

      {model && (
        <div className="model">
          <div onClick={toggleModel} className="overlay"></div>
          <div className="model-content">
            <h3>Hello Model</h3>
            <p>
              please enter input
            </p>
            <button className="close-model" onClick={toggleModel}>
              CLOSE
            </button>
            <button className="input-model" onClick={toggleModel}>
              Input
            </button>

          </div>
        </div>
      )}

    </>
  );
}
