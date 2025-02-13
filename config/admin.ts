export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bYIYdkww/iQuHd+vaeFnfw=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'VDJ2qzGw7DI1XdSSU8N7Gg=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'teMNUkRSzYhj4ahqCmhs9w=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
