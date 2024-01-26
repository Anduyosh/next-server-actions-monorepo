import { type FC } from 'react';
import { type Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Home',
    alternates: {
        canonical: '/'
    }
};

/**
 * Homepage.
 * @returns {JSX.Element}
 */
const Page: FC = (): JSX.Element => {
    const cookieStore = cookies();
    const username = cookieStore.get('username')?.value;

    if (!username) {
        redirect('/login');
    }

    return (
        <div className='flex-1'>
            <section
                id='hero'
                className='flex flex-col py-16 border-b bg-gradient-to-b from-background to-neutral-50'
            >
                <div className='mx-auto flex flex-col items-center md:w-2/3'>
                    <h1 className='bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-6xl font-bold leading-tight tracking-tight text-transparent'>{`Welcome, ${username}`}</h1>
                </div>
            </section>
        </div>
    );
};

export default Page;
