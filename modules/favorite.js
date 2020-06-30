var favoriteGames = [
	"Breath of the Wild",
	"Twilight Princess",
	"Smash Ultimate",
];

exports.getFavorite = function() {
	var idx = Math.floor(Math.random() * favoriteGames.length);
	return favoriteGames[idx]
};
