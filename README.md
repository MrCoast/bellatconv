# bellatconv
A converter to transform belarusian cyrillic text to latin text.

## Installation

```sh
$ npm install -g mrcoast/bellatconv
```

## Usage

You can either pass input text as an argument:

```sh
bellatconv 'Жыве Беларусь!'
Converted text:
 Žyvie Biełaruś!
```

or send it into stdin:

```sh
cat inputfile.txt | bellatconv
```
