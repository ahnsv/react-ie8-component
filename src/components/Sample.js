const React = require("react");
const Component = React.Component;
const styles = require("./Sample.css");
export default class Sample extends Component {
	render() {
		return <div className={styles.hi}>Sample Hi</div>;
	}
}
