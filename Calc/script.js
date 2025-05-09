// Module data configuration
const moduleConfig = {
  // RTIC Modules
  RTIC: {
      UE_Fondamentales: [
      { name: "Réseaux avancés 1", coef: 3, hasTP: true, hasTD: true },
      { name: "AAP", coef: 3, hasTP: true, hasTD: true },
      { name: "SD", coef: 3, hasTP: true, hasTD: true }
      ],
      UE_Méthodologique: [
      { name: "ML", coef: 2, hasTP: true, hasTD: false },
      { name: "XML et services web", coef: 2, hasTP: true, hasTD: false }
      ],
      UE_Transversale: [
      { name: "Anglais 1", coef: 1, hasTP: false, hasTD: false },
      { name: "Entreprenariat", coef: 1, hasTP: false, hasTD: false }
      ]
  },
  // IA Modules
  IA: {
      UE_Fondamentales: [
      { name: "SD", coef: 3, hasTP: true, hasTD: true },
      { name: "AAP", coef: 3, hasTP: true, hasTD: true },
      { name: "RC", coef: 3, hasTP: true, hasTD: false }
      ],
      UE_Méthodologique: [
      { name: "Introduction à la science de données", coef: 2, hasTP: true, hasTD: true },
      { name: "AA", coef: 2, hasTP: true, hasTD: false }
      ],
      UE_Transversale: [
      { name: "Entreprenariat", coef: 1, hasTP: false, hasTD: false },
      { name: "Anglais", coef: 1, hasTP: false, hasTD: false }
      ]
  },
  // GLSD Modules
  GLSD: {
      UE_Fondamentales: [
      { name: "SD", coef: 3, hasTP: true, hasTD: true },
      { name: "AAP", coef: 3, hasTP: true, hasTD: true },
      { name: "RC", coef: 3, hasTP: true, hasTD: false }
      ],
      UE_Méthodologique: [
      { name: "AA", coef: 2, hasTP: true, hasTD: false },
      { name: "Outils de Spécification", coef: 2, hasTP: false, hasTD: true }
      ],
      UE_Transversale: [
      { name: "Anglais", coef: 1, hasTP: false, hasTD: false },
      { name: "Entreprenariat", coef: 1, hasTP: false, hasTD: false }
      ]
  },
  // IVA Modules
  IVA: {
      UE_Fondamentales: [
      { name: "SD", coef: 3, hasTP: true, hasTD: true },
      { name: "La Programmation Parallèle", coef: 3, hasTP: true, hasTD: true },
      { name: "RC", coef: 3, hasTP: true, hasTD: false }
      ],
      UE_Méthodologique: [
      { name: "Analyse, traitement Image", coef: 2, hasTP: true, hasTD: false },
      { name: "Fondements de l'informatique graphique", coef: 2, hasTP: true, hasTD: false }
      ],
      UE_Transversale: [
      { name: "Anglais", coef: 1, hasTP: false, hasTD: false },
      { name: "Entreprenariat", coef: 1, hasTP: false, hasTD: false }
      ]
  },
  // SIOD Modules
  SIOD: {
      UE_Fondamentales: [
      { name: "SD", coef: 3, hasTP: true, hasTD: true },
      { name: "Intro aux fouilles de données", coef: 3, hasTP: true, hasTD: true },
      { name: "RC", coef: 3, hasTP: true, hasTD: false }
      ],
      UE_Méthodologique: [
      { name: "Big data", coef: 2, hasTP: true, hasTD: true },
      { name: "Fondements des BD", coef: 2, hasTP: true, hasTD: false }
      ],
      UE_Transversale: [
      { name: "Anglais", coef: 1, hasTP: false, hasTD: false },
      { name: "Entreprenariat", coef: 1, hasTP: false, hasTD: false }
      ]
  },
  // PRO Modules
  PRO: {
      UE_Fondamentales: [
      { name: "Conception et Programmation", coef: 3, hasTP: true, hasTD: true },
      { name: "SGBD", coef: 2, hasTP: true, hasTD: true },
      { name: "Gestion et finances", coef: 2, hasTP: false, hasTD: false }
      ],
      UE_Méthodologique: [
      { name: "Marketing et technologie", coef: 2, hasTP: false, hasTD: false },
      { name: "Sécurité des SI", coef: 3, hasTP: true, hasTD: true }
      ],
      UE_Transversale: [
      { name: "Paradigmes de PR", coef: 2, hasTP: true, hasTD: true },
      { name: "Techniques de Compréhension en Anglais", coef: 1, hasTP: false, hasTD: false }
      ]
  }
  };

