const withPlugins = require('next-compose-plugins');

const headers = async () => {
  return [
    {
      // matching all API routes
      source: '*',
      headers: [
        { key: 'Access-Control-Allow-Credentials', value: 'true' },
        { key: 'Access-Control-Allow-Origin', value: '*' },
        {
          key: 'Access-Control-Allow-Methods',
          value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
        },
        {
          key: 'Access-Control-Allow-Headers',
          value:
            'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
        },
      ],
    },
  ];
};

// next.config.js
const withSass = require('@zeit/next-sass');
module.exports = withPlugins([withSass, headers]);
