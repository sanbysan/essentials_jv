var element = document.getElementById('content');

function dropdownStyles(select) {
	var style = select.dataset.cssproperty;
	var value = select.value;
	element.style[style] = value;
}

function onWrapperClick(event) {
	var target = event.target;
	if(target.tagName == "SELECT") {
		dropdownStyles(target);
	}
}

var wrapper = document.getElementById("wrapper");
wrapper.addEventListener('change', onWrapperClick);