// Semester 2 module data will be populated here
// This is a placeholder for future implementation
const semesterTwoModules = {
  // RTIC Semester 2 Modules
  RTIC: {
    UE_Fondamentales: [
      { name: "Réseaux avancés", coef: 3, hasTP: true, hasTD: true },
      { name: "Réseaux sans fil", coef: 3, hasTP: true, hasTD: true }
    ],
    UE_Méthodologique: [
      { name: "Informatique mobile et nuagique", coef: 2, hasTP: true, hasTD: false },
      { name: "Qualité de service et systèmes communicants multimédia", coef: 2, hasTP: true, hasTD: false },
      { name: "Bases de Données Avancées & Big data", coef: 2, hasTP: true, hasTD: false },
      { name: "Simulation des réseaux", coef: 2, hasTP: true, hasTD: false }
    ],
    UE_Transversale: [
      { name: "Méthodologie et outils de la recherche", coef: 1, hasTP: false, hasTD: false }
    ]
  },
  // Other specifications will follow the same structure
  IA: {
    UE_Fondamentales: [],
    UE_Méthodologique: [],
    UE_Transversale: []
  },
  GLSD: {
    UE_Fondamentales: [],
    UE_Méthodologique: [],
    UE_Transversale: []
  },
  IVA: {
    UE_Fondamentales: [],
    UE_Méthodologique: [],
    UE_Transversale: []
  },
  SIOD: {
    UE_Fondamentales: [],
    UE_Méthodologique: [],
    UE_Transversale: []
  },
  PRO: {
    UE_Fondamentales: [],
    UE_Méthodologique: [],
    UE_Transversale: []
  }
};

