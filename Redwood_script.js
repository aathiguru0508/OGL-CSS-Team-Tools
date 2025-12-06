// Generate HTML from uploaded Excel
function generateHTMLFromExcel() {
    const fileInput = document.getElementById("excelFile");
    if (!fileInput.files.length) {
        alert("❗ Please upload an Excel file.");
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

        if (jsonData.length < 2) {
            alert("❗ Excel file must have at least one row of data starting from row 2.");
            return;
        }

        let cardsHTML = `<div class="ogl-card-container">\n`;

        for (let i = 1; i < jsonData.length; i++) { // Start from row 2
            const row = jsonData[i];
            const [version, subtitle, title, stepLink, videoLink, simLink] = row;

            if (!version || !subtitle || !title || !stepLink || !videoLink || !simLink) continue;

            cardsHTML += `
  <div class="ogl-card">
    <div class="ogl-card-header">
      <span class="ogl-version">${version}</span> 
      <span class="ogl-subtitle">${subtitle}</span>
    </div>
    <div class="ogl-card-title" title="${title}">${title}</div>
    <div class="ogl-card-footer">
      <a href="${stepLink}" target="_blank" title="Step Guide">
        <img alt="" height="25" src="https://i.ibb.co/BHVfdyvG/103408-text-book-icon.png" width="25" />
      </a>
      <a href="${videoLink}" target="_blank" title="Video">
        <img alt="" height="24" src="https://i.ibb.co/kVxHrJRd/8666551-play-circle-icon.png" width="24" />
      </a>
      <a href="${simLink}" target="_blank" title="Simulation">
        <img alt="" height="24" src="https://i.ibb.co/fVW5xYSK/2702149.png" width="24" />
      </a>
    </div>
  </div>\n`;
        }

        cardsHTML += `</div>`;

        document.getElementById("output").value = cardsHTML;
    };

    reader.readAsArrayBuffer(file);
}

// Copy HTML to clipboard
document.getElementById("copyButton").addEventListener("click", function () {
    const outputText = document.getElementById("output");
    outputText.select();
    outputText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(outputText.value)
        .then(() => alert("✅ HTML code copied to clipboard!"))
        .catch((err) => alert("❌ Failed to copy: " + err));
});

// Download Excel template
function downloadExcelTemplate() {
    const wb = XLSX.utils.book_new();
    const ws_data = [
        ["Version", "Subtitle", "Title", "Step Guide Link", "Video Link", "Simulation Link"]
    ];
    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    XLSX.utils.book_append_sheet(wb, ws, "Template");
    XLSX.writeFile(wb, "OGL_Card_Template.xlsx");
}
// Download Excel template
function downloadRunbookTheme() {
    const link = document.createElement("a");
    link.href = "Runbook Redwood Theme.html"; 
    link.download = "Runbook Redwood Theme.html"; 
    link.click();
}
