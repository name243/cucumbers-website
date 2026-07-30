// script.js — вся логика бургер-меню и переключения рецептов

document.addEventListener('DOMContentLoaded', function() {
  // Элементы
  const burgerBtn = document.getElementById('burgerBtn');
  const menuOverlay = document.getElementById('menuOverlay');
  const menuItems = document.querySelectorAll('.menu-overlay li');
  const recipeContents = document.querySelectorAll('.recipe-content');

  // ----- Открыть/закрыть меню по клику на бургер -----
  burgerBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    burgerBtn.classList.toggle('open');
    menuOverlay.classList.toggle('open');
  });

  // ----- Переключение рецептов по клику на пункт меню -----
  menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.stopPropagation();
      const recipeId = this.dataset.recipe;

      // Скрыть все рецепты
      recipeContents.forEach(content => {
        content.classList.add('hidden');
      });

      // Показать выбранный
      const target = document.getElementById(recipeId);
      if (target) {
        target.classList.remove('hidden');
      }

      // Обновить активный пункт меню
      menuItems.forEach(li => li.classList.remove('active-recipe'));
      this.classList.add('active-recipe');

      // Закрыть меню
      burgerBtn.classList.remove('open');
      menuOverlay.classList.remove('open');
    });
  });

  // ----- Закрывать меню при клике вне карточки -----
  const card = document.getElementById('app');
  document.addEventListener('click', function(e) {
    if (!card.contains(e.target)) {
      burgerBtn.classList.remove('open');
      menuOverlay.classList.remove('open');
    }
  });

  // ----- Предотвращаем закрытие при клике внутри меню -----
  menuOverlay.addEventListener('click', function(e) {
    e.stopPropagation();
  });
});