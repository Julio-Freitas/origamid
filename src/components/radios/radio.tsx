import React, { ChangeEvent, HTMLAttributes, InputHTMLAttributes } from "react";

type TypeELement = InputHTMLAttributes<HTMLInputElement>;

type PropsType = {
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Radio: React.FC<TypeELement & PropsType> = ({
  label,
  onChange,
  ...rest
}) => (
  <label htmlFor={label}>
    <input
      type="radio"
      id={label}
      placeholder="radio"
      onChange={onChange}
      {...rest}
    />
    {label}
  </label>
);

export default Radio;
