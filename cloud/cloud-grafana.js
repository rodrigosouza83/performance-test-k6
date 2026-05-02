import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
  cloud: {
    // Project: Default project
    projectID: 7438862,
    // Test runs with the same name groups test runs together.
    name: 'My first cloud test with Grafana K6'
  }
};

export default function() {
  http.get('https://quickpizza.grafana.com');
  sleep(1);
}