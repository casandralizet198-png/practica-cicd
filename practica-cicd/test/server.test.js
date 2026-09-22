const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('deberia responder con status 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  it('deberia contener un mensaje de texto', async () => {
    const res = await request(app).get('/');
    expect(res.text).toContain('CI/CD');
  });
});

describe('GET /health', () => {
  it('deberia responder OK en formato JSON', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('OK');
  });
});
