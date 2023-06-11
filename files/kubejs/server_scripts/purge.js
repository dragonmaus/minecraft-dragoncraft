// priority: 9

ServerEvents.recipes(event => {
	console.info('Modifying recipes');

	global.remove.recipes.forEach(recipe => event.remove(recipe));
});
