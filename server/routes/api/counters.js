const url = require('url');
const Counter = require('../../models/Counter');
const randomDate = (start, end) => (start.getTime() + Math.random() * (end.getTime() - start.getTime()));

module.exports = (app) => {
  app.get('/api/getData', (req, res, next) => {
    let parts = url.parse(req.url, true);
    let query = parts.query;
    let date = new Date(query.date);
    return Counter.find({"target_date": {
      $gte: date.setDate(date.getDate() - 1),
      $lt: date.setDate(date.getDate() + 2)}})
      .then((counter) => {return res.json(counter)})
      .catch((err) => next(err));
  });

  app.post('/api/counters', function (req, res, next) {
    let date1 = new Date(2019,02,20);
    let date2 = new Date(2019,03,10);
    let _randomDate = randomDate(date1, date2);
    const counter = new Counter({
      process: 'a',
      group: 'a',
      kind: 'a',
      task: 'a',
      msg: 'a',
      target_date: _randomDate,
      time_limit: 'a',
      ts: 12,
      status: 'a'
    });

    counter.save()
      .then(() => res.json(counter))
      .catch((err) => next(err));
  });
};