document.addEventListener("DOMContentLoaded", function() {
  // Function to extract query parameter from URL
  function getUrlParameter(name) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
  }

  // Set the title based on the selected field and semester
  function setTitle(field, semester) {
    const title = document.getElementById("title");
    if (title) {
      const semesterText = semester ? ` - Semester ${semester}` : '';
      title.innerHTML = `Semester Grade Calculator - <span class="text-blue-600">${field || 'RTIC'}</span>${semesterText}`;
      document.title = `${field || 'RTIC'} Calculator - Semester ${semester || '1'}`;
    }
  }

  // Function to create the table dynamically
  function createTable(modules) {
    const tableContainer = document.getElementById("table-container");
    tableContainer.innerHTML = ""; // Clear previous table if any
    
    const table = document.createElement("table");
    table.classList.add("w-full", "border-2", "border-gray-200");

    // Create header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headerRow.classList.add("bg-gray-100");
    
    ["Module", "Coefficient", "TP", "TD", "Exam"].forEach(text => {
        const th = document.createElement("th");
        th.classList.add("px-6", "py-3", "text-left", "text-gray-600", "border-r");
        th.innerText = text;
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    // Iterate through categories
    Object.keys(modules).forEach(category => {
      // Create category header
        const categoryHeader = document.createElement("tr");
      categoryHeader.classList.add("category-header", "bg-gray-200", "text-white");
      
        const categoryCell = document.createElement("td");
        categoryCell.colSpan = 5;
        categoryCell.classList.add("px-6", "py-3", "font-bold");
        categoryCell.innerText = category.replace(/_/g, " ");
      
        categoryHeader.appendChild(categoryCell);
        tbody.appendChild(categoryHeader);

      // Create rows for each module in the category
      modules[category].forEach((module, moduleIndex) => {
            const row = document.createElement("tr");
        row.classList.add("module-row", "border-b", "animate-fade-in");
        row.setAttribute("data-module", module.name);
        row.setAttribute("data-has-tp", module.hasTP);
        row.setAttribute("data-has-td", module.hasTD);
        
        // Add a slight animation delay based on index
        row.style.animationDelay = `${moduleIndex * 50}ms`;

            // Module name cell
            const moduleCell = document.createElement("td");
            moduleCell.classList.add("px-6", "py-4", "border-r");
            moduleCell.innerText = module.name;
            row.appendChild(moduleCell);

            // Coefficient cell (readonly)
            const coefCell = document.createElement("td");
            coefCell.classList.add("px-6", "py-4", "border-r");
        
            const coefInput = document.createElement("input");
            coefInput.type = "number";
            coefInput.classList.add("coef", "w-20", "px-3", "py-2", "border", "rounded", "bg-gray-200");
            coefInput.value = module.coef;
            coefInput.readOnly = true;
        
            coefCell.appendChild(coefInput);
            row.appendChild(coefCell);

        // TP cell
                const tpCell = document.createElement("td");
                tpCell.classList.add("px-6", "py-4", "border-r");
        
        if (module.hasTP) {
                const tpInput = document.createElement("input");
                tpInput.type = "number";
                tpInput.classList.add("tp", "w-20", "px-3", "py-2", "border", "rounded");
                tpInput.min = 0;
                tpInput.max = 20;
          tpInput.step = 0.25;
                tpInput.placeholder = "TP";
          tpInput.required = true;
                tpCell.appendChild(tpInput);
        } else {
          tpCell.textContent = "N/A";
            }

        row.appendChild(tpCell);

        // TD cell
                const tdCell = document.createElement("td");
                tdCell.classList.add("px-6", "py-4", "border-r");
        
        if (module.hasTD) {
                const tdInput = document.createElement("input");
                tdInput.type = "number";
                tdInput.classList.add("td", "w-20", "px-3", "py-2", "border", "rounded");
                tdInput.min = 0;
                tdInput.max = 20;
          tdInput.step = 0.25;
                tdInput.placeholder = "TD";
          tdInput.required = true;
                tdCell.appendChild(tdInput);
        } else {
          tdCell.textContent = "N/A";
            }

        row.appendChild(tdCell);

        // Exam cell
            const examCell = document.createElement("td");
            examCell.classList.add("px-6", "py-4", "border-r");
        
            const examInput = document.createElement("input");
            examInput.type = "number";
            examInput.classList.add("exam", "w-20", "px-3", "py-2", "border", "rounded");
            examInput.min = 0;
            examInput.max = 20;
        examInput.step = 0.25;
            examInput.placeholder = "Exam";
        examInput.required = true;
        
            examCell.appendChild(examInput);
            row.appendChild(examCell);

            tbody.appendChild(row);
        });
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
}

  // Function to validate form inputs
  function validateInputs() {
    let isValid = true;
    const rows = document.querySelectorAll(".module-row");
    
    rows.forEach(row => {
      const hasTP = row.getAttribute("data-has-tp") === "true";
      const hasTD = row.getAttribute("data-has-td") === "true";
      
      // Validate exam input (always required)
      const examInput = row.querySelector("input.exam");
      if (!examInput.value || isNaN(parseFloat(examInput.value))) {
        examInput.classList.add("border-red-500");
        isValid = false;
  } else {
        examInput.classList.remove("border-red-500");
      }
      
      // Validate TP input if present
      if (hasTP) {
        const tpInput = row.querySelector("input.tp");
        if (tpInput && (!tpInput.value || isNaN(parseFloat(tpInput.value)))) {
          tpInput.classList.add("border-red-500");
          isValid = false;
        } else if (tpInput) {
          tpInput.classList.remove("border-red-500");
        }
      }
      
      // Validate TD input if present
      if (hasTD) {
        const tdInput = row.querySelector("input.td");
        if (tdInput && (!tdInput.value || isNaN(parseFloat(tdInput.value)))) {
          tdInput.classList.add("border-red-500");
          isValid = false;
        } else if (tdInput) {
          tdInput.classList.remove("border-red-500");
        }
      }
    });
    
    return isValid;
  }

  // Function to calculate global average
  function calculateAverage() {
    // Validate inputs before calculation
    if (!validateInputs()) {
      alert("Please fill in all required fields correctly.");
      return;
    }
    
    let totalWeightedSum = 0;
    let totalCoefficient = 0;
    const results = [];

    const rows = document.querySelectorAll(".module-row");
    
    rows.forEach(row => {
      const moduleName = row.querySelector("td:first-child").innerText;
      const coef = parseFloat(row.querySelector("input.coef").value) || 0;
      const hasTP = row.getAttribute("data-has-tp") === "true";
      const hasTD = row.getAttribute("data-has-td") === "true";
      
      // Get grade values
      let tp = hasTP ? parseFloat(row.querySelector("input.tp").value) || 0 : 0;
      let td = hasTD ? parseFloat(row.querySelector("input.td").value) || 0 : 0;
      let exam = parseFloat(row.querySelector("input.exam").value) || 0;
      
      // Calculate module average based on which components are present
      let moduleAverage = 0;

      // For modules that only have exam (no TP, no TD)
      if (!hasTP && !hasTD) {
        // If only exam exists, it's 100% of the grade
        moduleAverage = exam;
      } else if (hasTP && hasTD) {
        // If both TP and TD exist, they each contribute 25% (50% total)
        moduleAverage = (exam * 0.5) + ((tp + td) / 2 * 0.5);
      } else if (hasTP) {
        // If only TP exists, it's 50% of the grade
        moduleAverage = (exam * 0.5) + (tp * 0.5);
      } else if (hasTD) {
        // If only TD exists, it's 50% of the grade
        moduleAverage = (exam * 0.5) + (td * 0.5);
      }
      
      // Calculate weighted sum
        const weightedSum = moduleAverage * coef;

      // Store results
        results.push({
            name: moduleName,
            coef: coef,
        tp: hasTP ? tp : "N/A",
        td: hasTD ? td : "N/A",
            exam: exam,
            average: moduleAverage,
            weightedSum: weightedSum
        });

        totalWeightedSum += weightedSum;
        totalCoefficient += coef;
    });

    // Calculate global average
    const globalAverage = totalWeightedSum / totalCoefficient;
    
    // Update the UI with results
    displayResults(results, globalAverage);
  }

  // Function to display calculation results
  function displayResults(results, globalAverage) {
    // Populate the result table
    const resultTableBody = document.getElementById("resultTableBody");
    resultTableBody.innerHTML = "";  // Clear previous results

    results.forEach((result, index) => {
        const row = document.createElement("tr");
      row.classList.add("border-b", "animate-fade-in");
      
      // Add animation delay based on index
      row.style.animationDelay = `${index * 50}ms`;

        row.innerHTML = `
        <td class="px-6 py-4 border-r">${result.name}</td>
        <td class="px-6 py-4 border-r">${result.coef}</td>
        <td class="px-6 py-4 border-r">${result.tp === "N/A" ? "N/A" : result.tp.toFixed(2)}</td>
        <td class="px-6 py-4 border-r">${result.td === "N/A" ? "N/A" : result.td.toFixed(2)}</td>
        <td class="px-6 py-4 border-r">${result.exam.toFixed(2)}</td>
        <td class="px-6 py-4 border-r">${result.average.toFixed(2)}</td>
        <td class="px-6 py-4 border-r">${result.weightedSum.toFixed(2)}</td>
        `;
      
        resultTableBody.appendChild(row);
    });

    // Add summary row to the footer
    const resultTableFoot = document.getElementById("resultTableFoot");
    resultTableFoot.innerHTML = "";
    
    const totalRow = document.createElement("tr");
    totalRow.classList.add("bg-gray-100", "font-bold");
    
    const totalCoef = results.reduce((sum, result) => sum + result.coef, 0);
    const totalWeightedSum = results.reduce((sum, result) => sum + result.weightedSum, 0);
    
    totalRow.innerHTML = `
      <td class="px-6 py-4 border-r" colspan="1">TOTAL</td>
      <td class="px-6 py-4 border-r">${totalCoef}</td>
      <td class="px-6 py-4 border-r" colspan="3"></td>
      <td class="px-6 py-4 border-r"></td>
      <td class="px-6 py-4 border-r">${totalWeightedSum.toFixed(2)}</td>
    `;
    
    resultTableFoot.appendChild(totalRow);

    // Display global average
    document.getElementById("globalAverage").innerText = globalAverage.toFixed(2);

    // Show result section
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("downloadSection").classList.remove("hidden");
}

  // Function to download results as PDF
  function downloadPDF() {
    // Create loading indicator
    const downloadButton = document.getElementById("download_button");
    downloadButton.innerHTML = '<i class="bi bi-hourglass-split mr-2"></i> Generating PDF...';
    downloadButton.disabled = true;
    
    setTimeout(() => {
      try {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
        
        // Add university logo placeholder
        doc.setFillColor(75, 108, 183);
        doc.rect(15, 15, 20, 20, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.text('UMK', 25, 28, { align: 'center' });

  // Add university and department details
        doc.setTextColor(30, 41, 59);
        doc.setFontSize(16);
        doc.setFont(undefined, 'bold');
        doc.text("University Mohamed Khider Biskra", 105, 25, { align: 'center' });
        
        doc.setFontSize(12);
        doc.setFont(undefined, 'normal');
        doc.text("Department of Computer Science", 105, 35, { align: 'center' });
        
        const selectedField = getUrlParameter('field') || 'RTIC';
        const selectedSemester = getUrlParameter('semester') || '1';
        const field = `Field: ${selectedField}`;
        const currentDate = new Date();
        const year = `Year: ${currentDate.getFullYear()}`;
        const semester = `Semester: ${selectedSemester}`;
        
        // Add colored box for field info
        doc.setFillColor(240, 240, 240);
        doc.roundedRect(20, 45, 170, 15, 3, 3, 'F');
        
        doc.setFontSize(11);
        doc.setTextColor(30, 41, 59);
        doc.text(field, 105, 54, { align: 'center' });
        doc.text(year, 40, 54);
        doc.text(semester, 160, 54);

        // Add student details placeholder
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.5);
        doc.line(55, 75, 175, 75);
        doc.line(55, 85, 175, 85);
        
        doc.text("Student Name:", 30, 73);
        doc.text("Student ID:", 30, 83);
        
        // Calculation method explanation
        doc.setFillColor(245, 245, 245);
        doc.roundedRect(20, 95, 170, 20, 3, 3, 'F');
        
        doc.setFontSize(10);
        doc.setFont(undefined, 'bold');
        doc.text("Note: Module Averages Calculation Method", 30, 102);
        doc.setFont(undefined, 'normal');
        doc.text("- Exam: 50% of final grade", 35, 109);
        doc.text("- TP & TD: 50% of final grade (if both exist, each counts 25%)", 35, 115);
        
        // Global average
        const globalAverage = document.getElementById("globalAverage").innerText;
  doc.setFontSize(14);
        
        // Add box for global average
        let averageColor = [75, 108, 183]; // Default blue
        if (parseFloat(globalAverage) < 10) {
          averageColor = [220, 38, 38]; // Red for bad average
        } else if (parseFloat(globalAverage) < 14) {
          averageColor = [217, 119, 6]; // Orange for average
        } else {
          averageColor = [4, 120, 87]; // Green for good average
        }
        
        doc.setFillColor(averageColor[0], averageColor[1], averageColor[2], 0.1);
        doc.roundedRect(20, 125, 170, 15, 3, 3, 'F');
        
        doc.setFont(undefined, 'bold');
        doc.setTextColor(averageColor[0], averageColor[1], averageColor[2]);
        doc.text(`Global Average: ${globalAverage}`, 105, 134, { align: 'center' });

        // Create the result table using autoTable plugin
  doc.autoTable({
          startY: 150,
          head: [['Module', 'Coef', 'TP', 'TD', 'Exam', 'Average', 'Weighted Sum']],
          body: Array.from(document.querySelectorAll('#resultTableBody tr')).map(row => {
            return Array.from(row.cells).map(cell => cell.textContent.trim());
          }),
          theme: 'grid',
          headStyles: { 
            fillColor: [75, 108, 183],
            textColor: 255,
            fontStyle: 'bold',
            halign: 'center'
          },
          styles: { 
            overflow: 'linebreak', 
            cellPadding: 3,
            fontSize: 9
          },
          columnStyles: {
            0: { fontStyle: 'bold' },
            5: { fontStyle: 'bold' },
            6: { fontStyle: 'bold' }
          },
          alternateRowStyles: {
            fillColor: [249, 250, 251]
          }
        });
        
        // Add footer with date
        const dateStr = currentDate.toLocaleDateString();
        doc.setFontSize(8);
        doc.setTextColor(107, 114, 128);
        doc.text(`Generated on: ${dateStr}`, 105, doc.internal.pageSize.height - 10, { align: 'center' });

        // Save the PDF
        doc.save(`${selectedField}_Semester${selectedSemester}_Grades_${dateStr}.pdf`);
      } catch (error) {
        console.error("Error generating PDF:", error);
        alert("Error generating PDF. Please try again.");
      } finally {
        // Restore button
        downloadButton.innerHTML = '<i class="bi bi-file-earmark-pdf mr-2"></i> Download PDF';
        downloadButton.disabled = false;
      }
    }, 500);
  }

  // Initialize the application
  function init() {
    // Get selected field and semester from URL
    const selectedField = getUrlParameter('field') || 'RTIC';
    const selectedSemester = getUrlParameter('semester') || '1';
    
    // Set title
    setTitle(selectedField, selectedSemester);
    
    // Create table based on selected field and semester
    if (selectedSemester === '2') {
      // Use semester 2 modules if available
      if (semesterTwoModules[selectedField] && 
          (semesterTwoModules[selectedField].UE_Fondamentales.length > 0 || 
           semesterTwoModules[selectedField].UE_Méthodologique.length > 0 || 
           semesterTwoModules[selectedField].UE_Transversale.length > 0)) {
        createTable(semesterTwoModules[selectedField]);
      } else {
        // If no semester 2 modules defined for this field, default to semester 1
        alert("Semester 2 modules not yet defined for this field. Showing semester 1 instead.");
        window.location.href = `index.html?field=${selectedField}&semester=1`;
      }
    } else if (moduleConfig[selectedField]) {
      createTable(moduleConfig[selectedField]);
    } else {
      createTable(moduleConfig.RTIC); // Default to RTIC
    }
    
    // Set up event listeners
    document.getElementById('calculate_button').addEventListener('click', calculateAverage);
    window.downloadPDF = downloadPDF; // Expose to global scope for button onclick
    
    // Add key listener for Enter key to trigger calculation
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        calculateAverage();
          }
      });
  }

  // Start the application
  init();
});


