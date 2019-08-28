import { IApi } from "./types";
export declare function createInstance(exp?: RegExp): {
    parsable: (str: string) => void;
    parse: (str: string) => {
        strings: string[];
        params: any[];
    };
    compile: (strings: string | TemplateStringsArray, ...params: any[]) => IApi;
    create: (regexp: RegExp) => {
        parsable: (str: string) => void;
        parse: (str: string) => {
            strings: string[];
            params: any[];
        };
        compile: (strings: string | TemplateStringsArray, ...params: any[]) => IApi;
    };
};
export declare const ziplit: {
    parsable: (str: string) => void;
    parse: (str: string) => {
        strings: string[];
        params: any[];
    };
    compile: (strings: string | TemplateStringsArray, ...params: any[]) => IApi;
    create: (regexp: RegExp) => {
        parsable: (str: string) => void;
        parse: (str: string) => {
            strings: string[];
            params: any[];
        };
        compile: (strings: string | TemplateStringsArray, ...params: any[]) => IApi;
    };
};
