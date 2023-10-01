'use client'

import { ErrorMessage, Field, useFormikContext } from "formik";
import {
  ComponentProps,
  FC,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";

import classNames from "classnames";

export interface InputProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  name: Extract<keyof T, string>;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  placeholder?: string;
  autoFocus?: boolean;
  type?: HTMLInputTypeAttribute;
  Icon?: FC<ComponentProps<"svg">>;
  as?: "input" | "select" | "textarea";
  label?: string;
}

const Input = <T,>({
  className,
  name,
  Icon,
  as = "input",
  label,
  containerProps,
  placeholder = "Start typing...",
  ...props
}: InputProps<T>) => {
  const { errors, touched } = useFormikContext<T>();

  return name ? (
    <>
      <div
        className={classNames(
          "relative mb-2 w-full items-center text-sm md:text-base",
          containerProps?.className
        )}
      >
        {label && <label htmlFor={name}>{label}</label>}
        <div
          className={classNames(
            "bg-light-bg-3 flex items-center gap-4 overflow-hidden rounded-md border",
            "focus-within:border-primary focus-within:shadow focus-within:shadow-primary-100",
            props?.disabled
              ? ""
              : touched[name]
              ? errors[name]
                ? "border-error shadow shadow-error-100"
                : "border-primary shadow shadow-primary-100"
              : "border-background-4"
          )}
        >
          {Icon && <Icon className="h-6 w-6" />}
          <Field
            className={classNames(
              "bg-light-bg-3 flex-1 p-3 text-text-1 outline-none placeholder:text-text-4",
              className,
              as === "textarea" && ""
            )}
            as={as}
            name={name}
            // rows={5}
            placeholder={placeholder}
            {...props}
          />
        </div>
        <ErrorMessage
          name={name}
          render={(message : string) => (
            <div className="absolute mt-1 w-0 min-w-full text-xs text-red-500">
              {message}
            </div>
          )}
        />
      </div>
    </>
  ) : null;
};

export default Input;
