import './scss/main.scss';

// Local components
function component() {
  const element = document.createElement('div');
  element.innerHTML = ['vite', 'scss', 'eslint', 'stylelint'].join(' &bull; ');

  return element;
}

document.querySelector('.content').appendChild(component());
