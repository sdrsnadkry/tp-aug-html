import React from "react";

const Button = (props) => {
  console.log(props.type);

  const conditionalClass =
    props.type === "bordered"
      ? "border-primary border-2  text-primary py-[0.625rem]  hover:border-hard-primary hover:text-hard-primary"
      : "bg-primary   font-600 text-white py-[0.625rem]  hover:bg-hard-primary";

  const conditionalSize =
    props.size === "lg"
      ? "text-body-medium px-10 py-4"
      : props.size === "md"
      ? "text-body-small px-8 py-[0.875rem]"
      : "text-body-tiny px-6";

  return (
    <button
      className={`rounded-full  font-600  ${conditionalClass} ${conditionalSize}`}
    >
     {props.children}
    </button>
  );
};

export default Button;
