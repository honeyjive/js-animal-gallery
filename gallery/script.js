// Add your code here


//attach a click listener on each button
// $('#monkey').on('click', function() {
// 	//grab and hide all the monkeys
// 		//check if monkeys are hidden
// 			//if so, show the monkeys
// 	$('.monkey').hide();
// });

$('.filter-button').on('click', function (){
	$('.' + this.id).toggle();
	$('#' + this.id).toggleClass('active');
});

// alertify