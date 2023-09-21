import React from "react";

type User = {
  name: string;
  age: number;
};

type Admin = {
  personalInfo: {
    name: string;
    age: number;
  };
};

interface DisplayPersonProps {
  user: User;
  admin: Admin;
}

function DisplayPersonNameBefore(props: DisplayPersonProps) {
  return (
    <div>{props.user ? props.user.name : props.admin.personalInfo.name}</div>
  );
}

export default DisplayPersonNameBefore;
