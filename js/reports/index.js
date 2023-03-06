const horizontalIcon = document.getElementById('horizontalIcon');
const verticalIcon = document.getElementById('verticalIcon');

const changeHorizontalImage = () => {
  horizontalIcon.src = '/images/btn_report_list01_o.png';
  verticalIcon.src = '/images/btn_report_list02.png';
};
const changeVerticalImage = () => {
  horizontalIcon.src = '/images/btn_report_list01.png';
  verticalIcon.src = '/images/btn_report_list02_o.png';
};

horizontalIcon.addEventListener('click', changeHorizontalImage);
verticalIcon.addEventListener('click', changeVerticalImage);
