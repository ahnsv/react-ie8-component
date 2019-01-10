const React = require("react");
const TestChild = require("./TestChild").default;
const styles = require("./Test.css");

const TestSFC = () => (
	<div className={styles.div}>
		<h1>Test Component</h1>
		<TestChild name="상태" />
	</div>
);

export default class Test extends React.Component {
  render() {
	return (
	  <div>
			<TestSFC />
	  </div>
	)
  }
}
