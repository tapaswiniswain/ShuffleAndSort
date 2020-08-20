(function () {
	var buttonShuffle = document.querySelector('#shuffle');
	var buttonSort = document.querySelector('#sort');
	var parent = document.getElementById("doShuffle");

	buttonShuffle.addEventListener('click', function () {
		var frag = document.createDocumentFragment();
		while (parent.children.length) {
			frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
		}
		parent.appendChild(frag);
	}, false);


	buttonSort.addEventListener('click', function () {

		var elems = document.getElementsByClassName("card");
		var array = [];
		for (var i = elems.length >>> 0; i--;) {
			array[i] = elems[i];
		}

		array.sort(function (a, b) {
			return Number(a.innerHTML) - Number(b.innerHTML);
		});

		var output = "";
		for (var i = 0; i < array.length; i++) {
			output += array[i].outerHTML;
		}
		parent.innerHTML = output;

	}, false);
})();
