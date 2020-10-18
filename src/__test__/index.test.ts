import express from 'express';
import routes from '../bin/routes';
import request from 'supertest';
import * as myfunc from '../bin/myfunc';

const app = express();

app.use(routes);


// Object.defineProperty(myfunc, 'myFunc', { value: jest.fn(), writable: true })

describe('testing server routes', () => {
    it('GET /', async () => {
        expect.assertions(1);
        const { body } = await request(app).get('/');
        console.log(body)
        expect(body).toEqual({ test: 'updated vaSDFGSDGFDFGlue' })
    });

    it('GET /canFail', async () => {
        expect.assertions(1);

        jest.mock('../bin/myfunc', () => ({
            myFunc: () => 0
        }))

        const { body } = await request(app).get('/canFail');

        console.log('sdfgsdfgsd', body)

        expect(body).toEqual({ value: 0 });
    })
})