# NextJS Server Actions Monorepo Reproduction

Quick and minimal reproduction of a NextJS app that imports a server actions shared package.

## Setup

Clone the repository into your local machine

```sh
git clone https://github.com/Anduyosh/next-server-actions-monorepo
```

Install all the dependencies

```sh
yarn //or npm install
```

Build the internal packages

```sh
yarn build //or npm run build
```

Start the development server. This will also run the `@next-server-actions-monorepo/actions` package on watch mode.

```sh
yarn dev //or npm run dev
```

## Reproduction steps

1. Once the development server is started, open a browser and access to `localhost:3000`.
2. You will be redirected to `/login` as no auth cookie will be found.
3. On the `/login` page, open the DevTools console and click on the `Sign in to your account` button.
4. That button calls a server action from the `@next-server-actions-monorepo/actions` package. However, it has been executed on the client despite having the `"use server;"` directive on top of the bundled file. You can check this by seeing its log message on the DevTools console (`[Login server action] This should be executed on server.`).
5. If some credentials are introduced, the server action will try to set the auth cookie and an error will be displayed as the `cookies()` method must be executed on the server.
