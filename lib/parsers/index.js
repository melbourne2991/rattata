import json from './json'
import md from './md'
import yaml from './yaml'

const parsers = {
  json,
  md,
  yaml,

  // aliases
  markdown: md,
  yml: yaml
}

export default parsers