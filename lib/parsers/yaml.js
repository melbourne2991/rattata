import yamljs from 'yamljs'

export default function yaml(str) {
  return yamljs.parse(str)
}