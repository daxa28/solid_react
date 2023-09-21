
import React from "react";

interface ButtonAfterProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
}

function ButtonAfter({ icon, onClick }: ButtonAfterProps) {
  return <button onClick={onClick}>{icon}</button>;
}

export default ButtonAfter;
