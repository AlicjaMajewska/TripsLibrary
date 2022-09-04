import { rest } from 'msw';
import { trips } from './data/trips';

export const handlers = [
  rest.get('/trips', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(trips));
  }),
];
