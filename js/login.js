// 매체 추가 모달
const registerConFirmShowDialogButton = document.getElementById(
  'registerConFirmShowDialogButton',
);

const registerConfirmDialog = document.getElementById('registerConfirmDialog');

registerConFirmShowDialogButton.addEventListener('click', () => {
  registerConfirmDialog.showModal();
});
