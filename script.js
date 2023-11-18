// Цель: Разработать веб-приложение, которое каждый день будет отображать новое случайное изображение из коллекции Unsplash, давая пользователю возможность узнать больше о фотографе и сделать "лайк" изображению.

// Регистрация на Unsplash:

// • Перейдите на веб-сайт Unsplash (https://unsplash.com/).
// • Зарегистрируйтесь или войдите в свой аккаунт. (если у вас не было регистрации до этого, новый аккаунт создавать не нужно).

// Создание приложения:

// • Перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
// • Нажмите "New Application".
// • Заполните необходимую информацию о приложении (можете использовать http://localhost для тестирования).
// • Получите свой API-ключ после создания приложения.

// Разработка веб-приложения:

// • Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк", при нажатии на которую подсвечивается "лайкнутый" элемент

async function getPhoto() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=SIk2MlRHyKUCwevxZ2Ahdzx5xa-m0QAsNgXSjkjk9XM`
    );
    const photo = await response.json();
    console.log(photo);
    return photo;
  } catch (error) {
    console.error("Ошибка при загрузке фотографий:", error);
    return {};
  }
}

async function showPhoto() {
  const photo = await getPhoto();
  if (photo) {
    const imageBoxEL = document.querySelector(".image-box");
    const imgEl = document.createElement("img");
    imgEl.classList.add("image");

    imgEl.src = photo.urls.small;
    imgEl.alt = photo.alt_description;
    imageBoxEL.appendChild(imgEl);

    const authorEl = document.querySelector(".author");
    authorEl.textContent = `Author: ${photo.user.name}`;
  }
}

const buttonEl = document.querySelector(".button");
const likeSignEl = document.querySelector(".like-sign");
buttonEl.addEventListener("click", function () {
  likeSignEl.style.display = "block";
});

showPhoto();
