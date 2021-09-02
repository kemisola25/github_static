 cardBtnContainer.addEventListener('click', () => {
    alert(name);
});
 function formReset() {
nameInput.value = '';
aboutInput.value = '';
skillsetInput.value = '';
avatarInput.value = '';
}
submitButton.addEventListener('click', (e) => {
const name = nameInput.value;
const about = aboutInput.value;
const skills = skillsetInput.value;
const avatar = avatarInput.value;

let traineeObject = {name:name, about:about, skills:skills, avatar:avatar}
traineeArray.push(traineeObject);
// console.log(traineeObject);
createCard(name, about, skills, avatar);
formReset();

e.preventDefault();
});