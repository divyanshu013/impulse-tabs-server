import test from 'ava';
import http from 'http';

test('Ava is running super fine', t => (
  t.pass()
));

test.cb('Node server should return 200', (t) => {
  http.get('http://127.0.0.1/', (res) => {
    t.is(200, res.statusCode, 'Status code matched');
    t.pass();
    t.end();
  });
});
