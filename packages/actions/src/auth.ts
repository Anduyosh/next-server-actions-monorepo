'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

/**
 * Login server action.
 * Simulates a user authentication request.
 * @param {unknown} _prevState Previous state.
 * @param {FormData} formData Form data.
 * @returns {Promise<string>}
 */
export const login = async (
    _prevState: unknown,
    formData: FormData
): Promise<string> => {
    try {
        // eslint-disable-next-line no-console
        console.log('[Login server action] This should be executed on server.');

        await new Promise((resolve, reject) => {
            setTimeout(() => {
                const username = formData.get('username');
                if (username) {
                    cookies().set('auth', username.toString(), {
                        httpOnly: true,
                        maxAge: 60 * 60 * 24,
                        path: '/',
                        sameSite: 'lax'
                    });
                    resolve(true);
                } else {
                    reject(new Error());
                }
            }, 200);
        });
    } catch (error) {
        return 'Could not sign in.';
    }

    return redirect('/');
};
