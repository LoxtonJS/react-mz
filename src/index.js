// js入口文件
import React from 'react'
import ReactDom from 'react-dom';

import App from './App';
// 引入基础样式文件
import './base.less';

ReactDom.render(
  <App></App>,
  document.getElementById('root')
)
