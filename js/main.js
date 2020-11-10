const init = () => {
  header();
  nav();
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

const nav = () => {
  const nav = document.getElementsByClassName('btn-group-vertical')[0];
  nav.style.flexDirection = 'row';

  const navButtons = nav.querySelectorAll('.btn-secondary');

  navButtons.forEach((btn) => {
    btn.style.margin = '0 4px 0 0';
    btn.style.width = 'fit-content';
    btn.style.borderTopRightRadius = '6px';
    btn.style.borderTopLeftRadius = '6px';
    btn.style.borderBottomRightRadius = '6px';
    btn.style.borderBottomLeftRadius = '6px';
  });
}

window.onload = init();