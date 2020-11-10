const init = () => {
  header();
  nav();
  cards();
  list();
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


const cards = () => {
  const cardsContainer = document.getElementsByClassName('row')[2];
  cardsContainer.style.display = 'flex';
  cardsContainer.style.flexDirection = 'row';
  
  cardsContainer.querySelector('.col-lg-3:nth-child(2)').style.order = 2;
  cardsContainer.querySelector('.col-lg-3:nth-child(2) .btn-primary').style.border = "none";
  cardsContainer.querySelector('.col-lg-3:nth-child(2) .btn-primary').style.backgroundColor = "#26a944";
  cardsContainer.querySelector('.col-lg-3:nth-child(3)').style.order = 4;
  cardsContainer.querySelector('.col-lg-3:nth-child(4)').style.order = 3;
  cardsContainer.querySelector('.col-lg-3:nth-child(5)').style.order = 1;
}

const list = () => {
  const items = 5;

  const listGroup = document.getElementsByClassName('list-group')[0];
  const listItems = listGroup.querySelectorAll('.list-group-item');
  
  for (let i = listItems.length; i <= items; i++) {
    const itemTemplate = listGroup.querySelectorAll('.list-group-item')[0].cloneNode(true);

    if (i > 3) {
      listGroup.appendChild(itemTemplate);
      
      if (i === 4) {
        textContent = 'Quarto item';
      }

      if (i === 5) {
        textContent = 'Quinto item';
      }

      listGroup.querySelectorAll('.list-group-item')[i - 1].style.backgroundColor = '#fff';
      listGroup.querySelectorAll('.list-group-item')[i - 1].style.border = '1px solid rgba(0, 0, 0, 0.125)';
      listGroup.querySelectorAll('.list-group-item')[i - 1].style.color = '#000';
      listGroup.querySelectorAll('.list-group-item')[i - 1].classList.remove('active');
      listGroup.querySelectorAll('.list-group-item')[i - 1].innerHTML = textContent;
    }
  }

  const listItemsUpdated = listGroup.querySelectorAll('.list-group-item');

  listItemsUpdated.forEach((item, index) => {
    item.addEventListener('click', () => {
      
      listItemsUpdated.forEach((item) => {
        if (item.classList.contains('active')) {
          item.style.backgroundColor = '#fff';
          item.classList.remove('active');
          item.style.color = '#000';
        }
      });

      item.classList.add('active');
      item.style.color = '#fff';
      item.style.backgroundColor = '#037afe';
    });

    if (item.classList.contains('active')) {
      item.style.background = '#037afe';
      item.style.color = '#fff';
    }
  })
}

window.onload = init();