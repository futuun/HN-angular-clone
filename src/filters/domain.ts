/**
 * this filter will return domain name from given url
 */
export default function domain() {
  return function(input):string {
    if (!input) return '';
    return input.split('/')[2].replace('www.', '');
  };
}