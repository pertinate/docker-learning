import express from 'express';

import config from './config.json';

import routes from './bin/routes';

const port = process.env.PORT || 8080;

export const app = express();

app.use(routes)

app.listen(8080, () => {
    console.log('Server Online on port:', port)
    console.log('config:', config)
});

export default {
    randFn: (a: number, b: number): number => a + b
}