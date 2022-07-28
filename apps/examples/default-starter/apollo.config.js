const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, '.env'),
});

module.exports = {
  client: {
    service: {
      name: 'default-starter',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`,
    },
  },
};
