const React = require("react");
const Component = React.Component;
const TestChild = require('./TestChild').default;
const styles = require('./Test.css');

export default class Test extends Component {
  render() {
    return (
      <div className={styles.div}>
        <h1>Test Component</h1>
        <TestChild name="상태"/>
      </div>
    )
  }
}
