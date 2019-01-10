import marked from 'marked'
const sanitizer = require('sanitize-html')
const maxSanitizationOptions = {
  allowedTags: [
    'b',
    'i',
    'em',
    'strong',
    'strike',
    'code',
    'pre',
    'blockquoe',
    'p',
    'ul',
    'ol',
    'li'
  ]
}

export default {
  methods: {
    markdown(str) {
      let result = ''
      if(typeof str === 'string') {
        str = str.trim()
        result = marked(str)
      }
      return result
    },
    minimalMarkdown(str) {
      let result = ''
      if(typeof str === 'string') {
        str = str.trim()
        result = sanitizer(marked(str), maxSanitizationOptions)
      }
      return result
    }
  }
}
