let isMenuOpen = false;
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuCloseIcon = document.getElementById('menu-close-icon');
const mobileMenuOpenIcon = document.getElementById('menu-open-icon');

// Function to toggle the mobile menu
const toggleMenu = () => {
	isMenuOpen = !isMenuOpen;

	document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';

	mobileMenuBtn.classList.toggle('menu-btn-open');
	mobileMenuBtn.classList.toggle('menu-btn-closed');
	mobileMenu.classList.toggle('visible');
	mobileMenu.classList.toggle('hidden');
	mobileMenuCloseIcon.classList.toggle('visible');
	mobileMenuCloseIcon.classList.toggle('hidden');
	mobileMenuOpenIcon.classList.toggle('visible');
	mobileMenuOpenIcon.classList.toggle('hidden');

	document.getElementsByClassName("header-mobile")[0].classList.toggle('bottom-0');
}

// Function to toggle the active smile
function toggleActiveSmile(clickedElement) {
	const smiles = document.getElementsByClassName('smile-img');

	for (const smile of smiles) {
		smile.src = smile.dataset.inactive;
	}

	clickedElement.src = clickedElement.dataset.active;
}

// Switch Reviews
const reviewTitle = document.getElementById('review-title');
const reviewText = document.getElementById('review-text');
const reviewAuthor = document.getElementById('review-author');

const reviews = [
	{
		title: "Perfect kids' party",
		text: `"Craftsvilla's painting party was a hit for my kid's birthday! Engaged kids, friendly staff, clean space. Will definitely recommend!"`,
		author: "- David (with young children)"
	},
	{
		title: "Fun with friends",
		text: `"Mosaic workshop with friends at Craftsvilla was amazing! Great instructor, quality kits, and tons of fun. Highly recommend!"`,
		author: "- Sarah (group outing)"
	},
	{
		title: "Creative team bonding",
		text: `"Our corporate team loved the watercolor workshop at Craftsvilla! Learned new skills, laughed together, and created beautiful art."`,
		author: "- Maria (corporate team)"
	},
];

let currentIndex = 0;
const fadeOutDuration = 500;
const fadeInDuration = 500;
const stayAtFullOpacityDuration = 5000;
const reviewChangeInterval = fadeOutDuration + fadeInDuration + stayAtFullOpacityDuration;

// Function to update the displayed review
function updateReview() {
	const currentReview = reviews[currentIndex];

	reviewTitle.textContent = currentReview.title;
	reviewText.textContent = currentReview.text;
	reviewAuthor.textContent = currentReview.author;

	setTimeout(() => {
		// Fade out
		[reviewTitle, reviewText, reviewAuthor].forEach(element => {
			element.style.transition = `opacity ${fadeOutDuration}ms ease-out`;
			element.style.opacity = 0;
		});
	}, 0);

	setTimeout(() => {
		// Change review
		currentIndex = (currentIndex + 1) % reviews.length;

		// Update text content
		reviewTitle.textContent = reviews[currentIndex].title;
		reviewText.textContent = reviews[currentIndex].text;
		reviewAuthor.textContent = reviews[currentIndex].author;

		setTimeout(() => {
			// Fade in
			[reviewTitle, reviewText, reviewAuthor].forEach(element => {
				element.style.transition = `opacity ${fadeInDuration}ms ease-in`;
				element.style.opacity = 1;
			});
		}, 0);
	}, fadeOutDuration);

	// Repeat the cycle after a duration
	setTimeout(updateReview, reviewChangeInterval);
}

// GALLERY

const galleryContainer = document.getElementById("image");
const imageSources = [
	"./images/Art-1.webp",
	"./images/Art-2.webp",
	"./images/Art-3.webp",
	"./images/namaste-relaxation-class.png",
];
let currentImageIndex = 0;

const nextImage = new Image();
nextImage.src = imageSources[1];

// Function to switch gallery images with opacity transition
function switchImages() {
	galleryContainer.style.transition = "background-image 0.8s ease-in-out";
	galleryContainer.style.backgroundImage = `url(${imageSources[currentImageIndex]})`;
	galleryContainer.style.backgroundSize = "cover";

	setTimeout(() => {
		currentImageIndex = (currentImageIndex + 1) % imageSources.length;
		nextImage.src = imageSources[currentImageIndex];
	}, 800);
}

// Call the switchImages function at intervals
setInterval(switchImages, 5000);

// Initial update
updateReview();
switchImages();
