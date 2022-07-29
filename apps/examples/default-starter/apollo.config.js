const dotenv = require('dotenv');
const path = require('path');

const envPath = path.resolve(__dirname, '.env');
dotenv.config({
  path: envPath,
});

module.exports = {
  client: {
    service: {
      name: 'default-starter',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`,
    },
  },
};
