var colors = [
	'blue',
	'yellow',
	'red',
	'green',
];

exports.getColor = function() {
	var idx = Math.floor(Math.random() * colors.length);
	return colors[idx];
};
