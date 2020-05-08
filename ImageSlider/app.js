// get the slider images
var sliderImages = Array.from(
	document.querySelectorAll(".slider-container img")
);

// Get the number of slides
var slidesCount = sliderImages.length;

// Set the current slide number
var CurrentSlide = 1;

// Get Slider Controls
var slideNumber = document.getElementById("slide-number");
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");

// Handle previous & next click button
prevButton.addEventListener("click", previousSlide);
nextButton.addEventListener("click", nextSlide);

// Create The Main ul 
var paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");

// create & add list items to ul
for (var listItem = 1; listItem <= slidesCount; listItem++) {
	var paginationItems = document.createElement("li");

	// store li value in custome attributes
	paginationItems.setAttribute("data-store", listItem);
	// print data-store value in li UI
	paginationItems.appendChild(document.createTextNode(listItem));

	// add li to the main ul
	paginationElement.appendChild(paginationItems);
}

// add the ul to the main page
var indicators = document.getElementById("indicators");
indicators.appendChild(paginationElement);

// Get the created ul
var createdUL = document.getElementById("pagination-ul");
var paginationListItems = Array.from(
	document.querySelectorAll("#pagination-ul li")
);

// move through li pagination
for (var i = 0; i < paginationListItems.length; i++) {
	paginationListItems[i].addEventListener("click", function() {
		CurrentSlide = parseInt(this.getAttribute("data-store"));
		checker();
	});
}
// trigger the checker function
checker();

// Previous function slide
function previousSlide() {
	// check if current slide is the last
	if (prevButton.classList.contains("disabled")) {
		// do nothing
		return;
	} else {
		CurrentSlide--;
		checker();
	}
}

// Next function slide
function nextSlide() {
	if (nextButton.classList.contains("disabled")) {
		return;
	} else {
		CurrentSlide++;
		checker();
	}
}

// create the checker function
function checker() {
	// print the slide number
	slideNumber.textContent = "slide #" + CurrentSlide + " of " + slidesCount;

	removeActiveClass();

	// add active class on images
	sliderImages[CurrentSlide - 1].classList.add("active");
	
	// add active class on list items
	createdUL.children[CurrentSlide - 1].classList.add("active");
}

// remove active class
function removeActiveClass() {
	// remove active class from all images
	sliderImages.forEach(function(img) {
		img.classList.remove("active");
	});

	// remove active class from all pagination numbers
	paginationListItems.forEach(function(item) {
		item.classList.remove("active");
	});

	// check if current slide is the first
	if (CurrentSlide === 1) {
		prevButton.classList.add("disabled");
	} else {
		prevButton.classList.remove("disabled");
	}

	// check if the current slide is the last one
	if (CurrentSlide === slidesCount) {
		nextButton.classList.add("disabled");
	} else {
		nextButton.classList.remove("disabled");
	}
}
