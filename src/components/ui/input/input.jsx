import clsx from 'clsx'
import React from 'react'

export const Input = ({ type, placeholder, className, variant, name, value, id, onChange }) => {
    return (
        <input type={type} placeholder={placeholder} className={clsx("border-2 outline-none focus:border-gray-300", {
            "": variant == "primary",
            "rounded-md": variant == "secondary"
        },
        className
        )}
        onChange={onChange}
        value={value}
        name={name}
        id={id}
        />
    )
}
