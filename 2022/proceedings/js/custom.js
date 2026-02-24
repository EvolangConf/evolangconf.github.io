$(document).ready(function() {
	sharedData.plenarySpeakers.forEach(plenarySpeaker => {
		$("#plenaries-menu").append(
			$("<li>").append(
				$("<a>", {"href": "plenary.html?speaker=" + plenarySpeaker.id}).text(plenarySpeaker.name)
			)
		);
	});
	sharedData.invitedSpeakers.forEach(invitedSpeaker => {
		$("#invited-menu").append(
			$("<li>").append(
				$("<a>", {"href": "invited.html?speaker=" + invitedSpeaker.id}).text(invitedSpeaker.name)
			)
		);
	});
});
