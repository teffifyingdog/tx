import { define, WeElement } from 'omi'
import logo from './logo.svg'
import '../app-intro'
import '@omiu/button'

define('my-app', class extends WeElement {
  static css = require('./_index.less')

  name = 'Omi'

  clickHandler = () => {
    this.name = 'OMI'
    this.update()
  }

  render() {
    return (
      <div class="app">
        <header class="app-header">
          <img
            src={logo}
            onClick={this.clickHandler}
            class="app-logo"
            alt="logo"
          />
          <h1 class="app-title">Welcome to {this.name}</h1>
        </header>
        <app-intro msg="欢迎使用云开发 CloudBase Omi Starter" />
      </div>
    )
  }
})
