module.exports = function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function(x){
      return goodUsers.some(function(y){
        return x.id === y.id;
      });
    })
  };
}
