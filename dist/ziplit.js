"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DEFAULT_EXP = /\${(.*?)}/g;
function createInstance(exp) {
    exp = exp || DEFAULT_EXP;
    /**
     * Loosely checks if string contains parsable template format or is actual template literal.
     * NOTE: This works for this use case, not suitable otherwise!
     *
     * @param str tests if string is parsable.
     */
    function parsable(str) { typeof str === 'string' && !exp.test(str); }
    /**
     * Parses a ziplit style template string into strings and params arrays.
     *
     * @example
     * .parse('My name is ${name}') // result: { strings: [My name is ', ''], params: ['name']}
     *
     *
     * @param str a parsable template string.
     */
    function parseTemplate(str) {
        let match = null;
        let params = [];
        do {
            match = exp.exec(str);
            if (match)
                params = [...params, match[1]];
        } while (match !== null);
        const strings = str.split(exp).filter(v => !params.includes(v));
        return {
            strings,
            params
        };
    }
    /**
     * Converts an array of arguments to an indexed map object.
     *
     * @param args the arguments to be converted.
     */
    function argsToMap(args) {
        return args.reduce((result, arg, i) => (result[i] = arg) && result, {});
    }
    /**
     * Ensures an indexed map object is returned.
     *
     * @param args the arguments to normalize.
     */
    function normalizeArgs(args) {
        args = args || [];
        if (Array.isArray(args[0]))
            return argsToMap(args[0]);
        if (typeof args[0] === 'object')
            return args[0];
        return argsToMap(args);
    }
    /**
     * Compiles ziplit template string for use with render.
     *
     * @example
     * const compiled = ziplit.compile('My name is ${name}');
     * const rendered = compiled.render('Milton'); // result: 'My name is Milton'
     *
     * @param strings the ziplit string to be compiled.
     */
    // function compile(string: string): IApi;
    /**
     * Compiles a template literal string.
     *
     * @example
     * const compiled = ziplit.compile(`My name is ${'name'}`);
     * const rendered = compiled.render('Milton'); // result: 'My name is Milton'
     *
     * @param strings the parsed template literal strings array.
     * @param params the parsed template literal arguments.
     */
    function compile(strings, ...params) {
        const isNative = params.length;
        let source = strings;
        if (!isNative) {
            if (params.length)
                throw new Error(`Attempted to pass template literal params with ziplit formatted template`);
            const parsed = parseTemplate(strings);
            strings = parsed.strings;
            params = parsed.params;
        }
        else {
            source = revert();
        }
        const api = {
            source,
            render,
            revert
        };
        function render(...args) {
            const obj = normalizeArgs(args);
            let str = '';
            strings.forEach((s, i) => {
                const val = obj[i] || obj[params[i]] || '';
                str += (s + val);
            });
            return str;
        }
        function revert() {
            let str = '';
            strings.slice(0, strings.length - 1).forEach((s, i) => {
                str += (s + `{$${params[i]}}`);
            });
            return str;
        }
        api.revert = revert;
        return api;
    }
    return {
        parsable,
        parse: parseTemplate,
        compile,
        create: (regexp) => {
            const _instance = createInstance(regexp);
            return {
                parsable: _instance.parsable,
                parse: _instance.parse,
                compile: _instance.compile
            };
        }
    };
}
exports.createInstance = createInstance;
exports.ziplit = createInstance();
//# sourceMappingURL=ziplit.js.map