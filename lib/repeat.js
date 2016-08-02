export default function repeat(fn, arr) {
  let result;

  if(arr.length) {
    result =  arr.map(item => fn(item)).join('')    
  } else {
    result = Object.keys(arr).map(key => fn(arr[key])).join('')
  }

  return result
}