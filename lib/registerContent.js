import fs from 'fs'
import path from 'path'
import parsers from './parsers'

function validateName(name, tree) {
  if(tree[name]) {
    throw new Error(`File names must be unique to hierarchy level, "${name}" already exists`)
  }

  return name;
}

export default function registerContent(uri) {
  const tree = {}
  const files = fs.readdirSync(uri)

  files.forEach((fileName) => {
    const fileUri = path.join(uri, fileName)
    const { ext } = path.parse(fileName)

    if(fs.lstatSync(fileUri).isDirectory()) {
      let content = registerContent(fileUri)
      tree[fileName] = content
    } else {
      const parser = parsers[ext.split('.')[1]]
      const fileContents = fs.readFileSync(fileUri, {encoding: 'utf8'})

      let content = parser ? parser(fileContents) : fileContents

      tree[fileName] = content
    } 
  })

  return tree
}