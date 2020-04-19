---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
---
<!-- contributors: [shirakaba, rigor789, eddyverbruggen, damain, ikoevska, jlooper]
 -->

## Developing online (in the Playground)

If you don't want the hassle of installing and configuring your system before you can have a taste of Crank Native, the [NativeScript Playground](https://play.nativescript.org/?template=play-react&id=lwOLY2&v=1) has you covered (**Note:** experimental at the moment!).

But if you [already have your system ready for native development](/docs/installation), you can start by using the `tns-template-blank-crank` detailed in the next section.

## Developing on desktop (via NativeScript CLI)

Provided you already have your system ready for native development (see [Getting Started with NativeScript](https://www.nativescript.org/getting-started-with-nativescript) from the NativeScript official documentation), you can start by using the `tns-template-blank-crank` starter boilerplate:

```sh
tns create my-blank-crank --template tns-template-blank-crank

cd my-blank-crank
npm install

tns preview
# or
tns run ios --no-hmr
# or
tns run android --no-hmr
```
This set of commands performs the following operations on your system:

1. Creates a project using the `tns-template-blank-crank` template.
2. Switches to the directory containing the newly created project.
3. Installs any npm dependencies locally.
4. If executing `tns preview`, produces a QR code which can be used to preview the app on a device.
5. If executing `tns run`, builds and runs the project on all connected devices or in native emulators.