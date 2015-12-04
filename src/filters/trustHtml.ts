export default function($sce) {
  return function(text) {
    return $sce.trustAsHtml(text);
  }
}