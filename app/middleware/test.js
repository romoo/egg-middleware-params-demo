'use strict';

module.exports = (options, app) => {
  return async function gzip(ctx, next) {
    console.log('app: ', app);
    await next();
  };
};
