// Structure
// ------------------------------------------------
var gallery = document.querySelector(".gallery");
var dropdown = document.querySelector('.dropdown');
var menu = document.querySelector('.menu');



// Setup
// ------------------------------------------------
var todoList = {
	tasks: []
};


// Events
// ------------------------------------------------
window.addEventListener("load", reloadPage);
dropdown.addEventListener('click', showDropdown);
menu.addEventListener('click', showMenu);


// Event Handlers
// ------------------------------------------------
//rebuild the todo list with page is reloaded
function reloadPage(e) {
	refreshGallery();
}


// Update Page
// ------------------------------------------------

//creates entire todo list from json data
function refreshGallery(){
	//clears out the list
	gallery.innerHTML = "";
	//adds one new task for each item in the array
	archspark.posts.forEach(createPost);
}

//show dropdown
function showDropdown() {
	dropdown.classList.toggle('dropdown-close');
}
//show menu
function showMenu() {
	menu.classList.toggle('menu-close');
}


//create one li on the page from a task object
function createPost(post) {
	console.log(post);



// 1. Create Markup
	var li = document.createElement("li");
	var template = 
		'<img class="image" src="' + post.image + '">' +
		'<div class="card">' +
			'<div class="card-header">' +
      			'<img src="' + post.logo + '" class="logo">' +
      				'<div class="card-title">' +
      					'<h3 class="title">' + post.title + '</h3>' +
						'<p class="date">' + post.date + '</p>' +
					'</div>' +
      		'</div>' +
      		'<p class="summary">' + post.summary + '</p>' +
      		'<div class="card-footer">' +
      			'<img src="img/icons/heart.svg" class="heart">' +
      			'<img src="img/icons/share.svg" class="share">' +
      		'</div>' +
      	'</div>'
    ;


	
// 2. Bedazzle Markup (add attributes and content)
	// img.setAttribute("src", post.image);



// 3. Append new elements to DOM tree
	li.innerHTML = template;
	gallery.appendChild(li);
}



