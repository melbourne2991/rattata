import fs from 'fs'
import path from 'path'
import mkdirp from 'mkdirp'
import { getConfig } from './index'
import beautify from 'js-beautify'


const beautifyOptions = {
  indent_size: 2,
  indent_inner_html: true,
  unformatted: ['code', 'pre', 'em', 'strong', 'span']
}

const pages = []

export default function page(options) {
  const distPath = path.resolve(getConfig().dist)
  const fullPath = path.join(distPath, options.path)
  const parsedPath = path.parse(fullPath)

  const   { dir, base, ext } = parsedPath

  if(ext.length) {
    mkdirp.sync(dir)
    fs.writeFileSync(fullPath, options.data, 'utf8')
  } else {
    mkdirp.sync(fullPath)
    fs.writeFileSync(`${fullPath}/index.html`, beautify.html(options.data, beautifyOptions), 'utf8')
  }
}