// 점포검색 모달
const branchSearchShowDialogButton = document.getElementById(
  'branchSearchShowDialogButton',
);
const branchSearchDialog = document.getElementById('branchSearchDialog');
branchSearchShowDialogButton.addEventListener('click', () => {
  branchSearchDialog.showModal();
});

// 사번검색 모달
const idSearchShowDialogButton = document.getElementById(
  'idSearchShowDialogButton',
);
const idSearchDialog = document.getElementById('idSearchDialog');
idSearchShowDialogButton.addEventListener('click', () => {
  idSearchDialog.showModal();
});

// 사용자 등록 확인 모달
const userRegisterConFirmShowDialogButton = document.getElementById(
  'userRegisterConFirmShowDialogButton',
);
const userRegisterConfirmDialog = document.getElementById(
  'userRegisterConfirmDialog',
);
userRegisterConFirmShowDialogButton.addEventListener('click', () => {
  userRegisterConfirmDialog.showModal();
});
