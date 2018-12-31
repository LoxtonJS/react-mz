import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

// 引入组件
import Tabbar from '@/components/Tabbar';
import HomeFilms from  './HomeFilms';
import HomeCinemas from  './HomeCinemas';
import HomeGroup from  './HomeGroup';
import HomeCenter from  './HomeCenter';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myTabs: [
        { key: 'films', href: "/films", icon: "icon-dianying", name: "电影"},
        { key: 'cinemas', href: "/cinemas", icon: "icon-yingyuana", name: "影院"},
        { key: 'groupBuy', href: "/groupBuy", icon: "icon-tuangou", name: "拼团"},
        { key: 'center', href: "/center", icon: "icon-wodexinlemoren-copy", name: "我的"}
      ]
    }
  }

  render () {
    return (
      <div>
        <Switch>
          <Route path="/films" component={ HomeFilms }></Route>
          <Route path="/cinemas" component={ HomeCinemas }></Route>
          <Route path="/groupBuy" component={ HomeGroup }></Route>
          <Route path="/center" component={ HomeCenter }></Route>
          <Redirect to="/films"></Redirect>
        </Switch>
        <Tabbar tabs={this.state.myTabs}></Tabbar>
      </div>

    )
  }
}

