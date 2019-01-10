const React = require("react");
const PropTypes = require("prop-types");

const TestChild = props => (
	<div>
		Child 응애~
		{props.name}에요
	</div>
);

TestChild.propTypes = {
	name: PropTypes.string.isRequired
};
module.exports = TestChild;
