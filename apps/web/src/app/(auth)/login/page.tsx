import { type FC } from 'react';
import { type Metadata } from 'next';
import { LoginForm } from '~/ui/LoginForm';

export const metadata: Metadata = {
    title: 'Sign in',
    alternates: {
        canonical: '/login'
    }
};

/**
 * Login page.
 * @returns {JSX.Element}
 */
const Page: FC = (): JSX.Element => (
    <section id='login'>
        <div className='bg-white py-20'>
            <div className='mx-auto flex w-full max-w-md items-center px-6 lg:w-2/6'>
                <div className='flex-1 space-y-8'>
                    <div className='space-y-4 text-center'>
                        <h2 className='text-center font-medium text-3xl leading-6'>
                            {`Hello!`}
                        </h2>
                        <p className='text-muted-foreground'>
                            {`Identify to access to your account`}
                        </p>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>
    </section>
);

export default Page;
