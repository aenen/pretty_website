(function ($) {
	var settings = {
		fps: 60,
		speed: 4,
		gravity: 0.3
	};

	function onClick(e) {
		if ($(this).hasClass("gravity-fall")) {
			return false;
		}

		var speed = settings.speed;
		var pos = $(this).offset();
		$(this).appendTo($("body")).css("position", "relative").offset(pos);
		$(this).addClass("gravity-fall");
		var self = this;
		var timerFall = setInterval(function () {
			var bodyHeight = $("body").outerHeight();
			var elBottom = $(self).offset().top + $(self).outerHeight();

			if (speed + settings.gravity < 30) {
				speed += settings.gravity;
			}
			if (elBottom + speed > bodyHeight) {
				clearInterval(timerFall);
				return true;
			}

			var newtop = $(self).offset().top + speed;
			$(self).offset({
				top: newtop,
				left: pos.left
			});
		}, 1000 / settings.fps);
	}

	$.fn.gravity = function () {
		this.click(onClick);
	};
})(jQuery);
