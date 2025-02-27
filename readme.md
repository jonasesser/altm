# AltV zu FiveM Migration

Dieses Projekt nutzt generierte Stubs aus den AltV Typ-Definitions, um im nächsten Schritt AltV vollständig durch FiveM zu ersetzen. Die generierten Stubs dienen als Grundlage für die zukünftige Implementierung und ermöglichen eine saubere, modulare Umstellung.

## Zielsetzung

- **Generierung von Stubs:** Verwendung der AltV Typ-Definitions zur Erstellung von Stubs.
- **Migration zu FiveM:** Schrittweise Implementierung der Stubs in FiveM, um AltV vollständig abzulösen.
- **Modularität:** Aufbau einer flexiblen Codebasis, die zukünftige Erweiterungen und Anpassungen unterstützt.

## Projektstruktur

- **/stubs:** Enthält die aus AltV generierten Stubs.
- **/src:** Geplanter Ordner für die zukünftige Implementierung der Funktionen in FiveM.
- **/docs:** Dokumentationen und weiterführende Informationen zum Projekt.

## Installation

1. **Repository klonen:**

   ```bash
   git clone <repository-url>
   cd <repository-verzeichnis>

2. Build

npm run build

3. Copy dist to your project in folder altm

5. 

        "@altm/client": "file:altm/client/altm-client-1.0.0.tgz",
        "@altm/natives": "file:altm/natives/altm-natives-1.0.0.tgz",
        "@altm/server": "file:altm/server/altm-server-1.0.0.tgz",
        "@altm/shared": "file:altm/shared/altm-shared-1.0.0.tgz",
        "@altm/webview": "file:altm/webview/altm-webview-1.0.0.tgz",
        "@altm/worker": "file:altm/worker/altm-worker-1.0.0.tgz",

    anstatt:

    "@altm/client": "^1.0.0",
        "@altm/natives": "^1.0.0",
        "@altm/server": "^1.0.0",
        "@altm/shared": "^1.0.0",
        "@altm/webview": "^1.0.0",
        "@altm/worker": "1.0.0",


        npm list | Select-String "@altm/"



npm install --save-dev ./altm/client/altm-client-1.0.0.tgz
npm install --save-dev ./altm/server/altm-server-1.0.0.tgz
npm install --save-dev ./altm/shared/altm-shared-1.0.0.tgz
npm install --save-dev ./altm/natives/altm-natives-1.0.0.tgz

6. add type roots!

7. checks

tsc --traceResolution



