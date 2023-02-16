import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [nameInput, setNameInput] = useState("");
  const nameInputRef = useRef();

  const nameInputOnChangeHandler = e => {
    setNameInput(e.target.value)
  }

  const formSubmitHandler = e => {
    e.preventDefault();
    console.log(nameInput);
    console.log(nameInputRef.current.value)
  }
	return (
		<form onSubmit={formSubmitHandler}>
			<div className="form-control">
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" ref={nameInputRef} onChange={nameInputOnChangeHandler}/>
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;