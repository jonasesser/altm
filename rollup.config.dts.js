import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import { execSync } from "child_process";
import dts from "rollup-plugin-dts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔹 Basis-Ordner für die TypeScript-Stubs (Original)
const typesBasePath = path.resolve(__dirname, "types/stubs");

// 🔹 Neues dist/ Verzeichnis für die gepackten Module
const distBasePath = path.resolve(__dirname, "dist/stubs");

// 🔹 Funktion zum rekursiven Finden aller `.d.ts`-Dateien
function findDtsFiles(dir) {
  let results = [];
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      results = results.concat(findDtsFiles(fullPath)); // 📂 Rekursiver Aufruf für Unterverzeichnisse
    } else if (file.endsWith(".d.ts")) {
      results.push(fullPath); // 📄 Nur `.d.ts`-Dateien speichern
    }
  });

  return results;
}

// 🔍 Alle `.d.ts`-Dateien finden
const dtsFiles = findDtsFiles(typesBasePath);

console.log("📂 Gefundene .d.ts-Dateien:", dtsFiles);

// 🔹 Rollup-Konfiguration für jede gefundene Datei erstellen (Ziel ist dist/)
export default dtsFiles.map(inputFile => {
  const relativePath = path.relative(typesBasePath, inputFile);
  const moduleName = relativePath.split(path.sep)[0]; // "client", "server", "shared", "natives"

  // 🔹 Name für TypeScript-Imports
  const declareModuleName = moduleName === "natives" ? "natives" : `alt-${moduleName}`;

  return {
    input: inputFile,
    output: {
      file: path.resolve(distBasePath, moduleName, "index.stub.d.ts"),
      format: "es"
    },
    plugins: [
      {
        name: "fix-exports",
        renderChunk(code) {
        // Entferne `declare` vor class, enum, type, interface
            const modifiedCode = code
            .replace(/\bdeclare\s+class\b/g, "export class")
            .replace(/\bdeclare\s+enum\b/g, "export enum")
            .replace(/\bdeclare\s+type\b/g, "export type")
            .replace(/\bdeclare\s+interface\b/g, "export interface")
            .replace(/\bdeclare\s+namespace\b/g, "export namespace");

          // Stelle sicher, dass `declare module` um den Code gelegt wird
          return `declare module "${declareModuleName}" {\n${modifiedCode}\n}`;
        }
      },
      dts({
        respectExternal: true,
        compilerOptions: {
          declaration: true,
          outDir: "./dist",
          removeComments: false
        }
      })
    ]
  };
});

// 📦 package.json für jedes Modul in `dist/` erstellen
fs.readdirSync(distBasePath).forEach(moduleName => {
  const modulePath = path.join(distBasePath, moduleName);
  const packageJsonPath = path.join(modulePath, "package.json");

  if (!fs.existsSync(packageJsonPath)) {
    const packageJsonContent = {
      name: `@altm/${moduleName}`,
      version: "1.0.0",
      main: "./index.stub.js",
      types: "./index.stub.d.ts",
      files: [
        "index.stub.js",
        "index.stub.d.ts"
      ]
    };

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJsonContent, null, 2));
    console.log(`📦 package.json für ${moduleName} erstellt.`);
  }
});


