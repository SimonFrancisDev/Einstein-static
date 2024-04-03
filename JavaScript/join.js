// Function to handle form submission
document.getElementById('joinForm').addEventListener('submit', function(event) {
event.preventDefault(); // Prevent default form submission

  // Get form values
  var name = document.getElementById('nameInput').value;
  var target = document.getElementById('targetInput').value;
  var socialMedia = document.getElementById('socialMediaInput').value;
  var selectedOption = document.getElementById('selectInput').value;
  let imageFile = document.getElementById('imageInput').files[0]; // Only first file if multiple files are allowed

  // Create object to store form data
  var formData = {
    name: name,
    target: target,
    socialMedia: socialMedia,
    selectedOption: selectedOption,
    image: imageFile ? URL.createObjectURL(imageFile) : null // Convert image to URL if exists
  };

  // Get existing data from local storage
  var existingData = JSON.parse(localStorage.getItem('formDataArray')) || [];

  // Add new form data to existing data
  existingData.push(formData);


  // Store updated data in local storage
  localStorage.setItem('formDataArray', JSON.stringify(existingData));
});

// Function to display submitted data
// function displayData() {
//   var outputDiv = document.getElementById('output');
//   outputDiv.innerHTML = ''; // Clear previous content

//   // Get data from local storage
//   var formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];

//   // Loop through each form data and display it
//   formDataArray.forEach(function(formData, index) {
//     var div = document.createElement('div');
//     div.classList.add('details-container')
//     div.innerHTML = 
//                   '<p class="name">Name: ' + formData.name + '</p>' +
//                   '<p class="objective">Target: ' + formData.target + '</p>' +
//                   '<p class="media">Media: ' + formData.socialMedia + '</p>' +
//                   '<p class="area">p.language: ' + formData.selectedOption + '</p>' +
//                   '<button class="delete-todo-button js-leave-button">Leave</button>'

//     if (formData.image) {
//       var img = document.createElement('img');
//       img.classList.add('image');
//       img.src = formData.image;
//       img.style.maxWidth = '200px'; // Limit image width for better layout
//       div.appendChild(img);
//     }
//     outputDiv.appendChild(div);
//   });
// }

// Display submitted data when page is loaded
//displayData();

//eneabling the change function
//let profilePics = document.getElementById('profile-pic');
//let imageInput = document.getElementById('imageInput');
//imageInput.onchange = function() {
 // profilePics.src = URL.createObjectURL(imageInput.files[0]);
//}
let outDiv = document.getElementById('output')
let meetBtn =  document.querySelector('.meet-btn')
meetBtn.addEventListener('click', ()=> {
if(meetBtn.innerHTML === 'Meet The Crew') { 
outDiv.style.display = 'block';
meetBtn.innerHTML = 'Close Community'
} else if(meetBtn.innerHTML === 'Close Community') {
meetBtn.innerHTML = 'Meet The Crew';
outDiv.style.display = 'none';
}
})
