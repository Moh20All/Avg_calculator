const moduleNames = [
  "Réseaux avancés 1",
  "Algorithmique avancée",
  "Systèmes distribués",
  "Machine Learning",
  "XML et services web",
  "Anglais 1",
  "Entreprenariat"
];

function calculateAverage() {
  const rows = document.querySelectorAll('.module-row');
  let totalWeightedSum = 0;
  let totalCoefficient = 0;
  const results = [];

  rows.forEach((row, index) => {
      const coef = parseFloat(row.querySelector('.coef').value) || 0;
      const tp = parseFloat(row.querySelector('.tp').value) || 0;
      const td = parseFloat(row.querySelector('.td').value) || 0;
      const exam = parseFloat(row.querySelector('.exam').value) || 0;
      
      let moduleAverage;
      if (index < 3) { // First 3 modules have TD
          moduleAverage = (exam * 0.5) + (((tp + td) / 2) * 0.5);
      } else if (index < 5) { // Next 2 modules have only TP
          moduleAverage = (exam * 0.5) + (tp * 0.5);
      } else { // Last 2 modules have only exam
          moduleAverage = exam;
      }

      const weightedSum = moduleAverage * coef;
      totalWeightedSum += weightedSum;
      totalCoefficient += coef;

      results.push({
          name: moduleNames[index],
          coefficient: coef,
          tp: tp || '-',
          td: td || '-',
          exam: exam || '-',
          average: moduleAverage.toFixed(2),
          weightedSum: weightedSum.toFixed(2)
      });
  });

  const globalAverage = totalWeightedSum / totalCoefficient;
  
  // Display results
  document.getElementById('result').classList.remove('hidden');
  document.getElementById('globalAverage').textContent = globalAverage.toFixed(2);
  
  // Build result table
  const tbody = document.getElementById('resultTableBody');
  tbody.innerHTML = '';
  document.getElementById('downloadSection').classList.remove('hidden');

  results.forEach(result => {
      const row = document.createElement('tr');
      row.className = 'border-b';
      row.innerHTML = `
          <td class="px-6 py-4 border-r">${result.name}</td>
          <td class="px-6 py-4 border-r">${result.coefficient}</td>
          <td class="px-6 py-4 border-r">${result.td}</td>
          <td class="px-6 py-4 border-r">${result.tp}</td>
          <td class="px-6 py-4 border-r">${result.exam}</td>
          <td class="px-6 py-4 border-r">${result.average}</td>
          <td class="px-6 py-4">${result.weightedSum}</td>
      `;
      tbody.appendChild(row);
  });
}
function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Add university and department details
  const university = "University Mohamed Khider Biskra";
  const department = "Department of Computer Science";
  const field = "Field: RTIC";
  const year = "Year: 2024";

  // Add title and details
  doc.setFontSize(18);
  doc.text(university, 14, 20); // Add university name
  doc.setFontSize(14);
  doc.text(department, 14, 30); // Add department name
  doc.setFontSize(12);
  doc.text(field, 14, 40); // Add field
  doc.text(year, 14, 50); // Add year

  // Add Global Average
  doc.setFontSize(12);
  doc.text(`Global Average: ${document.getElementById('globalAverage').textContent}`, 14, 60);

  // Prepare table data
  const table = document.querySelector('.result-table');
  const rows = table.querySelectorAll('tr');
  const headers = Array.from(rows[0].querySelectorAll('th')).map(th => th.textContent.trim()); // Get header row
  const data = Array.from(rows)
    .slice(1) // Skip the header row
    .map(row =>
      Array.from(row.querySelectorAll('td')).map(td => td.textContent.trim()) // Map table rows to arrays of cell data
    );

  // Add the table to the PDF
  doc.autoTable({
    head: [headers],
    body: data,
    startY: 70, // Adjust table start position after the header info
    theme: 'grid', // Styled grid table
    headStyles: { fillColor: [22, 160, 133] }, // Table header color
    styles: { fontSize: 10, cellPadding: 4 }, // General table styles
    alternateRowStyles: { fillColor: [240, 240, 240] }, // Alternating row background color
    margin: { left: 14, right: 14 }, // Adjust table margins
  });

  // Get the current date and time for the filename
  const now = new Date();
  const formattedDate = now.toISOString().slice(0, 10); // Format as YYYY-MM-DD
  const formattedTime = now.toTimeString().slice(0, 8).replace(/:/g, "-"); // Format as HH-MM-SS
  const fileName = `Semester_Calculation_${formattedDate}_${formattedTime}.pdf`;

  // Save the PDF with the dynamic filename
  doc.save(fileName);
}
