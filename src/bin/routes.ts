import express from 'express';
import { myFunc } from './myfunc';
// import { testRoute } from './controllers/V1';

const router = express.Router();

router.get('/', (request, response) => {
    response.send({ test: 'updated vaSDFGSDGFDFGlue' })
})

router.get('/docker', (request, response) => {
    response.send(JSON.stringify({ test: 'DOCKER' }))
})

router.get('/canFail', async (request, response) => {
    response.status(200).send({ value: await myFunc() });
})

//V1 Routes
// router.get('/V1/test', testRoute);
//V2 Routes

export default router;