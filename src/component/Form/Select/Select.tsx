import React, { FC } from "react";
import { Controller, FieldValues, FieldPath } from "react-hook-form";
import ReactSelect, { components } from "react-select";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { Label } from "../Label/Label";

interface SelectProps {
  control: any;
  options?: any[];
  isMulti?: boolean;
  name: FieldPath<FieldValues>;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
}

const CustomDropdownIndicator: React.FC<any> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <div className="text-secondary">
        {props.selectProps.menuIsOpen ? (
          <ArrowUp2 variant="Bold" className="w-5 h-5" />
        ) : (
          <ArrowDown2 variant="Bold" className="w-5 h-5" />
        )}
      </div>
    </components.DropdownIndicator>
  );
};

const style: object = {
  control: (base: React.CSSProperties, state: any) => ({
    ...base,
    border: state.isFocused ? 0 : 0,
    backgroundColor: "#fff",
    boxShadow: state.isFocused ? 0 : 0,
    paddingLeft: 4,
    "&:hover": {
      border: state.isFocused ? 0 : 0,
    },
  }),
};

export const Select: FC<SelectProps> = ({
  control,
  options = [],
  isMulti,
  name,
  label,
  placeholder,
  defaultValue,
}) => {
  return (
    <div className="relative">
      {label && <Label label={label} />}
      <div className="mt-1">
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          defaultValue={defaultValue}
          render={({ field }) => (
            <ReactSelect
              placeholder={placeholder}
              {...field}
              styles={style}
              components={{ DropdownIndicator: CustomDropdownIndicator }}
              options={options}
              isMulti={isMulti}
              defaultValue={defaultValue}
              className="block w-full px-1 py-1  border border-light appearance-none  placeholder:text-[15px] shadow-sm  rounded-xl   sm:text-sm disabled:cursor-not-allowed disabled:opacity-50 focus:border-secondary focus:outline-none focus:ring-secondary bg-white text-gray-700"
            />
          )}
        />
      </div>
    </div>
  );
};
