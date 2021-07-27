import { graphql } from 'msw';
import { setupServer } from 'msw/node';

import { handlers } from './handlers';

const mwsServer = setupServer(...handlers);

export { mwsServer, graphql };
