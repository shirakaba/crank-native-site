---
id: dock
title: DockLayout
sidebar_label: DockLayout
---
<!-- contributors: [shirakaba, rigor789, ikoevska] -->

`<dockLayout>` is a React wrapper around `DockLayout`, a layout container that lets you dock child elements to the sides or the center of the layout.

`<dockLayout>` has the following behaviour:

* Uses the `dock` property to dock its children to the `left`, `right`, `top`, `bottom` or center of the layout.<br/>To dock a child element to the center, it must be the **last child** of the container and you must set the `stretchLastChild` property of the parent to `true`.
* Enforces layout constraints to its children.
* Resizes its children at run-time when its size changes.

See also:

* [Official top-level documentation](https://docs.nativescript.org/ui/layouts/layout-containers#docklayout)
* [Detailed API specification](https://docs.nativescript.org/api-reference/modules/_ui_layouts_dock_layout_)

## Examples

### Dock to every side without stretching the last child

The following example creates a frame-like layout consisting of 4 elements, position at the 4 edges of the screen.

```tsx
/** @jsx createElement */

<dockLayout stretchLastChild={false} backgroundColor="#3c495e">
  <label text="left" dock="left" width={40} backgroundColor="#43b883"/>
  <label text="top" dock="top" height={40} backgroundColor="#289062"/>
  <label text="right" dock="right" width={40} backgroundColor="#43b883"/>
  <label text="bottom" dock="bottom" height={40} backgroundColor="#289062"/>
</dockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_no_stretch.svg" />

*Licence: [NativeScript Vue Artwork](/docs/licences/licences#Nativescript_Vue_Artwork).*

### Dock to every side and stretch the last child

The following example shows how `stretchLastChild` affects the positioning of child elements in a `<dockLayout>` container. The last child (`bottom`) is stretched to take up all the remaining space after positioning the first three elements.

```tsx
/** @jsx createElement */

<dockLayout stretchLastChild={true} backgroundColor="#3c495e">
  <label text="left" dock="left" width={40} backgroundColor="#43b883"/>
  <label text="top" dock="top" height={40} backgroundColor="#289062"/>
  <label text="right" dock="right" width={40} backgroundColor="#43b883"/>
  <label text="bottom" dock="bottom" backgroundColor="#1c6b48"/>
</dockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_stretch.svg" />

*Licence: [NativeScript Vue Artwork](/docs/licences/licences#Nativescript_Vue_Artwork).*

### Dock to every side and the center

The following example creates a `<dockLayout>` of 5 elements. The first four wrap the center element in a frame. 

```tsx
/** @jsx createElement */

<dockLayout stretchLastChild={true} backgroundColor="#3c495e">
  <label text="left" dock="left" width={40} backgroundColor="#43b883"/>
  <label text="top" dock="top" height={40} backgroundColor="#289062"/>
  <label text="right" dock="right" width={40} backgroundColor="#43b883"/>
  <label text="bottom" dock="bottom" height={40} backgroundColor="#289062"/>
  <label text="center" backgroundColor="#1c6b48" />
</dockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_all_sides_and_stretch.svg" />

*Licence: [NativeScript Vue Artwork](/docs/licences/licences#Nativescript_Vue_Artwork).*

### Dock multiple children to the same side

The following example creates a single line of 4 elements that stretch across the entire height and width of the screen.
 
```tsx
/** @jsx createElement */

<dockLayout stretchLastChild={true} backgroundColor="#3c495e">
  <label text="left 1" dock="left" width={40} backgroundColor="#43b883"/>
  <label text="left 2" dock="left" width={40} backgroundColor="#289062"/>
  <label text="left 3" dock="left" width={40} backgroundColor="#1c6b48"/>
  <label text="last child" backgroundColor="#43b883"/>
</dockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_multiple_on_same_side.svg" />

*Licence: [NativeScript Vue Artwork](/docs/licences/licences#Nativescript_Vue_Artwork).*


## Extra props for child elements

Applies to direct children (not, e.g. grandchildren).

| Name | Type | Description |
|------|------|-------------|
| `dock` | `string` | Specifies which side to dock the element to.<br/>Valid values: `top`, `right`, `bottom`, or `left`.

## React NativeScript-specific props

None for `<dockLayout>`, nor for any of its children.
