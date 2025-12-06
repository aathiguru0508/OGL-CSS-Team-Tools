function generateHTML() {
      const title = document.getElementById("title").value;
      const stepLink = document.getElementById("stepLink").value;
      const videoLink = document.getElementById("videoLink").value;
      const simLink = document.getElementById("simLink").value;
      
  if (!title || !stepLink || !videoLink || !simLink) {
    alert('❗ Please fill in all fields before generating the code.');
    return;
  }

      const outputHTML = `
<h3 style="text-align:center">
  <span style="font-size:20px; font-family: Oracle Sans; color:#47034e"><strong>${title}</strong></span>
</h3>

<style type="text/css">
  .themed-button {
    padding: 10px 18px;
    font-weight: bold;
    font-size: 12px;
    color: #ffffff;
    background-color: #47034e;
    border: 1px solid #000;
    border-radius: 8px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: "Oracle Sans", sans-serif;
    transition: all 0.2s ease-in-out;
    margin: 6px 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  }

  .themed-button:hover {
    background-color: #5d0565;
    border-color: #ffffff;
    cursor: pointer;
  }

  .themed-button img {
    width: 23px;
    height: 23px;
    vertical-align: middle;
  }
</style>

<p style="text-align:center">
  <a class="themed-button" href="${stepLink}" target="_blank" title="Step Guide">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAABwZJREFUeF7tXGeoHVUQ/sb2Q+xi7yIoFhAbqLFixYaIqOgPBQsIFlTwtwUUNCgoighGUaMiBhWDShIjQRMFYzchYhd7w4JYguN+j1nZ7Nu7d+fu7jvvPmfgcO6Fs2fmfN8ps3PvGUFIUgQkqfZQjiAg8SQIAoKAxAgkVh8rIAhIjEBi9bECgoDECCRWHysgCEiMQGL1sQKCgMQIJFYfKyAISIxAYvWxAmYCAaq6DYD9ARwAYD8AWwLYAMCGVvPz3wC+tfJN4fMKAO8AWCkibNO7qOp6APa2srvZS5u3KnxeF8BvVn61mva/DuA1AMtF5Ku2xo60AlR188yAUzJDTgZwMIBt2xoC4C8AbwAgIRzkUyLyeQf9QlV3yPo+DcCBBeBJQlv5EsDLAB4HsFBEfvJ22JgAVd3RBnEiAJa+5fdsNT1NIliLCL83FlVdPyPyVLOZNb/3LU8AWJQRPV9EPmuibCgBqnokgLMBnANgoyad9tCGK4FEzBWRZXX9qyq3wvMNeM78FPILgEcAPCoiL9YZMJAAVb3AQD82xQhqdHK531UemAF/MQCW6SQLSIaIzKkyqpIAVb0dwBXTaRQVtrwA4AY7O64BcPo0t/duEbm0bOMkAlT1luzE54BCukfgNhG5qthtFQGLAXDfD+kegWUicsgwAnREvW8DeD/bg+masXxR+kw3k+8FPMhZs9AXP6jgHo6oeqTHVpnbu9Rq+vosPEBZ003dzlxsutnFz3uY7W7FIrLGpK9aAR4CngEwD8BzbV9KzM09zFxcurmbuUdX/8CPAJ61slREPm7Tv6ruYucO3y8Ob9pXFwTcB2COiLzUVKm3naoS/Px941zv86X2D+fAiwhJ6EVU9QQAtPW8OgWtCSh30MtoCp22cC9vBPCQiHCrmTJR1dodZOwIyJFT1U0BXGulDtDrsvNltohwH59ymbEEFIhwzbCpZiAIKHkZgwhQVXpg9Gbo4ZS9HHo8FEY76dHl9UoLFK4aFJsKAmoIUFV6K/Ra+NZML2ZUoav6ahaqIRGXFTsJAkoEqCq9Enon9FI6l/KhGgRMJsDzXuMmKAgoQeYFxI14S31j64aO6gUN2xKCACcCwwB1rgB6OB8A+LCiMHa1NQD+3s2ahQf3LItdTVju1DepvTsWNNVvwmV+OiDgPQAMTzCc8rWT/4nmFrciEbPKMX6vff8XAujHP0ngRYQ/ovcmQcBkL+gsEXmsN8RLHQcBDd+E+yIkCGhIQIQiRpyC3hlWChNEKGJE3P97zEtAhCLaIt7ykBtGWFvz4j2gZWggCHAiMGxGe2ekU/2k5l59EQtaE8IIRXhnYAcrIEIRXtBLrqTrN2EjLEIRbUBvSUCEIroC3yKRrhXQpe4mfXm3yBkfDR0EWoQimkynijbeGRahiBGBrpm5ri0oQhHpCYh/RXTJgXcLGta+rW3xJhyxoLZzyPf8sBntnJERivDBP/GPBO8hXG4foQgv6C3fhElAhCLagN6SgAhFdAV+hCIq/orXJbhN+vKeAU367LKN175OYkGWL+gYuzvLG47FwtQ2/L5W6R4u73Dxf5lMT8ODcYWIfDIMDO8Aq/pT1Z0B7JmlmdnL6t0Kd5fze8z/AOCtyh+s5ue8vAlggYh8X+7fa99IBKgqkxkxiQdv1LMwD08XwgHxL4TPA1iS/e+SCZLWEO8AbdviH2yPB3Cc1V3dQWYmlPnZ5Y9XWERktdc+NwEA7jfQOYv6lNVGBFPUzM0VeQaoqmdY6hreOV67T2MtS8ASABfW6Wn9m3DPgxjUPVOaPSAis5sQoKp52hrmDppWMq4E5CD+DGDjIYgybRjvFE9LGXcCpiWoHqOCAA9aPbQNAnoA1dNlnwTwFnmeA3Q5AF7/4Z6dl3UAbFEozNPJ77yxfjSA7T0D6aAt40NMe/YWgO8sjynrvNAL43mTF+YU3adU3GY0IcCTMesjZga0pHTvuq0pPKCq+5p7e4TVm7Tpr+JZTgReT2KCJub45E33kcV+1GcmSWaU3LVhR40yZjXJGbewALwrn2cTQ+3N+pIs69ZFHSSFZcz/3uy24z1tk0pV2W75SXMiGA2ok+E54/i0qt6ahQ2uLvXE/Aic7cyFyVXSu7QkolfgB5BxlK0IropyjtU7soRRl5efq8sbyhDDmZY7jUt3sYh82jvqFQoKRFzZ4D2AsZs7+5rxTcavqjtZxq9DLdvKvEFb3tDMuU0UTlUbVWVi8OsBnDRA54MAbhYROgNjIWNFQI6oqnJ7vAkAg4KUPxnzERFukWMlY0mAnVOMaDKB4B9MV5wlROUZNXYytgSMHdIDDA4CEjMZBAQBiRFIrD5WQBCQGIHE6mMFBAGJEUisPlZAEJAYgcTqYwUEAYkRSKw+VkAQkBiBxOpjBQQBiRFIrP5fh54RnYs0GtIAAAAASUVORK5CYII=" alt="Step Guide Icon" />Step Guide
  </a>

  <a class="themed-button" href="${videoLink}" target="_blank" title="Video">
    <img src="data:image/png;base64,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" alt="Video Icon" />Video
  </a>

  <a class="themed-button" href="${simLink}" target="_blank" title="Simulation">
    <img src="data:image/png;base64,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" alt="Simulation Icon" />Simulation
  </a>
</p>`.trim();

      document.getElementById("output").value = outputHTML;
      document.getElementById("livePreview").innerHTML = outputHTML;
  }
  document.getElementById("copyButton").addEventListener("click", function () {
  const outputText = document.getElementById("output");
  outputText.select();
  outputText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(outputText.value)
    .then(() => alert("✅ HTML code copied to clipboard!"))
    .catch((err) => alert("❌ Failed to copy: " + err));
});
// Download Excel template
function downloadRunbookTheme() {
    const link = document.createElement("a");
    link.href = "Runbook Normal Theme.html"; 
    link.download = "Runbook Normal Theme.html"; 
    link.click();
}