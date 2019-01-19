const React = require('react')
const Sample = require('./components/Sample').default

export default class App extends React.Component {
  render() {
    return (
      <div>
        Hello World
        <Sample />
      </div>
    )
  }
}
