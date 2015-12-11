export default function timeAgo($timeout, $interval, fromNow):ng.IDirective {
  return function(scope, element, attrs) {
    let timeoutPromise = null;
    let intervalPromise = null;
    const intervalLength = 60000;

    attrs.$observe('timeAgo', val => {
      updateView();
      timeoutPromise = $timeout(function() {
        updateView();
        setUpdate();
      }, 60000 - (new Date().getTime() % 60000));
    });

    function updateView() {
      // don't update if value hasn't changed
      if (element.text() != fromNow(attrs.timeAgo))
        element.text(fromNow(attrs.timeAgo));
    }

    function setUpdate() {
      intervalPromise = $interval(function() {
        updateView();
      }, intervalLength);
    }

    element.bind('click', function() {
      element.text(new Date(attrs.timeAgo * 1000).toUTCString());
      $timeout(function() {
        updateView();
      }, 5000);
    });

    element.bind('$destroy', function() {
      if (timeoutPromise) $timeout.cancel(timeoutPromise);
      if (intervalPromise) $interval.cancel(intervalPromise);
    });
  };
}