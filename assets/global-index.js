(function() {
	jQuery(function() {
		return $(window).scroll(function() {
			var a, b;
			a = $(window).scrollTop();
			b = $("article").offset().top;
			return a >= b ? $(".addthis_toolbox").addClass("affix") : $(".addthis_toolbox").removeClass("affix")
		})
	})
}).call(this);
