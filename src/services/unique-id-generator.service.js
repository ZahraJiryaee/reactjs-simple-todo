export default function generateUniqueId(prefix = "") {
  return `${prefix}-${Math.random().toString(16).slice(2)}`;
}
