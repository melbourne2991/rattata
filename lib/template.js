export default function template(fn) {
  return (data) => {
    return fn(data)
  }
}
