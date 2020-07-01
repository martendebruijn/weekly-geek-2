function home(req, res) {
  res.render('home', {});
}
function hidde(req, res) {
  res.render('hidde', {});
}
function sanne(req, res) {
  res.render('sanne', {});
}
function funda(req, res) {
  res.render('funda', {});
}
function cookies(req, res) {
  res.render('cookies', {});
}
function debugging(req, res) {
  res.render('debugging', {});
}
function aria(req, res) {
  res.render('aria', {});
}

module.exports = {
  home,
  hidde,
  sanne,
  funda,
  cookies,
  debugging,
  aria,
};
