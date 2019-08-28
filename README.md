# Ziplit

Lightweight utility for ES6 Template Literal strings. Template strings are great but creating reusable Template Literals can be challenging. This simple util makes that process painless.

## Install

```sh
$ npm install ziplit
```

## Usage

Using an actual Template Literal string.

```ts
import ziplit from 'ziplit';
const compiled = ziplit.compile`My name is ${'name'}.` // NOTE: single quotes around "name" NOT parens.
const rendered = compiled.render('Milton'); // OR { name: 'Milton' } OR ['Milton']
```

Using a ziplit formatted string.

```ts
import ziplit from 'ziplit';
const compiled = ziplit.compile('My name is ${name}.') // NOTE: calling function with parens.
const rendered = compiled.render('Milton'); // OR { name: 'Milton' } OR ['Milton']
```

## RegExp

You can also change the default RegExp used by **ziplit**. Just create a new instance and pass in your custom RegExp.

```ts
import ziplit from 'ziplit';
const instance = ziplit.create(/{{(.*?)}}/g);
```

## License

See [LICENSE.md](LICENSE)

