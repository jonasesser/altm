import { FileEncoding } from './types';

export class File {
    protected constructor() {
        // TODO: Implement constructor
    }
    /**
     * Determines whether file exists with the specified filename.
     *
     * @param filename The name of the file.
     * @returns Return is dependent on whether file with the specified filename exists.
     */

    public static exists(filename: string): boolean {
        // TODO implement
        return false;
    }
    /**
     * Reads content of the file.
     *
     * @param filename The name of the file.
     * @param encoding The encoding of the file. If not specified, it defaults to "utf-8".
     */
    public static read(filename: string, encoding: FileEncoding.Utf8 | FileEncoding.Utf16 | 'utf-8' | 'utf-16'): string;
    /**
     * Reads content of the file.
     *
     * @param filename The name of the file.
     * @param encoding The encoding of the file.
     */

    public static read(filename: string, encoding: FileEncoding.Utf8 | FileEncoding.Utf16 | 'utf-8' | 'utf-16' | FileEncoding.Binary | 'binary'): string | ArrayBuffer {
        // TODO implement
        return "null";
    }
}