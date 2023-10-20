const signInForm = document.querySelector(".signInForm");
const signUpForm = document.querySelector(".signUpForm");
const infoOrErrorNotice = document.querySelector(".infoOrErrorNotice");
const dotsList = document.querySelector(".dots__list");

const nextButton = document.querySelector(".nextButton");
const backButton = document.querySelector(".backButton");

const signUpFormTitle = document.querySelector(".signUpForm__title");

const emailSignIn = document.getElementById("email");
const passwordSignIn = document.getElementById("password");
const emailSignUp = document.getElementById("signUpEmail");
const locationSignUp = document.getElementById("location");
const passwordSignUp = document.getElementById("signUpPassword");

const emailErrorSignIn = document.querySelector(".email-error");
const passwordErrorSignIn = document.querySelector(".password-error");

const listOfInputs = [...signUpForm.children].slice(
  1,
  signUpForm.children.length
);
const listOfDots = [...dotsList.children];

let step = 0;

const titleInput = {
  0: "Who are you",
  1: "What is your age",
  2: "I am from",
  3: "Your email adress",
  4: "Create your password",
};

const notice = {
  0: "",
  1: "",
  2: "E.g.: New Roads or 70760 We don’t use postal addresses to contact members directly!",
  3: "",
  4:
    'By clicking the button above you agree to our <a href="#">Terms of Use</a>' +
    '<a href="#">Privacy Policy</a> including use of cookies and to receive newsletters, account updates and offers sent by StarCompany.',
};

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailRegex.test(email);
}

function isValidPassword(password) {
  return password.length >= 4;
}

signInForm.addEventListener("submit", function (event) {
  emailErrorSignIn.style.display = "none";
  passwordErrorSignIn.style.display = "none";

  if (!isValidEmail(emailSignIn.value)) {
    emailErrorSignIn.style.display = "flex";
    event.preventDefault();
  }

  if (!isValidPassword(passwordSignIn.value)) {
    passwordErrorSignIn.style.display = "block";
    event.preventDefault();
  }
});

const activeStep = (countOfStep, array) => {
  array.forEach((el) => el.classList.remove("active-step"));

  for (let i = 0; i <= countOfStep; i++) {
    array[i].classList.add("active-step");
  }
};

const finalStep = () => {
  nextButton.classList.add("startButton");
  nextButton.innerHTML =
    'Start now <img src="/star_company/img/svg/start.svg" alt="arrow" />';
};

nextButton.addEventListener("click", () => {
  if (step === 5) {
    return;
  }

  if (step === 2) {
    if (locationSignUp.value.trim().length <= 3) {
      infoOrErrorNotice.textContent = "Please enter a valid address";
      infoOrErrorNotice.classList.add("hasError");
      return;
    }
  }

  if (step === 3) {
    if (!isValidEmail(emailSignUp.value)) {
      infoOrErrorNotice.textContent = "Please enter a valid email addres";
      infoOrErrorNotice.classList.add("hasError");
      return;
    }

    finalStep();
  }

  if (step === 4) {
    if (passwordSignUp.value.trim().length <= 4) {
      infoOrErrorNotice.textContent = "Please enter a valid password";
      infoOrErrorNotice.classList.add("hasError");
      return;
    }

    signUpForm.submit();
    return;
  }

  step++;
  activeStep(step, listOfDots);

  step > 4
    ? (infoOrErrorNotice.textContent = notice[step])
    : (infoOrErrorNotice.innerHTML = notice[step]);

  signUpFormTitle.textContent = titleInput[step];
  listOfInputs.forEach((el) => el.classList.remove("active"));
  listOfInputs[step].classList.add("active");
});

backButton.addEventListener("click", () => {
  if (step === 0) {
    return;
  }

  if (step === 4) {
    nextButton.classList.remove("startButton");
    nextButton.innerHTML =
    'Next step <img src="/star_company/img/svg/arrow_hover.svg" alt="arrow" />';
  }

  infoOrErrorNotice.classList.remove("hasError");

  step--;
  activeStep(step, listOfDots);
  infoOrErrorNotice.textContent = notice[step];
  signUpFormTitle.textContent = titleInput[step];
  listOfInputs.forEach((el) => el.classList.remove("active"));
  listOfInputs[step].classList.add("active");
});

emailSignUp.addEventListener("focus", () => {
  infoOrErrorNotice.classList.remove("hasError");
  infoOrErrorNotice.textContent = notice[step];
});

locationSignUp.addEventListener("focus", () => {
  infoOrErrorNotice.classList.remove("hasError");
  infoOrErrorNotice.textContent = notice[step];
});

passwordSignUp.addEventListener("focus", () => {
  infoOrErrorNotice.classList.remove("hasError");
  infoOrErrorNotice.textContent = notice[step];
});
