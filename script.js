(function($){
  var urlParts = window.location.href.split('/');

  // Assume that the issue id is the last part of the url
  // eg: https://github.com/facebook/react-native/issues/1427
  var issueId = urlParts[urlParts.length - 1];
  var assignee = prompt('Who would you like to assign this issue to?');
  var authenticityToken = $("meta[name='csrf-token']").prop('content');

  if (assignee && assignee.length > 0) {
    $.ajax({
      type: 'POST',
      url: '/facebook/react-native/issues/' + issueId,
      data: {utf8: '✓', _method:'PUT', issue: {assignee: assignee}, authenticity_token: authenticityToken},
      dataType: 'json',
      success: function(response) {
        window.location.reload();
      }
    });
  }
})(jQuery);
