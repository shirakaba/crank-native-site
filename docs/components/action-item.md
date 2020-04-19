---
id: ActionItem
title: ActionItem
---
<!-- contributors: [shirakaba, rigor789, ikoevska] -->

`<actionItem>` is a UI component that lets you add action buttons to the `<actionBar>` component.

See also:

* [Official top-level documentation](https://docs.nativescript.org/ui/components/action-bar#actionitem)
* [Detailed API specification](https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionitem)
* [`<actionBar>`](/docs/components/action-bar)
* [`<navigationButton>`](/docs/components/navigation-button)

---

#### Basic use

```tsx
/** @jsx createElement */

<actionBar title="My App">
  <actionItem
    onTap={onTapShare}
    ios={{
      systemIcon: 9,
      position: "left"
    }}
    android={{
      systemIcon: "ic_menu_share",
      position: "actionBar"
    }}
  />
  <actionItem
    onTap={onTapDelete}
    ios={{
      systemIcon: 16,
      position: "right"
    }}
    android={{
      position: "popup"
    }}
    text="delete"
  />
</actionBar>
```

#### Conditionally showing action items

You can use the `visibility` prop (inherited from `View`) to show `<actionItem>` components based on a condition.

```tsx
/** @jsx createElement */

<actionBar title="My App">
  <actionItem
    onTap={onTapEdit}
    visibility={isEditing ? "hidden" : "visible"}
    ios={{
      systemIcon: 2,
      position: "right"
    }}
    android={{
      systemIcon: "ic_menu_edit"
    }}
  />
  <actionItem
    onTap={onTapSave}
    visibility={isEditing ? "visible" : "hidden"}
    ios={{
      systemIcon: 3,
      position: "right"
    }}
    android={{
      systemIcon: "ic_menu_save"
    }} />
  <actionItem
    onTap={onTapCancel}
    visibility={isEditing ? "visible" : "hidden"}
    ios={{
      systemIcon: 1,
      position: "ic_menu_close_clear_cancel"
    }}
  />
</actionBar>
```

## Props

| Name | Type | Description |
|------|------|-------------|
| `ios.systemIcon` | `number` | Sets the icon of the `ActionItem` for iOS. The value must be a number from the [`UIBarButtonSystemItem` enumeration](https://developer.apple.com/documentation/uikit/uibarbuttonitem/systemitem).
| `android.systemIcon` | `string` | Sets the icon of the `ActionItem` for Android. The value must be the name of a [drawable resource](https://developer.android.com/guide/topics/resources/drawable-resource).
| `ios.position` | `string` | Sets the position of the `ActionItem` within the `ActionBar` for iOS.<br/>Valid values: `left` or `right`.<br/>Default value is `left`.
| `android.position` | `string` | Sets the position of the `ActionItem` within the `ActionBar` for Android.<br/>Valid values:<br/>`actionBar` (places the item in the ActionBar)<br/>`popup` (places the item in the options menu; renders items as text)<br/>`actionBarIfRoom` (places the item in the `ActionBar` if there is enough room for it there; otherwise, placess it in the options menu)<br/>Default value is `actionBar`.
| `onTap` | `(args: `[`EventData`](https://docs.nativescript.org/api-reference/interfaces/__nativescript_core_.eventdata)`) => void` | Emitted when the `ActionItem` is tapped.

## Native component

| Android | iOS |
|---------|-----|
| [`android.widget.Toolbar`](https://developer.android.com/reference/android/widget/Toolbar.html) | [`UINavigationItem`](https://developer.apple.com/documentation/uikit/uinavigationitem)