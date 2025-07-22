import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app');

/* theme */

let currentTheme = localStorage.getItem('theme') || 'default';
let themes = document.querySelectorAll('.theme-controller');

themes.forEach((t) => {
  t.addEventListener('click', e => {
    e.preventDefault();
    console.log(t);
    setAppTheme(t.value);
  });
})

setAppTheme(currentTheme);
function setAppTheme(currentTheme) {
  localStorage.setItem('theme', currentTheme);
  document.querySelector('html').dataset.theme = currentTheme;
  const capitalizedCurrentTheme = currentTheme.charAt(0).toLocaleUpperCase() + currentTheme.slice(1);
  document.querySelector('#theme-name').textContent = `Theme: ${capitalizedCurrentTheme}`;
}

setAppTheme(currentTheme);