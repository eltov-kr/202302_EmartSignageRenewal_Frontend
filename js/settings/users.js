// 사용자 계정 수정 모달
const userEditShowDialogButton = document.getElementById(
  'userEditShowDialogButton',
);
const userEditDialog = document.getElementById('userEditDialog');
userEditShowDialogButton.addEventListener('click', () => {
  userEditDialog.showModal();
});
