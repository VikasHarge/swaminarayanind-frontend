import classNames from "classnames";
import { ButtonHTMLAttributes, FC } from "react";





export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    varient? : 'primary' | 'secondary' | 'outline' | 'ghost',
    color? : 'primary' | 'danger' | 'warn' | 'success',
    size? : 'sm' | 'md' | 'lg',
    label? : string,
    loading? : boolean
}


export const Button : FC<ButtonProps> = ({
    varient = 'primary',
    color = 'primary',
    size = 'sm',
    loading = false,
    disabled = false,
    label,
    className,
    children,
    ...props


}) => {
    return (
        <button
          className={classNames(className,
            'flex lg:min-w-[144px] items-center justify-center rounded-md  transition-all ease-in-out duration-500 enabled:hover:opacity-80 w-fit',
            'disabled:cursor-not-allowed disabled:opacity-50',
            {
                'text-white hover:text-primary bg-primary border-2 hover:bg-white hover:border-2 hover:border-primary' : varient === 'primary',
                'text-white hover:text-secondary bg-secondary border-2 hover:bg-white hover:border-2 hover:border-secondary' : varient === 'secondary',
                'gap-1 py-2 px-2 text-sm' : size === 'sm',
                'lg:h-12 gap-2 px-4 py-2 lg:text-base font-bold' : size === 'md',
                'text-md h-14 gap-3 px-5' : size === 'lg',
            }
            )}
            {...props}
        >
            {
                label || children
            }

        </button>
    )
}