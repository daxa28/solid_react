import React from "react";

interface PersonName {
  name: string;
}

function DisplayPersonNameAfter({ name }: PersonName) {
  return <div>{name}</div>;
}

export default DisplayPersonNameAfter;
