// 사용자 권한 등록 모달
const authorRegisterShowDialogButton = document.getElementById(
  'authorRegisterShowDialogButton',
);
const authorRegisterDialog = document.getElementById('authorRegisterDialog');
authorRegisterShowDialogButton.addEventListener('click', () => {
  authorRegisterDialog.showModal();
});
