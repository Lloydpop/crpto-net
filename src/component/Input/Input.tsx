import { forwardRef, useState, ChangeEvent, Ref } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Label } from "../Form/Label/Label";

interface InputProps {
  type?: "text" | "password";
  name?: string;
  id?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
}

export const Input = forwardRef(
  (props: InputProps, ref: Ref<HTMLInputElement>) => {
    const {
      type = "text",
      name,
      id,
      placeholder,
      onChange,
      label,
      value,
      defaultValue,
      disabled,
    } = props;
    const [inputType, setInputType] = useState<string>(type);

    return (
      <div>
        {label && <Label id={id} label={label} />}
        <div className="mt-1 relative">
          <input
            id={id}
            name={name}
            placeholder={placeholder}
            ref={ref}
            defaultValue={defaultValue}
            disabled={disabled}
            type={inputType}
            className="block w-full appearance-none text-black rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm disabled:cursor-not-allowed disabled:opacity-50"
            onChange={onChange}
            value={value}
          />
          {type === "password" && (
            <>
              {inputType === "password" ? (
                <button
                  className="absolute bottom-1/4 right-3"
                  onClick={() => setInputType("text")}
                  type="button"
                >
                  <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                </button>
              ) : (
                <button
                  className="absolute bottom-1/4 right-3"
                  onClick={() => setInputType("password")}
                  type="button"
                >
                  <EyeIcon className="h-5 w-5 text-gray-500" />
                </button>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
