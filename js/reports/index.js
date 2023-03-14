const tableIcon = document.getElementById('reports-index-tableIcon');
const graphIcon = document.getElementById('reports-index-graphIcon');
const table = document.getElementById('reports-index-table');
const graph = document.getElementById('reports-index-graph');
const buttonName = document.querySelector('#reports-index-downloadButton span');

graph.classList.add('hidden');

const showTable = () => {
  tableIcon.src = '../../images/btn_report_list01_o.png';
  graphIcon.src = '../../images/btn_report_list02.png';
  table.classList.remove('hidden');
  graph.classList.add('hidden');
  buttonName.innerText = '엑셀 다운받기';
};
const showGraph = () => {
  tableIcon.src = '../../images/btn_report_list01.png';
  graphIcon.src = '../../images/btn_report_list02_o.png';
  graph.classList.remove('hidden');
  graph.classList.add('grid');
  table.classList.add('hidden');
  buttonName.innerText = 'PDF 다운받기';
};

tableIcon.addEventListener('click', showTable);
graphIcon.addEventListener('click', showGraph);
