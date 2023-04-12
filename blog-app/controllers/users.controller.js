function getAllUsers(req, res){
  console.log('USERS API');
  // res.status(404).sendFile(path.join(__dirname, './404.html'));
  res.send('<h1>Users Page</h1>')
}

module.exports = {
  getAllUsers
}
