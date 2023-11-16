export declare class GppModel {
    private sections;
    private encodedString;
    private decoded;
    private dirty;
    constructor(encodedString?: string);
    setFieldValue(sectionName: string, fieldName: string, value: any): void;
    setFieldValueBySectionId(sectionId: number, fieldName: string, value: any): void;
    getFieldValue(sectionName: string, fieldName: string): any;
    getFieldValueBySectionId(sectionId: number, fieldName: string): any;
    hasField(sectionName: string, fieldName: string): boolean;
    hasFieldBySectionId(sectionId: number, fieldName: string): boolean;
    hasSection(sectionName: string): boolean;
    hasSectionId(sectionId: number): boolean;
    deleteSection(sectionName: string): void;
    deleteSectionById(sectionId: number): void;
    clear(): void;
    getHeader(): any;
    getSection(sectionName: string): any;
    getSectionIds(): any[];
    encode(): any;
    decode(str: string): void;
    encodeSection(sectionName: string): string;
    encodeSectionById(sectionId: number): string;
    decodeSection(sectionName: string, encodedString: string): void;
    decodeSectionById(sectionId: number, encodedString: string): void;
    toObject(): {};
}
