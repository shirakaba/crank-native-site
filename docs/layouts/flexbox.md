---
id: flexbox
title: FlexboxLayout
sidebar_label: FlexboxLayout
---
<!-- contributors: [shirakaba, rigor789, ikoevska] -->

`<flexboxLayout>` is a React wrapper around `FlexboxLayout`, a layout container that provides a non-exact implementation of the [CSS Flexbox layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox). This layout lets you arrange child components both horizontally and vertically.

See also:

* [Official top-level documentation](https://docs.nativescript.org/ui/layouts/layout-containers#flexboxlayout)
* [Detailed API specification](https://docs.nativescript.org/api-reference/modules/_ui_layouts_flexbox_layout_)

## Examples

### Default flex layout

The following example creates a row of three equally-sized elements that span across the entire height of the screen.

```tsx
/** @jsx createElement */

<flexboxLayout backgroundColor="#3c495e">
  <label text="first" width={70} backgroundColor="#43b883"/>
  <label text="second" width={70} backgroundColor="#1c6b48"/>
  <label text="third" width={70} backgroundColor="#289062"/>
</flexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_stretch.svg" />

*Licence: [NativeScript Vue Artwork](/docs/licences/licences#Nativescript_Vue_Artwork).*

### Column flex layout

The following example creates a column of three equally-sized elements that span across the entire width of the screen.

```tsx
/** @jsx createElement */

<flexboxLayout flexDirection="column" backgroundColor="#3c495e">
  <label text="first" height={70} backgroundColor="#43b883"/>
  <label text="second" height={70} backgroundColor="#1c6b48"/>
  <label text="third" height={70} backgroundColor="#289062"/>
</flexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_column_stretch.svg" />

*Licence: [NativeScript Vue Artwork](/docs/licences/licences#Nativescript_Vue_Artwork).*

### Row flex layout with items aligned to `flex-start`

The following example creates a row of three items placed at the top of the screen. Items are placed in the order they were declared in.

```tsx
/** @jsx createElement */

<flexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
  <label text="first" width={70} height={70} backgroundColor="#43b883"/>
  <label text="second" width={70} height={70} backgroundColor="#1c6b48"/>
  <label text="third" width={70} height={70} backgroundColor="#289062"/>
</flexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_flex-start.svg" />

*Licence: [NativeScript Vue Artwork](/docs/licences/licences#Nativescript_Vue_Artwork).*

### Row flex layout with custom order

The following example creates a row of three items placed at the top of the screen. Items are placed in a customized order.

```tsx
/** @jsx createElement */

<flexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
  <label text="first" order={2} width={70} height={70} backgroundColor="#43b883"/>
  <label text="second" order={3} width={70} height={70} backgroundColor="#1c6b48"/>
  <label text="third" order={1} width={70} height={70} backgroundColor="#289062"/>
</flexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_custom_order.svg" />

*Licence: [NativeScript Vue Artwork](/docs/licences/licences#Nativescript_Vue_Artwork).*

### Row flex layout with wrapping

The following example creates four items with enabled line wrapping. When the row runs out of space, the container wraps the last item on a new line.

```tsx
/** @jsx createElement */

<flexboxLayout flexWrap="wrap" backgroundColor="#3c495e">
  <label text="first" width={30} backgroundColor="#43b883"/>
  <label text="second" width={30} backgroundColor="#1c6b48"/>
  <label text="third" width={30} backgroundColor="#289062"/>
  <label text="fourth" width={30} backgroundColor="#289062"/>
</flexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_wrap.svg" />

*Licence: [NativeScript Vue Artwork](/docs/licences/licences#Nativescript_Vue_Artwork).*

### Column flex layout with reverse order and items with a different `alignSelf`

The following example shows how to use:

* `flexDirection` to place items in a column, starting from the bottom.
* `justifyContent` to create equal spacing between the vertically placed items.
* `alignSelf` to modify the position of items across the main axis.

```tsx
/** @jsx createElement */

<flexboxLayout
  flexDirection="column-reverse"
  justifyContent="space-around"
  backgroundColor="#3c495e"
>
  <label text="first" height={70} backgroundColor="#43b883"/>
  <label
    text="second"
    alignSelf="center"
    width={70}
    height={70}
    backgroundColor="#1c6b48"
  />
  <label
    text="third\nflex-end"
    alignSelf="flex-end"
    width={70}
    height={70}
    backgroundColor="#289062"
  />
  <label text="fourth" height={70} backgroundColor="#289062"/>
</flexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_column_reverse_space_around_align_self.svg" />

*Licence: [NativeScript Vue Artwork](/docs/licences/licences#Nativescript_Vue_Artwork).*

## Props

| Name | Type | Description |
|------|------|-------------|
`flexDirection` | `string` | Sets the direction for placing child elements in the flexbox container.<br/>Valid values:<br/>`row` (horizontal, left to right),<br/>`row-reverse` (horizontal, right to left),<br/>`column` (vertical, top to bottom), and<br/>`column-reverse` (vertical, bottom to top).<br/>Default value: `row`.
`flexWrap` | `string` | Sets whether child elements are forced in a single line or can flow into multiple lines. If set to multiple lines, also defines the cross axis which determines the direction new lines are stacked in.<br/>Valid values:<br/>`nowrap` (single line which may cause the container to overflow),<br/>`wrap` (multiple lines, direction is defined by `flexDirection`),and<br/>`wrap-reverse` (multiple lines, opposite to the direction defined by `flexDirection`).<br/>Default value: `nowrap`.
`justifyContent` | `string` |  Sets the alignment of child elements along the main axis. You can use it to distribute leftover space when all the child elements on a line are inflexible or are flexible but have reached their maximum size. You can also use it to control the alignment of items when they overflow the line.<br/>Valid values:<br/>`flex-start` (items are packed toward the start line),<br/>`flex-end` (items are packed toward the end line),<br/>`center` (items are centered along the line),<br/>`space-between` (items are evenly distributed on the line; first item is on the start line, last item on the end line), and<br/>`space-around` (items are evenly distributed on the line with equal space around them).<br/>Default value: `flex-start`.
`alignItems` | `string` | (Android-only) Sets the alignment of child elements along the cross axis on the current line. Acts as `justifyContent` for the cross axis.<br/>Valid values:<br/>`flex-start` (cross-start margin edge of the items is placed on the cross-start line),<br/>`flex-end` (cross-end margin edge of the items is placed on the cross-end line),<br/>`center` (items are centered оn the cross axis),<br/>`baseline` (the item baselines are aligned), and<br/>`stretch` (items are stretched to fill the container but respect `min-width` and `max-width`).<br/>Default value: `stretch`.
`alignContent` | `string` | Sets how lines are aligned in the flex container on the cross axis, similar to how `justifyContent` aligns individual items within the main axis.<br/> This property has no effect when the flex container has only one line.<br/>Valid values:<br/>`flex-start` (lines are packed to the start of the container),<br/>`flex-end` (lines are packed to the end of the container),<br/>`center` (lines are packed to the center of the container),<br/>`space-between` (lines are evenly distributed; the first line is at the start of the container while the last one is at the end),<br/>`space-around` (lines are evenly distributed with equal space between them), and<br/>`stretch` (lines are stretched to take up the remaining space).<br/>Default value: `stretch`.

## Extra props for child elements

When an element is a direct child of `<flexboxLayout>`, you can work with the following additional properties.

| Name | Type | Description |
|------|------|-------------|
`order` | `number` | Sets the order in which child element appear in relation to one another.
`flexGrow` | `number` | Indicates that the child should grow in size, if necessary. Sets how much the child will grow in proportion to the rest of the child elements in the flex container.
`flexShrink` | `number` | Indicates that the child should shrink when the row runs out of space. Sets how much the flex item will shrink in proportion to the rest of the child elements in the flex container. When not specified, its value is set to `1`.
`alignSelf` | `string` | (Android-only) Overrides the `alignItems` value for the child.<br/>Valid values:<br/>`flex-start` (cross-start margin edge of the item is placed on the cross-start line),<br/>`flex-end` (cross-end margin edge of the item is placed on the cross-end line),<br/>`center` (item is centered on the cross axis),<br/>`baseline` (the item baselines are aligned), and<br/>`stretch` (items is stretched to fill the container but respects `min-width` and `max-width`).<br/>Default value: `stretch`.
`flexWrapBefore` | `boolean` | When `true`, forces the item to wrap onto a new line. This property is not part of the official Flexbox specification.<br/>Default value: `false`.
`rowSpan` | `number` | Specifies the number of rows which this element spans across.
`colSpan` | `number` | Specifies the number of columns which this element spans across.

## React NativeScript-specific props

None for `<flexboxLayout>`, nor for any of its children.