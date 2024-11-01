import React, { useId } from 'react'

const Select = ({
    options,
    label,
    className,
    ...props
}, ref) => {
    
    const id = useId();

  return (
    <div>
        {label && (
            <label htmlFor={id} className='inline-block mb-1 pl-1'>{label}</label>
        )}

        <select
            ref={ref}
            {...props}
            // id={id}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-green-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {
                options.map((item, index) =>(
                    <option value={item} key={index}>{item}</option>
                ))
            }
        </select>
    </div>
  )
}

export default React.forwardRef(Select);