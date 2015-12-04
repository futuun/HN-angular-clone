export default function commentsNumber() {
  return function(input):string {
    switch (input) {
      case 0: return 'discuss';
      case 1: return '1 comment';
      default: return `${input} comments`;
    }
  };
}