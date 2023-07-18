const userForm = document.getElementById("userForm");
const message = document.querySelector(".msg");
const userPhoto = document.querySelector("#userPhoto");
const galPhoto = document.querySelector("#galleryPhoto");
const photoPrev = document.querySelector("#photoPreview");
const profilePhoto = document.querySelector(".profile-photo");
const galleryPhoto = document.querySelector(".gallery-photo");

// User Form Submit

userForm.onsubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  // Validation
  if (!data.name || !data.email || !data.mobile) {
    message.innerHTML = createAlert("All Fields Are Required.");
  } else if (!isEmail(data.email)) {
    message.innerHTML = createAlert("Invalid Email Address", "warning");
  } else if (!isMobile(data.mobile)) {
    message.innerHTML = createAlert("Invalid phone Address", "info");
  } else {
    message.innerHTML = createAlert("Information Saved", "success");
  }
};

// User Photo Preview
userPhoto.onchange = (e) => {
  const imageUrl = URL.createObjectURL(e.target.files[0]);
  profilePhoto.innerHTML = `<img src="${imageUrl}" alt="" style="width: 100px; height: 100px" />`;
};

// User Photo Preview
galPhoto.onchange = (e) => {
  for (let i = 0; i < e.target.files.length; i++) {
    const imgUrl = URL.createObjectURL(e.target.files[i]);
    galleryPhoto.innerHTML += `<img src="${imgUrl}" alt="" style="width:100px; height:100px; margin: 5px;" />
  `;
  }
};
// Delete Functions
function deletePhoto(index) {
  const images = galleryPhoto.getElementsByTagName("img");
  if (index >= 0 && index < images.length) {
    images[index].remove();
  }
}
