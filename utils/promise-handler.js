// avoid having to use too many .then || .catch in controllers
module.exports = promise => promise
  .then(response => [null, response])
  .catch(err => [err, null]);

  