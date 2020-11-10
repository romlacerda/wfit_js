const init = () => {
  header();
}

const header = () => {
  const jumbotron = document.getElementsByClassName('jumbotron')[0]
  jumbotron.style.backgroundColor = '#6b767d';
  jumbotron.style.color = '#fff';
  jumbotron.style.textAlign = 'right';

  const btn = jumbotron.getElementsByClassName('btn-primary')[0];
  btn.style.backgroundColor = '#26a944';
  btn.style.border = 'none';
}

window.onload = init();