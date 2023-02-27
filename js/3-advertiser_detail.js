const mediaAddShowDialogButton = document.getElementById(
  'adDetailMediaAddShowDialogButton',
);
const mediaAddDialog = document.getElementById('adDetailMediaAddDialog');

mediaAddShowDialogButton.addEventListener('click', () => {
  mediaAddDialog.showModal();
});
