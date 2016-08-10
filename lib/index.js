import template from './template'
import repeat from './repeat'
import page from './page'
import registerContent from './registerContent'
import formatPath from './formatPath'
import config from './config';
import content from './content';

export {
  content,
  template,
  repeat,
  page,
  registerContent,
  formatPath
}

export default {
  init(_config) {
    Object.assign(config, _config)
    Object.assign(content, registerContent(_config.contentPath))
  }
}