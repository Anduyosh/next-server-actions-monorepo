import { type FC, type ReactNode } from 'react';
import { type Metadata } from 'next';

import { inter } from './fonts';

import './globals.css';
import { Footer } from '~/ui/Footer';

interface LayoutProps {
    children: ReactNode;
}

export const metadata: Metadata = {
    title: {
        default: 'NextJS Server Actions',
        template: '%s · NextJS Server Actions'
    },
    description:
        'Quick and minimal reproduction of a NextJS app that imports a server actions shared package.',
    alternates: {
        canonical: '/'
    }
};

/**
 * Root layout
 * @typedef {LayoutProps}
 * @returns {JSX.Element}
 */
const Layout: FC<LayoutProps> = ({ children }): JSX.Element => (
    <html lang='en' className={inter.variable}>
        <body className='relative flex min-h-screen flex-col'>
            <main className='flex-1'>{children}</main>
            <Footer />
        </body>
    </html>
);

export default Layout;
