import React from "react";

function InputAfter({ childrenLeftInput, childrenInput }) {
  return (
    <div className="flex">
      <InputLeft childrenLeftInput={childrenLeftInput} />
      <Input childrenInput={childrenInput} />
    </div>
  );
}

const InputLeft = ({ childrenLeftInput }) => (
  <input placeholder={childrenLeftInput} className="input input_left" />
);

const Input = ({ childrenInput }) => (
  <input placeholder={childrenInput} className="input" />
);

export default InputAfter;
