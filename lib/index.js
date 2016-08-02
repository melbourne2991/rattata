import template from './template'
import repeat from './repeat'
import page from './page'
import registerContent from './registerContent'
import formatPath from './formatPath'


const core = {
  _config: {},

  _pages: []

  content: null,

  config(config) {
    this._config = Object.assign(this._config, config)
    this.content = registerContent(config.contentPath)
  }
}

export function addPage(page) {
  _pages.push(page)
}

export function getConfig() {
  return core._config
}

export function getContent() {
  return core.content
}

export {
  getContent,
  template,
  repeat,
  page,
  registerContent,
  formatPath
}

export default core