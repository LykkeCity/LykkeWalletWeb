// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The trading-list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'https://api-dev.lykkex.net/api',
  apiAuthUrl: 'https://auth-dev.lykkex.net',
  applicationId: '4849c8f1-e9c7-4de5-851b-af1ba4bf8ef6',
  redirectUrl: 'https://wallet-dev.lykkex.net',
  idleTime: 300,
  idleTimeout: 60
};
