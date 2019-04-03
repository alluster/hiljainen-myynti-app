
# Hiljainen myynti app

This app is created to make selling apartments from the so-called silent markets smooth. Premise is that there are apartments people want to sell but don't have the time or energy for the selling procedures. This is where this app comes to shine. 

## What

This app is coded with react, react-hooks, styled-components and uses the great pigeon-maps component with custom pin built on pigeon-marker library.

[pigeon-maps NPM](https://www.npmjs.com/package/pigeon-maps)


# List of Props for components

## /components/Typography.js

Headings are imported into components as `import {H1, H2,etc..} from components/Heading.js`

|         Prop       |Description                          |Default                         |
|----------------|-------------------------------|-----------------------------|
|`thin`|Font weight becomes 200|400|
|`bold`|Font weight becomes 700|400|
|`underline`|Font becomes underlined|null|
|`light`|Font colour becomes white|black|
|`right`|Text aligns to right|left|
|`center`|Text aligns to center|left|
|`lineHeight`|value needs to be `string`|heading style default|


example: `<H1 thin underline light lineHeight="1rem" >Hello World</H1>`

## /components/Button.js

Buttons are imported into components as `import Button from components/Button.js`

|         Prop       |Description                          |Default                         |
|----------------|-------------------------------|-----------------------------|
|`small`|Button becomes small|"medium"|
|`large`|Button becomes large|"medium"|
|`outline`|Button becomes outlined|outlined|
|`primary`|Button colour becomes magenta|black|
|`secondary`|Button colour becomes blue|black|
|`light`|Button colour becomes white|black|
|`dark`|Button colour becomes black|black|

When props are combined the button changes accordingly:

example: `<Button small outline light >Hello World</Button>` would output small sized outlined white button.

