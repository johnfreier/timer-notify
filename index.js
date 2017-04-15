var notifier = require('node-notifier');

console.log('Start timer notification...');

function sendNotification() {
	var message = '\n\nTime to get up and clear your eyes!\n';
	notifier.notify({
		title: 'Timer notification!',
		message: message
	}, function() {	});

	console.log(message);
}


// Set timer to 20 minutes 20 by 20 by 20 rule.
var minutes = 20 * 60 * 1000;

// Continuous loop
setInterval(function() {
	sendNotification();
}, minutes);

return 0;
