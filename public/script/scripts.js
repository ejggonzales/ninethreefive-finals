// START SEARCH ICON
function openSearch() {
  document.getElementById("search-overlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("search-overlay").style.display = "none";
}
// END SEARCH ICON

// START POPULAR NOW

function imgSlider(anything) {
  document.querySelector('#mainBagProdImg').src = anything;
}

// END POPULAR NOW

// START PRODUCT FILTERING
const filterButtons = document.querySelectorAll('.filter-button-group button');
const filterableProducts = document.querySelectorAll('.collection-list .filterProd');

const filterProducts = e => {
  document.querySelector('.active-filter-btn').classList.remove('active-filter-btn');
  e.target.classList.add('active-filter-btn');

  filterableProducts.forEach(filterProd => {
    filterProd.classList.add("hide");

    if(filterProd.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
      filterProd.classList.remove("hide");
    }
  })
}

filterButtons.forEach(button => button.addEventListener('click', filterProducts));

// END PRODUCT FILTERING

// START PRODUCT SEARCH

function search() {
  const filter = document.getElementById('find').value.toUpperCase();
  const item = document.getElementById('collection-list');
  const cards = item.getElementsByClassName('card-prod');

  for(var i = 0; i <= cards.length; i++) {
    let title = cards[i].querySelector('.card-body h5.card-title')

    if(title.innerHTML.toUpperCase().indexOf(filter) > -1) {
      cards[i].parentElement.style.display = "";
    } else {
      cards[i].parentElement.style.display = "none";
    }
  }
}
// END PRODUCT SEARCH

// START CUSTOMERLIST SEARCH
function userSearch() {
  const filter = document.getElementById('find').value.toUpperCase();
  const table = document.getElementsByTagName('table')[0];
  const table_row = document.getElementsByTagName('tr');

  // loop through all rows
  for(var i = 0; i < table_row.length; i++) {
    // target names on index 1
    let name_row = table_row[i].getElementsByTagName('td')[1];
    // get inner text
    if(name_row) {
      var name = name_row.textContent || td.innerText;
      if(name_row.innerHTML.toUpperCase().indexOf(filter) > -1) {
        table_row[i].style.display = '';
      } else {
        table_row[i].style.display = 'none';
      }
    }
  }
}

// END CUSTOMERLIST SEARCH

// START CUSTOMER MESSAGE SEARCH
function usermsgSearch() {
  const filter = document.getElementById('find').value.toUpperCase();
  const table = document.getElementsByTagName('table')[0];
  const table_row = document.getElementsByTagName('tr');

  // loop through all rows
  for(var i = 0; i < table_row.length; i++) {
    // console.log(table_row)
    // target names on index 1
    let name_row = table_row[i].getElementsByTagName('td')[1];
    console.log(name_row)
    // get inner text
    if(name_row) {
      var name = name_row.textContent || td.innerText;
      if(name_row.innerHTML.toUpperCase().indexOf(filter) > -1) {
        table_row[i].style.display = '';
      } else {
        table_row[i].style.display = 'none';
      }
    }
  }
}

// END CUSTOMER MESSAGE SEARCH


// START RATING
const allBag = document.querySelectorAll('.rating .bag-icon');
const ratingValue = document.querySelector('.rating input');

allBag.forEach((item, idx) => {
    item.addEventListener('click', function () {
        let click = 0
        ratingValue.value = idx + 1;
        console.log(ratingValue.value)

        allBag.forEach(i => {
            i.classList.replace('bxs-shopping-bag', 'bx-shopping-bag')
            i.classList.remove('active')
        })
        for(let i = 0; i < allBag.length; i++) {
            if(i <= idx) {
                allBag[i].classList.replace('bx-shopping-bag', 'bxs-shopping-bag')
                allBag[i].classList.add('active')
            } else {
                allBag[i].style.setProperty('--i', click)
                click++ 
            }
        }
    })
})

// END RATING
