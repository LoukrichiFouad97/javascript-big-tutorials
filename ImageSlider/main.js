// Get the Images
let sliderImages = Array.from(
	document.querySelectorAll(".slider-container img")
);

// Get the number if images
const numberOfImages = sliderImages.length; // 6

// Set the current slide number
let currentSlide = 1; // Dynamic number

// Get the DOM vars
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");



// Create the ul
const ul = document.createElement("ul");
ul.setAttribute("id", "indicators-ul");

// create the li
for (let listItem = 1; listItem <= numberOfImages; listItem++) {
	// create li & set id and text to it
	let li = document.createElement("li");
	li.setAttribute("data-numberOfSlide", listItem);
	li.appendChild(document.createTextNode(listItem));

	// Add li to ul
	ul.appendChild(li);
}

// add the ul to the page
let UISliderIndicator = document.getElementById("indicators");
UISliderIndicator.append(ul);

// previous slider function
const prevSlider = () => {
	if (currentSlide > 1) {
		currentSlide--;
	}
	currentSlider();
}

// next slider function
const  nextSlider = () => {
	if (currentSlide < numberOfImages) {
		currentSlide++;
	}
	currentSlider();
}

// handle click event
nextButton.addEventListener("click", nextSlider);
prevButton.addEventListener("click", prevSlider);

// get the top left slider indicator
const sliderIndicator = document.getElementById("slide-number");

// current slide
function currentSlider() {
	sliderIndicator.textContent = `Slide #${currentSlide} of ${numberOfImages}`;

	removeActiveClass();

	// set active class on active slide
	sliderImages[currentSlide - 1].classList.add("active");

	// Set active class on slider number indicators
	ul.children[currentSlide - 1].classList.add("active");
}

let removeActiveUl = Array.from(ul.children);

// Go to slide image by its number
for (let li = 0; li < removeActiveUl.length; li += 1) {
	removeActiveUl[li].addEventListener("click", function goToSlider() {
		currentSlide = Number(this.textContent);
		currentSlider();
	});
}

currentSlider();

// remove all active classes
function removeActiveClass() {
	// remove from all the images
	sliderImages.forEach(function RemoveImageActive(img) {
		img.classList.remove("active");
	});

	// remove from the slider number indicators
	removeActiveUl.forEach(x => {
		x.classList.remove("active");
	});

	// activate disabled button at the start & the end
	if (currentSlide == 1) {
		prevButton.classList.add("disabled");
	} else if (currentSlide == numberOfImages) {
		nextButton.classList.add("disabled");
	} else {
		prevButton.classList.remove("disabled");
		nextButton.classList.remove("disabled");
	}
}
