/*
setInterval(funtion() {
  console.log('time is up');
}, 5000);
*/
setTimeout(function () {
  alert('Please know that this page is\nstill under development')
}, 3000)


function onkey() {
  if (event.key === 'Enter') {
    addSearch();
  }
}


/*function historyHeader() {
  const historyHead = document.querySelector('.js-history-header');
  const inputElement = document.querySelector('.js-search-name');
  let cost = Number(inputElement.value);
  let hist = historyHead.innerHTML;
  
  if (cost === true) {
    console.log(hist);
  } else {hist === 'No previous search'}
}
*/



const searchBar = [];

renderRecord();
historyHeader();

function renderRecord() {
    let searchBarHTML = '';

    for (let i = 0; i < searchBar.length; i++) {
      const sBar = searchBar[i];
      const html = `
        <div>${sBar}</div> 
        <button class="delete-button" onclick="
        searchBar.splice(${i}, 1);
        renderRecord();
        historyHeader();
        ">Clear</button>
      `;
      searchBarHTML += html;  
    }
      
      console.log(searchBarHTML);  
      
      document.querySelector('.js-content')
      .innerHTML = searchBarHTML;
      document.querySelector('.js-sRecord')
  }



function addSearch() {
  const inputElement = document.querySelector('.js-search-name');
  const searchItem = inputElement.value;
  
  searchBar.push(searchItem);
  console.log(searchBar);

  inputElement.value = '';
  renderRecord();
}