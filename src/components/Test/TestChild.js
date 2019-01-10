const React = require("react");
const Component = React.Component;

export default class TestChild extends Component {
  render() {
    return (
      <div>
        Child 응애~
        { this.props.name }에요
      </div>
    )
  }
}
