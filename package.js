import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import { execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔹 Neues dist/ Verzeichnis für die gepackten Module
const distBasePath = path.resolve(__dirname, "dist/stubs");

// 📦 `npm pack` explizit aus `dist/` ausführen, damit nur `dist/`-Dateien genutzt werden
console.log("📦 Starte `npm pack` für alle Module aus dist/...");

fs.readdirSync(distBasePath).forEach(moduleName => {
  const modulePath = path.join(distBasePath, moduleName);
  const packageJsonPath = path.join(modulePath, "package.json");

  if (fs.existsSync(packageJsonPath)) {
    console.log(`📦 Verpacke ${moduleName} aus dist/${moduleName}...`);
    execSync("npm pack", { cwd: modulePath, stdio: "inherit" }); // ⬅ Hier: `npm pack` aus `dist/`-Pfad ausführen
  } else {
    console.error(`❌ Fehler: package.json fehlt in ${modulePath}.`);
  }
});

console.log("✅ `npm pack` abgeschlossen! Pakete sind bereit für Installation.");
process.exit(0);