export default function timeAgo($timeout, fromNow):ng.IDirective {
  return function(scope, element, attrs) {
    let timeoutID = null; // you need this to cancel timeout
    let interval = 61000 - (new Date().getTime() % 60000);

    function updateTime() {
      element.text(fromNow(attrs.timeAgo));
    }

    function updateLater() {
      timeoutID = $timeout(function() {
        updateTime();
        interval = 60000;
        updateLater();
      }, interval);
    }

    element.bind('$destroy', function () {
      if (timeoutID) $timeout.cancel(timeoutID);
    });

    updateTime();
    updateLater();
  };
}