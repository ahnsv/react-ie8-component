const React = require('react')
const Sample = require('./components/Sample').default
const Test = require('./components/Test/Test').default

export default class App extends React.Component {
  render() {
    return (
      <div>
        Hello World
        <Test />
        <Sample />
      </div>
    )
  }
}
