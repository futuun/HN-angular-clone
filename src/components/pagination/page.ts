export default function page() {
  return function(input, page, pageSize) {
    if (!input) return;
    let start = Math.max(page * pageSize, 0);
    return input.slice(start, start + pageSize);
  };
}