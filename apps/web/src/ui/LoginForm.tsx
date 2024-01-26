'use client';

import { type FC } from 'react';
import { useFormState } from 'react-dom';
import { login } from '@next-server-actions-monorepo/actions';
import { SubmitButton } from './SubmitButton';
import { FormField } from './FormField';

/**
 * Login form.
 * @returns {JSX.Element}
 */
export const LoginForm: FC = (): JSX.Element => {
    const [state, formAction] = useFormState(login, null);

    return (
        <form action={formAction}>
            <div className='space-y-10'>
                <div className='space-y-6'>
                    {!!state && (
                        <div
                            role='alert'
                            className='relative w-full rounded-lg border px-4 py-3 text-sm border-destructive text-destructive'
                        >
                            <span>{state}</span>
                        </div>
                    )}
                    <FormField
                        type='text'
                        name='username'
                        label='Username'
                        autoComplete='username'
                    />
                    <FormField
                        type='password'
                        name='password'
                        label='Password'
                        autoComplete='current-password'
                    />
                </div>
                <SubmitButton label='Sign in to your account' />
            </div>
        </form>
    );
};
