const React = require("react");
const styles = require("./Sample.css");

const Component = React.Component;

export default class Sample extends Component {
	render() {
		return <div className={styles.hi}>Sample Hi</div>;
	}
}
