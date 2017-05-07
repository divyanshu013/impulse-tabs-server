import express from 'express';
import fetchFromAPI from '../helpers';

const router = express.Router();
const quotesAPI = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
const weatherAPI = 'https://api.darksky.net/forecast'; // format: url/key/lat,lon

router.get('/quote', (req, res) => fetchFromAPI(res, quotesAPI, 'quotes'));
router.get('/weather', (req, res) => {
  const weatherKey = req.query.key || '9e7dd3b6f9ed142032e55dcdce6686da';
  const { lat, lon } = req.query;
  const weatherUrl = `${weatherAPI}/${weatherKey}/${lat},${lon}`;
  fetchFromAPI(res, weatherUrl, 'weather');
});

export default router;
