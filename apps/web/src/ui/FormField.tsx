import { type FC, type InputHTMLAttributes } from 'react';

interface FormLabelProps {
    label: string;
}

type FormFieldProps = FormLabelProps & InputHTMLAttributes<HTMLInputElement>;

/**
 * Basic form field to retrieve user input.
 * @typedef {FormFieldProps}
 * @returns {JSX.Element}
 */
export const FormField: FC<FormFieldProps> = ({
    name,
    label,
    ...props
}): JSX.Element => (
    <div className='space-y-2'>
        <label
            htmlFor={name}
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
            {label}
        </label>
        <input
            {...props}
            name={name}
            className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
        />
    </div>
);
