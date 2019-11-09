$(document).ready(function () {
 $('button').on('click', function () {
  var user = $('#user').val();
  isUser(user);
 })
})
function setSuccess(success, label) {
 $('#' + success).addClass('border-success').removeClass('border-danger');
 $('#' + label).addClass('text-success').removeClass('text-danger');
}
function setError(error, label) {
 $('#' + error).addClass('border-danger').removeClass('border-success');
 $('#' + label).addClass('text-danger').removeClass('text-success');
}
function isUser(u) {
 u == "" ? setError('user', 'l-user') : setSuccess('user', 'l-user');
}