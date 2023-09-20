import React from "react";

interface ButtonBeforeProps {
  onClick: () => void;
  icon: string;
}

function ButtonBefore({ icon, onClick }: ButtonBeforeProps) {
  return <button onClick={onClick}>{icon}</button>;
}

export default ButtonBefore;