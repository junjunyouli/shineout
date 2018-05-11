webpackJsonp([22],{1278:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(1),r=o.n(s),t=o(119),i=o(118),a=o(78),c=o(659),l=o.n(c),p=o(660),u=o.n(p),f=Object(a.a)(l.a,u.a),d=[];e.default=Object(t.a)(function(n){return r.a.createElement(i.b,Object.assign({},n,{codes:void 0,source:f,examples:d}))})},659:function(n,e){n.exports="## 安装\n```\n$ npm install shineout\n```\n\n## 使用\n``` js\nimport { Table } from 'shineout'\n\n<Table />\n```\n\n## 配置\n\n### theme 主题\n\n目前内置支持了两套主题，bootstrap（v3版本, 默认），和兼容 ant-design 的主题 'antd'（方便两个组件库混用的场景，只是配色接近，交互和接口参数不同）。\n\n可以通过修改 webpack 的 less-loader 配置来切换主题。\n```\n{\n  loader: 'less-loader',\n  options: {\n    modifyVars: {\n      'so-theme': 'antd'\n    }\n  }\n}\n```\n\n### CSS 前缀\n\n默认通过前缀来隔离 css 代码，默认的前缀是 'so'。通常情况下，不需要修改。如果想修改这个值，修改 webpack 的 less-loader 配置\n```\n{\n  loader: 'less-loader',\n  options: {\n    modifyVars: {\n      'so-prefix': 'your-prefix'\n    }\n  }\n}\n``` \n\n在项目内设置 config\n\n```\nimport config from 'shineout/config'\nconfig.setConfig({\n  prefix: 'your-prefix'\n})\n```\n```\n// 或者修改webpack 的 process.env\nplugins: [\n  new webpack.DefinePlugin({\n    'process.env': {\n      SO_PREFIX: JSON.stringify('your-prefix'),\n    },\n  }),\n],\n```\n\n### CSS Module\n\n如果需要使用 CSS Module，首先修改 webpack 的 css-loader 配置\n```\n{\n  loader: 'css-loader',\n  options: {\n    module: true,\n    localIdentName: '[local]--[hash:base64:5]'\n  }\n}\n```\n\n在应用入口设置 config.cssModule 为 true\n```\nimport config from 'shineout/config'\nconfig.setConfig({\n  cssModule: true\n})\n\n```\n```\n// 或者修改 webpack 的 process.env\nplugins: [\n  new webpack.DefinePlugin({\n    'process.env': {\n      CSS_MODULE: true\n    },\n  }),\n],\n```\n"},660:function(n,e){n.exports="# Get Start"}});