import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    vus: 10, // number of virtual users
    duration: '30s', // duration of the test
};

export default function () {
    const res = http.get('http://localhost:3000/produtos');

    check(res, {
        'Status = 200': (r) => r.status === 200,
        'response contains produtos': (r) => r.body.includes('produtos'),
    })
}