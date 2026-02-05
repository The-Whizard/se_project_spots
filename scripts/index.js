// edit profile
const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button",
);
// edit profile form submission
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input",
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input",
);
// profile name/description
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");
// new post
const newPostButton = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");
// new post form submission
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostImageInput = newPostModal.querySelector("#card-image-input");
const newPostCaptionInput = newPostModal.querySelector("#card-caption-input");
// function to open/close modal
function openModal(modal) {
  modal.classList.add("modal_is-opened");
}
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}
// updates value
editProfileButton.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
});

editProfileCloseButton.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newPostButton.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseButton.addEventListener("click", function () {
  closeModal(newPostModal);
});
// edit profile form submission handler
function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  // updates textContent
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}
// edit profile form submit listener
editProfileForm.addEventListener("submit", handleEditProfileSubmit);
// new post form submission handler
function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log(newPostImageInput.value, newPostCaptionInput.value);
  closeModal(newPostModal);
}
// new post form submit listener
newPostForm.addEventListener("submit", handleNewPostSubmit);
