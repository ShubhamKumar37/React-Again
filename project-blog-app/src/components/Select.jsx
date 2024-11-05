import React, { useId } from 'react'

const Select = ({
    options,
    label,
    className,
    ...props
}, ref) => {
    
    const id = useId();

  return (
    <div className=' text-white border-orange-400 dark:border-orange-600'>
        {label && (
            <label htmlFor={id} className='inline-block mb-1 pl-1 text-orange-400 dark:text-orange-200'>{label}</label>
        )}

        <select
            ref={ref}
            {...props}
            className={`px-3 py-2 rounded-lg bg-gray-800 text-white dark:text-orange-200 outline-none hover:bg-orange-50 dark:hover:bg-orange-500 duration-200 border border-orange-400 dark:border-orange-600 w-full ${className}`}
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

