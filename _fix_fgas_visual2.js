const fs = require("fs");
const path = "F-gas-compliance-solutions.html";
let html = fs.readFileSync(path, "utf8").replace(/\r\n/g, "\n");

// Independence section: Figma uses slate bg
html = html.replace(
  `            <section
              style="
                align-self: stretch;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #ffffff;
                padding-top: 64px;
                padding-bottom: 64px;
                gap: 64px;
              "
            >
              <div
                style="
                  flex-shrink: 0;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  padding-top: 48px;
                "
              >
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 16px;
                  "
                >
                  <span style="color: #475569; font-size: 24px"
                    >Indépendance énergétique</span
                  >`,
  `            <section
              style="
                align-self: stretch;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #f1f5f9;
                padding-top: 64px;
                padding-bottom: 64px;
                gap: 64px;
              "
            >
              <div
                style="
                  flex-shrink: 0;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  padding-top: 48px;
                "
              >
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 16px;
                  "
                >
                  <span style="color: #475569; font-size: 24px"
                    >Indépendance énergétique</span
                  >`
);
console.log("indep bg", html.includes("background: #f1f5f9;\n                padding-top: 64px"));

// Widen GWP metric card slightly like Figma (286px)
html = html.replace(
  `                  class="wasteheat-metric wasteheat-metric-savings"
                  style="
                    width: 257px;`,
  `                  class="wasteheat-metric wasteheat-metric-savings"
                  style="
                    width: 286px;`
);

html = html.replace(
  'href="solution-detail.css?v=figma-fgas-fix1"',
  'href="solution-detail.css?v=figma-fgas-fix2"'
);

fs.writeFileSync(path, html.replace(/\n/g, "\r\n"));
console.log("wrote");
