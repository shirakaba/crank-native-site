---
id: TextView
title: TextView
---
<!-- contributors: [shirakaba, MisterBrownRSA, rigor789, TheOriginalJosh, eddyverbruggen, ikoevska] -->

`<textView>` is a UI component that shows an editable or a read-only multi-line text container. You can use it to let users type large text in your app or to show longer, multi-line text on the screen.

`<textView>` extends [`TextBase`](https://docs.nativescript.org/api-reference/classes/_ui_text_base_.textbase) and [`EditableTextBase`](https://docs.nativescript.org/api-reference/classes/_ui_editor_text_base_.editabletextbase) which provide additional properties and events.

See also:

* [Official top-level documentation](https://docs.nativescript.org/ui/components/text-view)
* [Detailed API specification](https://docs.nativescript.org/api-reference/classes/_ui_text_view_.textview)

---

```tsx
<textView text="Multi\nLine\nText" />
```

<!-- [> screenshots for=TextView <] -->

### Displaying multi-style text

To apply multiple styles to the text in your `<textView>`, you can use `<formattedString>`:

```tsx
/** @jsx createElement */

<textView editable={false}>
  <formattedString>
    <span text="You can use text attributes such as " />
    <span text="bold, " fontWeight="bold" />
    <span text="italic " fontStyle="italic" />
    <span text="and " />
    <span text="underline." textDecoration="underline" />
  </formattedString>
</textView>
```

## Props

| Name | Type | Description |
|------|------|-------------|
| `text` | `string` | Sets the value of the component.
| `hint` | `string` | Sets the placeholder text when the component is editable.
| `editable` | `boolean` | When `true`, indicates that the user can edit the contents of the container.
| `maxLength` | `number` | Sets the maximum number of characters that can be entered in the container.
| `keyboardType` | [`KeyboardType`](https://docs.nativescript.org/api-reference/modules/__nativescript_core_#keyboardtype) | Shows a custom keyboard for easier text input.<br/>Valid values: `datetime`, `phone`, `number`, `url`, or `email`.
| `returnKeyType` | [`ReturnKeyType`](https://docs.nativescript.org/api-reference/modules/__nativescript_core_#returnkeytype) | Sets the label of the return key.<br/>Valid values: `done`, `next`, `go`, `search`, or `send`.
| `autocorrect` | `boolean` | Enables or disables autocorrect.
| `onBlur` | `(args: `[`EventData`](https://docs.nativescript.org/api-reference/interfaces/__nativescript_core_.eventdata)`) => void` | Emitted when the text view loses focus.
| `onFocus` | `(args: `[`EventData`](https://docs.nativescript.org/api-reference/interfaces/__nativescript_core_.eventdata)`) => void` | Emitted when the text view gains focus.
| `onTextChange` | `(args: `[`EventData`](https://docs.nativescript.org/api-reference/interfaces/__nativescript_core_.eventdata)`) => void` | Emitted when the text changes.

<!-- | `onReturnPress` | `(args: `[`EventData`](https://docs.nativescript.org/api-reference/interfaces/__nativescript_core_.eventdata)`) => void` | Emitted when the return key is pressed. -->

## Native component

| Android | iOS |
|---------|-----|
| [`android.widget.EditText`](https://developer.android.com/reference/android/widget/EditText.html) | [`UITextView`](https://developer.apple.com/documentation/uikit/uitextview)
