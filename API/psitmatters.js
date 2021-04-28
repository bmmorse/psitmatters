const router = require('express').Router();
const axios = require('axios');

router.get('/ps', (req, res, next) => {
  const url = 'https://www.psitmatters.com/';
  const DATA = [];

  const DATA_TITLES = [
    'Program Donations',
    'Non-Profits Supported',
    'Donations This Month',
    'Hunger Org. Supported',
    'Meals Provided*',
    'Single-Use Bags Not Used*',
  ];

  function splitHTML() {
    return axios.get(url).then((res) => res.data.split('\n'));
  }

  splitHTML()
    .then((arr) => {
      DATA_TITLES.map((text) => {
        // iterate over the html
        arr.map((htmlString) => {
          if (htmlString.includes(`${text}`)) {
            let regex = new RegExp(`\\$?[\\d|,]*?<\/b\>\<\/h1\>${text}`, 'g');
            let value = htmlString.match(regex)[0].split('</b></h1>');
            const resultObj = {
              title: `${text}`,
              value: value[0],
            };
            DATA.push(resultObj);
          }
        });
      });
      res.send(DATA);
      console.log(DATA);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
