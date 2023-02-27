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

// 디바이스 등록 확인 모달
const deviceRegisterConfirmShowDialogButton = document.getElementById(
  'deviceRegisterConfirmShowDialogButton',
);
const deviceRegisterConfirmDialog = document.getElementById(
  'deviceRegisterConfirmDialog',
);
deviceRegisterConfirmShowDialogButton.addEventListener('click', () => {
  deviceRegisterConfirmDialog.showModal();
});

// 디바이스 세부정보 수정 확인 모달
const detailEditConfirmShowDialogButton = document.getElementById(
  'detailEditConfirmShowDialogButton',
);
const detailEditConfirmDialog = document.getElementById(
  'detailEditConfirmDialog',
);
detailEditConfirmShowDialogButton.addEventListener('click', () => {
  detailEditConfirmDialog.showModal();
});
