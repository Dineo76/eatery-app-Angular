# EateryApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.21.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Admin orders dashboard

The admin dashboard is available at `/admin` to users whose database role is `ADMIN`.
Apply both migrations to an existing database from the repository root:

```bash
psql "$DATABASE_URL" -f server/migrations/001_order_status.sql
psql "$DATABASE_URL" -f server/migrations/002_single_admin.sql
```

The first migration adds the order status column used by the dashboard. The second
ensures PostgreSQL allows at most one admin, regardless of role casing. If more than
one admin already exists, change all but the account to keep back to `USER` before
applying the second migration. The dashboard loads orders and updates their status
through authenticated, administrator-only API endpoints.

To create the dashboard account without registering through the app, add these
values to `server/.env`. Choose your own email and a strong password of at least 12
characters; never commit or share the credentials:

```env
ADMIN_NAME=KwaJozi Admin
ADMIN_EMAIL=your-email@example.com
ADMIN_PASSWORD=your-strong-unique-password
```

After applying both migrations, run this from the `server` directory:

```bash
npm run setup:admin
```

This creates the account, or sets the provided account's name, password, and role
to `ADMIN`. Then sign in at `/signin` and open `/admin`.

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
