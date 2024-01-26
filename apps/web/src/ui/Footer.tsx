import { type FC } from 'react';

/**
 * Footer component.
 * @returns {JSX.Element}
 */
export const Footer: FC = (): JSX.Element => (
    <footer className='flex justify-center py-10'>
        <span className='text-balance text-center text-sm leading-loose text-muted-foreground'>
            {`Built by`}{' '}
            <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/Anduyosh'
                className='font-medium underline underline-offset-4'
            >{`Anduyosh`}</a>
            {`. Check the source code on `}
            <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/Anduyosh/next-server-actions-monorepo'
                className='font-medium underline underline-offset-4'
            >{`GitHub`}</a>
            {`.`}
        </span>
    </footer>
);
