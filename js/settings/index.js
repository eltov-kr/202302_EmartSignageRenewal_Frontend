// 점포 정보 확인 모달
const storeInfoShowDialogButton = document.getElementById(
  'storeInfoShowDialogButton',
);
const storeInfoDialog = document.getElementById('storeInfoDialog');
storeInfoShowDialogButton.addEventListener('click', () => {
  storeInfoDialog.showModal();
});
