# simple-react-flex-grid

![Example Grid Layout](https://github.com/meaghanbass/simple-react-flex-grid/blob/main/example-grid.png)

A simple flex-grid package for React, that utilizes almost all of the same functionalities as [Emotion Flex Grid](https://www.npmjs.com/package/emotion-flex-grid), but without any additional packages or theming requirements, and is compatible with NextJS App Router.

## Getting started

For a detailed description about using the components, please see the [Components](#Components) section.

```
npm i simple-react-flex-grid
```

```jsx
import { GridWrap, GridRow, GridColumn } from "simple-react-flex-grid";

const ExampleComponent = () => (
  <section>
    <GridWrap>
      <GridRow>
        <GridColumn width={[12, 12, 12, 3, 3, 3]}>
          <div>Content</div>
        </GridColumn>

        <GridColumn width={[12, 12, 12, 3, 3, 3]}>
          <div>Content</div>
        </GridColumn>

        <GridColumn width={[12, 12, 12, 3, 3, 3]}>
          <div>Content</div>
        </GridColumn>
      </GridRow>
    </GridWrap>
  </section>
);
```

## Breakpoints

```
[375px, 768px, 1024px, 1200px, 1400px, 1600px]
```

## Components

This package comes with 3 components: GridWrap, GridRow and GridColumn. With these components you can set up a complete grid for your website. Columns are based on a _12 column_ grid system. Below you can see a full overview of each component and the props you can pass to each component.

You can pass an array of values (specified below for each component) to set values for different breakpoints (mobile-first).You must specify all six breakpoints.

### <GridWrap \/>

Use this component to place your content inside a container with a maximum width. Will always center horizontally. Has a default max-width of _1340px_.

| Prop     | Description | Values   |
| :------- | :---------- | :------- |
| maxWidth | max-width   | `number` |

```jsx
<GridWrap maxWidth={1200} />
```

### <GridRow \/>

Use this component in combination with GridColumn. All props are optional.

| Prop    | Description     | Values                                    |
| :------ | :-------------- | :---------------------------------------- |
| wrap    | flex-wrap       | `wrap` `nowrap` `wrap-reverse`            |
| align   | align-items     | `start` `center` `end`                    |
| justify | justify-content | `start` `center` `end` `between` `around` |

```jsx
<GridRow wrap="wrap" align="center" justify="between">
  <GridColumn />
  <GridColumn />
</GridRow>
```

### <GridColumn \/>

Use this component inside a GridRow or use it standalone. All props are optional. When no width is given, columns will automatically flex (when inside a GridRow). The width prop should be either 1 value or an array of 6.

| Prop   | Description | Values                 |
| :----- | :---------- | :--------------------- |
| width  | width       | `1 to 12` `array`      |
| offset | offset      | same as width          |
| align  | align-self  | `start` `center` `end` |
| order  | flex order  | `number`               |

```jsx
<GridRow>
  <GridColumn width={4} /> // Single width prop that will apply to all breakpoints
  <GridColumn width={[12, 12, 12, 6, 6, 6]} /> // Array of props that will apply to each respective breakpoint
</GridRow>
```

## Inspiration

- [Emotion Flex Grid](https://www.npmjs.com/package/emotion-flex-grid)
- [Flexbox Grid](http://flexboxgrid.com/)
