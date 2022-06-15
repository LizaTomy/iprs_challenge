import React from "react";
import './Form_style.css'

const Form = React.forwardRef((props, ref) => {
  return (
      <div className="fcontainer">
        <form onSubmit={props.onClick}>
          <label>
            <h4>City:</h4>
          </label>
          <input ref={ref} type="text" placeholder="Enter the city" />
          <button>Search</button>
        </form>
      </div>
    );
  });
   export default Form;
  