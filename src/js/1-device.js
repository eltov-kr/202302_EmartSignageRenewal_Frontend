const storeTab = document.getElementById('tabs-store-tab');
const storeTable = document.getElementById('table-store');
const mediaTab = document.getElementById('tabs-media-tab');
const mediaTable = document.getElementById('table-media');

mediaTable.classList.add('hidden');

storeTab.addEventListener('click', () => {
  storeTable.classList.remove('hidden');
  mediaTable.classList.add('hidden');
});

mediaTab.addEventListener('click', () => {
  mediaTable.classList.remove('hidden');
  storeTable.classList.add('hidden');
});
