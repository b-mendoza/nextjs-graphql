/* eslint-disable import/no-extraneous-dependencies */

import '@testing-library/jest-dom';

import { mwsServer } from '__mocks__/server';

beforeAll(() => mwsServer.listen());

afterEach(() => mwsServer.resetHandlers());

afterAll(() => mwsServer.close());
