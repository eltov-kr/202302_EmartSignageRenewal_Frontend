// 매체 추가 모달
const mediaAddShowDialogButton = document.getElementById(
  'adDetailMediaAddShowDialogButton',
);
const mediaAddDialog = document.getElementById('adDetailMediaAddDialog');

mediaAddShowDialogButton.addEventListener('click', () => {
  mediaAddDialog.showModal();
});
