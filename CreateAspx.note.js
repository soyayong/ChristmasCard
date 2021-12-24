// Create by AIOS at 2018-05-03

// 百度统计 id 信息
BAIDU_ID = ''
// 后端需注入的 js 信息列表
ASPX_PLUS = ['weixinJs', 'weixinJs_Share']

// 引入文件系统模块
FS = require('fs')
// 扫描指定目录下所有项
ReadDir = path => FS.readdirSync(path).forEach(i => (FS.statSync(`${path}/${i}`).isFile() ? ChangeFile : ReadDir)(`${path}/${i}`))
// 获取数组最后一项
GetLast = arr => arr[arr.length - 1]

// 文件转换
ChangeFile = path => {
  // 仅处理 html 或 htm 后缀的文件
  if (!/\.html$/i.test(path) && !/\.htm$/i.test(path)) return
  // 在文档首部添加 BOM 信息及 ASPX 头部信息
  var file = '\uFEFF<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage<dynamic>"%>\r\n' + FS.readFileSync(path, 'utf-8')

  // 存在需要后端注入的 js 信息钩子时注入
  if (ASPX_PLUS.length) {
    // 获取最后一个 link 标签
    var last_link = GetLast(file.match(/<link.*>/ig))
    // 在最后一个 link 标签后添加后端需要注入的 js 信息钩子
    file = file.replace(last_link, `${last_link}\r\n${ASPX_PLUS.map(i => `<%=ViewData["${i}"]%>`).join('\r\n')}`)
  }

  // 存在百度统计 id 时添加百度统计
  if (BAIDU_ID) {
    // 获取非引入 js 文件，且 type 值为空或 text/javascript 的第一个 script 标签
    var script = file.match(/<script[^>.]*>/ig).filter(i => !i.includes('src') && (!i.includes('type') || /type=["']text\/javascript["']/i.test(i)))[0]
    if (script)
      // 在匹配的 script 标签内注入百度统计所需变量，以及在文档尾部添加百度统计链接
      file = file.replace(script, '<script>\r\n  _hmt = []') + `<script src=//hm.baidu.com/hm.js?${BAIDU_ID}></script>`
    else
      // 当不存在匹配字符串时，在文档尾部直接添加百度统计相关信息
      file += `<script>\r\n  _hmt = []\r\n</script>\r\n<script src=//hm.baidu.com/hm.js?${BAIDU_ID}></script>`
  }
  // 创建 aspx 文件并存放在源文件同一目录下，同时将文件名首字母大写
  FS.writeFileSync(path.slice(0, -GetLast(path.split('.')).length).replace(/\/\w/g, w => w.toUpperCase()) + 'aspx', file)
}

// 读取本脚本文件当前所在目录的 Views 文件夹，开始转换被匹配到的文件
ReadDir('Views')
