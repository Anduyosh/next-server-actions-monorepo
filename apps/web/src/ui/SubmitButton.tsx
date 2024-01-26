'use client';

import { Loader2 } from 'lucide-react';
import { type FC } from 'react';
import { useFormStatus } from 'react-dom';

interface SubmitButtonProps {
    label: string;
}

/**
 * Form submit button component.
 * @typedef {SubmitButtonProps}
 * @returns {JSX.Element}
 */
export const SubmitButton: FC<SubmitButtonProps> = ({ label }): JSX.Element => {
    const { pending } = useFormStatus();

    return (
        <button
            type='submit'
            className='bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 w-full py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
            aria-disabled={pending}
        >
            {pending && <Loader2 className='mr-2 size-4 animate-spin' />}
            <span>{label}</span>
        </button>
    );
};
