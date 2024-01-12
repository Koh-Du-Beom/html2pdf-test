
const data = [
  {
    name: '고두범',
    sgrade: '3',
    dname: '컴퓨터공학부',
    phone: '010-8380-3260',
  },
  
];

document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.querySelector('table tbody');
  tbody.innerHTML = '';

  data.forEach((item) => {
    const row = `<tr>
                   <td>${item.dname}</td>
                   <td>${item.sgrade}</td>
                   <td>${item.name}</td>
                   <td>${item.phone}</td>
                 </tr>`;
    tbody.innerHTML += row;
  });

  // PDF 생성을 위한 버튼이 클릭되었을 때의 이벤트 핸들러
  document.getElementById('download-pdf').addEventListener('click', () => {
    const element = document.body; // PDF로 만들 전체 body 또는 특정 요소를 선택할 수 있습니다.
    html2pdf(element, {
      margin:       10,
      filename:     'myfile.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
  });
});


