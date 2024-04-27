const toString = Object.prototype.toString

function isString(val) {
  return typeof val === 'string'
}

function isNumber(val) {
  return typeof val === 'number'
}

function isBoolean(val) {
  return typeof val === 'boolean'
}

function isUndefined(val) {
  return typeof val === 'undefined'
}

function isArray(val) {
  return toString.call(val) === '[object Array]'
}

function isObject(val) {
  return toString.call(val) === '[object Object]'
}

function isNull(val) {
  return toString.call(val) === '[object Null]'
}

export default function JsonViewer(options) {
  const defaults = {
    theme: 'dark',
    container: null,
    data: '{}',
    expand: false,
  }
  this.options = Object.assign(defaults, options)
  if (isNull(options.container)) {
    throw new Error('Container: dom element is required')
  }
  this.render()
}

JsonViewer.prototype.renderRight = function (theme, right, val) {
  if (isNumber(val)) {
    right.setAttribute('class', theme + 'rightNumber')
  } else if (isBoolean(val)) {
    right.setAttribute('class', theme + 'rightBoolean')
  } else if (val === 'null') {
    right.setAttribute('class', theme + 'rightNull')
  } else {
    right.setAttribute('class', theme + 'rightString')
  }

  if (!isString(val) || val === 'null') {
    right.innerText = val
  } else {
    right.innerText = `"${val}"`
  }
}

JsonViewer.prototype.renderChildren = function (
  theme,
  key,
  val,
  right,
  indent,
  left,
) {
  let self = this
  let folder = this.createElement('span')
  let rotate90 = this.options.expand ? 'rotate90' : ''
  let addHeight = this.options.expand ? 'add-height' : ''
  folder.setAttribute('class', theme + 'folder ' + rotate90)

  folder.onclick = function (e) {
    let nextSibling = e.target.parentNode.nextSibling
    self.toggleItem(nextSibling, e.target)
  }
  let len = 0
  let isObj = false
  if (isObject(val)) {
    len = Object.keys(val).length
    isObj = true
  } else {
    len = val.length
  }

  left.innerHTML = isObj
    ? `<span class="${theme}left-text">${key}</span><span class="${theme}symbol">:</span> ` +
      `<span class="${theme}symbol">{</span>` +
      `<span class="${theme}len">&nbsp;${len}&nbsp;</span>` +
      `<span class="${theme}symbol">}</span>`
    : `<span class="${theme}left-text">${key}</span><span class="${theme}symbol">:</span> ` +
      `<span class="${theme}symbol">[</span>` +
      `<span class="${theme}len">&nbsp;${len}&nbsp;</span>` +
      `<span class="${theme}symbol">]</span>`
  left.prepend(folder)
  const thisIs = isObj ? 'obj' : 'arr'
  const rightIs = isObj ? 'rightObj ' : 'rightArr '
  right.setAttribute('class', theme + rightIs + addHeight)
  self.parse(val, right, indent + 0, theme, thisIs)
}

JsonViewer.prototype.parse = function (dataObj, parent, indent, theme, thisIs) {
  const self = this
  this.forEach(dataObj, function (val, key) {
    const { left, right } = self.createItem(
      indent,
      theme,
      parent,
      key,
      typeof val !== 'object',
      thisIs,
    )
    if (typeof val !== 'object') {
      self.renderRight(theme, right, val)
    } else {
      self.renderChildren(theme, key, val, right, indent, left)
    }
  })
}

JsonViewer.prototype.createItem = function (
  indent,
  theme,
  parent,
  key,
  basicType,
  thisIs,
) {
  let self = this
  let current = this.createElement('div')
  let left = this.createElement('div')
  let right = this.createElement('div')
  let wrap = this.createElement('div')

  current.style.marginLeft = indent * 2 + 'px'
  left.innerHTML = `<span class="${theme}left-text ${thisIs}-color">${key}</span><span class="${theme}symbol">${key === '' ? '' : ':&nbsp;'}</span>`
  if (basicType) {
    current.appendChild(wrap)
    wrap.appendChild(left)
    wrap.appendChild(right)
    parent.appendChild(current)
    current.setAttribute('class', theme + 'current')
    wrap.setAttribute('class', 'jv-wrap')
    left.setAttribute('class', theme + 'left')
  } else {
    current.appendChild(left)
    current.appendChild(right)
    parent.appendChild(current)
    current.setAttribute('class', theme + 'current')
    left.setAttribute('class', theme + 'left jv-folder')
    left.onclick = function (e) {
      const firstSpan = e.currentTarget.querySelector(`span.${theme}folder`)
      const nextDiv = e.currentTarget.nextElementSibling
      self.toggleItem(nextDiv, firstSpan)
    }
  }

  return {
    left,
    right,
    current,
  }
}

JsonViewer.prototype.render = function () {
  let data = this.options.data
  let theme = 'jv-' + this.options.theme + '-'
  let indent = 0
  let parent = this.options.container
  let key = ''
  let dataObj

  parent.setAttribute('class', theme + 'con')
  try {
    dataObj = JSON.parse(data)
  } catch (error) {
    throw new Error('It is not a json format')
  }
  if (isArray(dataObj)) {
    key = ''
  }
  const { left, right } = this.createItem(indent, theme, parent, key)
  this.renderChildren(theme, key, dataObj, right, indent, left)
}

JsonViewer.prototype.toggleItem = function (ele, target) {
  ele.classList.toggle('add-height')
  target.classList.toggle('rotate90')
}

JsonViewer.prototype.createElement = function (type) {
  return document.createElement(type)
}

JsonViewer.prototype.forEach = function (obj, fn) {
  if (isUndefined(obj) || isNull(obj)) {
    return
  }
  if (typeof obj === 'object' && isArray(obj)) {
    for (let i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj)
    }
  } else {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        fn.call(null, obj[key] ?? 'null', key, obj)
      }
    }
  }
}
