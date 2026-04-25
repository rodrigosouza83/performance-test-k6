import http from 'k6/http';
import { check } from 'k6';

export const options = { vus: 1, duration: '1s'};

export default function () {
    const res = http.get('http://localhost:3000/produtos');

    check(res, {
        'Status = 200': (r) => r.status === 200,
        'Quantidade de produtos = 2': (r) => r.json('quantidade') === 2
    })
}