import React, {useId} from 'react'

const Input  = React.forwardRef( function Input({
    label,
    type = 'text',
    className = "",
    ...props}, 
    ref
)
{
    const id = useId();
    return (
        <div className="w-full flex  items-center gap-3 md:gap-[2rem]">
            {label && (
                <label htmlFor={id} className="text-sm font-medium text-orange-400 dark:text-orange-200">
                    {label}
                </label>
            )}
            <input 
                type={type === 'file' ? 'file' : type} 
                ref={ref}
                {...props}
                id={id}
                className={`
                    px-3 py-2 rounded-lg
                    bg-gray-900 dark:bg-gray-700
                    border border-orange-600 dark:border-orange-400
                    focus:border-orange-500 dark:focus:border-orange-300
                    focus:ring-1 focus:ring-orange-500 dark:focus:ring-orange-300
                    outline-none
                    w-8/12 md:w-3/4 lg:w-1/2
                    transition-all
                    text-sm font-medium
                    text-gray-100 dark:text-gray-300
                    ${type === 'file' ? 'text-orange-500 dark:text-orange-300' : ''}
                `}
            />
        </div>
    )
});

export default Input
