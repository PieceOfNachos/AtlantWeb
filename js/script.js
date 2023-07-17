$(document).ready(function () {
	$('.nav__burger').click(function () {
		$('.nav__burger,.nav__list').toggleClass('pressed');
		$('body').toggleClass('lock');
	});
});
$(document).ready(function () {
	$('.nav__link').click(function () {
		$('.nav__burger,.nav__list').removeClass('pressed');
		$('body').removeClass('lock');
	});
});
$(document).ready(function () {
	$('.plus__btn').click(function(){
		$('.questions__item > .questions__answer').toggleClass("visible");
	});
});
$(document).ready(function () {
	$('.plus__btn').on('click', function() {
	  var progress = $(this).attr('data-progress');
	  console.log(progress);
	  if(progress == [1, 2]){
		$('.questions__item > .questions__answer').toggleClass("visible");
	  }
	  
	});
  });
		


$(function() {
    var $ratings = $('#rating-js, #rating-half-js'),
        changeCurrentRating = function () {
            /* var newValue = Math.floor(Math.random() * 100) + '%',
                $valueContainer = $ratings.next('p.current-value');
            $('li.current', $ratings).children().width(newValue);

            if ($valueContainer.length > 0) {
                $valueContainer.text(newValue);
            } else {
                $ratings.after($('<p/>', {
                    'class': 'current-value',
                    'text': newValue
                }));
            }

            setTimeout(changeCurrentRating, 3000); */
			 
        };


    setTimeout(changeCurrentRating, 3000);

    $ratings.on('mouseover', function() {
        $(this).removeClass('show-current');
    }).on('mouseleave', function() {
        $(this).addClass('show-current');
    });
	var k = $('li', $ratings);
	for(var i = 0; i < k.length; i++)
		 k[i].onclick = function (){
			   console.log(this.innerHTML);
			   rate = this.innerHTML;
			   $.ajax({
				url: 'base.php',
				type: 'POST',
				data: rate,
				success: function(data){
				 $('p.out').rate(data);
			   },
				error: function(){
				console.log('ERROR');
				}
			 })
			}
    $('li', $ratings).on('click', function() {
        alert('Спасибо за вашу оценку!');

    });
});