// // Simple environment-gated logger
// // Use: const { debug } = require('./utils/log'); debug('message', obj)
// function enabled() {
//   try {
//     // Support both GATSBY_ prefixed and legacy `gatsbyshowlogs` environment variables
//     if (process && process.env) {
//       if (process.env.GATSBY_SHOW_LOGS === 'true') return true;
//       if (process.env.gatsbyshowlogs === 'true') return true;
//       if (process.env.gatsbyshowlogs === true) return true;
//     }
//   } catch (e) {
//     // ignore
//   }
//   return false;
// }

// function debug(...args) {
//   if (enabled()) {
//     // eslint-disable-next-line no-console
//     console.log(...args);
//   }
// }

// function info(...args) {
//   if (enabled()) {
//     // eslint-disable-next-line no-console
//     console.info(...args);
//   }
// }

// module.exports = {
//   debug,
//   info,
//   enabled,
// };
