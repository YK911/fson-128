// openModalBtn.onclick = () => {
//   modal.showModal();
// };

// closeModalBtn.onclick = () => {
//   modal.close();
// };

// console.log("🚀 ~ document.forms:", document.forms);

const { feedback } = document.forms;

console.log("🚀 ~ feedback:", feedback);

feedback.onsubmit = event => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(event.target));

  console.log("🚀 ~ formData:", formData);
  event.target.reset();
};
