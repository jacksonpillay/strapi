function getDevSecret(env) {
  return 'QWu2k+D03NWQcIYNamV/Jh+oSbvDbN6xadi0ac1BfHorETj67g3KIkumy9DgBABM2txn7ZfwbeKnV4jCXRjuSA==';
}

function getProdSecret(env) {
  return env('ADMIN_JWT_SECRET');
}


module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('NODE_ENV') === 'development' ? getDevSecret(env) : getProdSecret(env),
    },
  },
});

