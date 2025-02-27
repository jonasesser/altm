/**
 * Creates a hash using Jenkins one-at-a-time algorithm.
 *
 * @param str A string from which hash will be created.
 */
export function hash(str: string): number {
    // TODO Implement
    return 0;
}

export function stringToSHA256(string: string): string {
    // TODO Implement
    return '';
}

type Language =
    | { code: 0; name: 'american'; locale: 'en-US' }
    | { code: 1; name: 'french'; locale: 'fr-FR' }
    | { code: 2; name: 'german'; locale: 'de-DE' }
    | { code: 3; name: 'italian'; locale: 'it-IT' }
    | { code: 4; name: 'spanish'; locale: 'es-ES' }
    | { code: 5; name: 'brazilian'; locale: 'pt-BR' }
    | { code: 6; name: 'polish'; locale: 'pl-PL' }
    | { code: 7; name: 'russian'; locale: 'ru-RU' }
    | { code: 8; name: 'korean'; locale: 'ko-KR' }
    | { code: 9; name: 'chinesetrad'; locale: 'zh-TW' }
    | { code: 10; name: 'japanese'; locale: 'ja-JP' }
    | { code: 11; name: 'mexican'; locale: 'es-MX' }
    | { code: 12; name: 'chinesesimp'; locale: 'zh-CN' };

export function getLocale(): Language | null {
    const id = GetCurrentLanguage();

    const languages: Language[] = [
        { code: 0, name: 'american', locale: 'en-US' },
        { code: 1, name: 'french', locale: 'fr-FR' },
        { code: 2, name: 'german', locale: 'de-DE' },
        { code: 3, name: 'italian', locale: 'it-IT' },
        { code: 4, name: 'spanish', locale: 'es-ES' },
        { code: 5, name: 'brazilian', locale: 'pt-BR' },
        { code: 6, name: 'polish', locale: 'pl-PL' },
        { code: 7, name: 'russian', locale: 'ru-RU' },
        { code: 8, name: 'korean', locale: 'ko-KR' },
        { code: 9, name: 'chinesetrad', locale: 'zh-TW' },
        { code: 10, name: 'japanese', locale: 'ja-JP' },
        { code: 11, name: 'mexican', locale: 'es-MX' },
        { code: 12, name: 'chinesesimp', locale: 'zh-CN' },
    ];

    const language = languages.find(lang => lang.code === id);

    return language || null;
}

export function getLicenseHash(): string {
    // TODO Implement
    return '';
}

/**
 * Evaluates and executes the given JavaScript code.
 *
 * @remarks The code is evaluated in its own context, so it cannot access variables, functions etc. from the calling file.
 *
 * @param code The JavaScript code.
 * @returns The exports of the evaluated module.
 */
export function evalModule(code: string): void {
    eval(code);
}

/**
 * Copy content into users clipboard.
 *
 * @remarks This function requires [Clipboard Access](https://docs.altv.mp/articles/permissions.html) permission from the user.
 */
export function copyToClipboard(val: string): void {
    // TODO Implement
}




