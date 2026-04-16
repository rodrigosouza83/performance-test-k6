import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    vus: 5, // number of virtual users
    duration: '10s', // duration of the test
};

export function setup() {
    console.log('Iniciando "Teste')
    return { baseUrl: 'http://localhost:3000' }
}

export default function (data) {
    const res = http.get(`${data.baseUrl}/produtos`);

    console.log(`Status code: ${res.status}`);
    console.log(`Trecho da resposta: ${res.body.substring(0, 100)}`)


    check(res, {
        'Status = 200': (r) => r.status === 200,
        'response contains produtos': (r) => r.body.includes('produtos'),
    });
}

export function teardown() {
    console.log('Finalizando Teste')
}