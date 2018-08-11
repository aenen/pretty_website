(function ($) {
	var settings = {
		fps: 60,
		speed: 5,
		gravity: 0.5
	};

	function onClick(e) {
		if ($(this).hasClass("gravity-fall")) {
			return false;
		}

		var speed = settings.speed;
		var pos = $(this).offset();
		$(this).appendTo($("body")).css("position", "absolute").offset(pos);
		$(this).addClass("gravity-fall");
		var self = this;
		var timerFall = setInterval(function () {
			var bodyHeight = $("body").outerHeight();
			var elBottom = $(self).position().top + $(self).outerHeight();

			if (speed + settings.gravity < 40) {
				speed += settings.gravity;
			}
			if (elBottom + speed > bodyHeight) {
				var newtop = $(self).offset().top + (bodyHeight - elBottom);
				$(self).offset({
					top: newtop
				});
				clearInterval(timerFall);
				return true;
			}
			var newtop = $(self).offset().top + speed;
			$(self).offset({
				top: newtop
			});
		}, 1000 / settings.fps);
	}

	$.fn.gravity = function () {
		this.click(onClick);
	};
})(jQuery);
