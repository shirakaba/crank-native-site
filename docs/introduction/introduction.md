---
id: introduction
title: Introduction
sidebar_label: Introduction
---
<!-- contributors: [shirakaba, rigor789, tjvantoll, charles-salmon] -->

*Note: This documentation is adapted from the sublime [NativeScript Vue docs](https://nativescript-vue.org), so first of all, a big thank you to the NativeScript Vue community for their hard work providing the foundation for this documentation. Contributors are credited in the source.*

<!-- Check the [documentation](https://docusaurus.io) for how to use Docusaurus. -->

## What is [NativeScript](https://www.nativescript.org/)?

NativeScript is an open source framework for building truly native mobile applications using JavaScript (or TypeScript).

## What is [Crank.js](https://crank.js.org/)?

Crank is a library for developing user interfaces. It allows you to write JSX-driven components with functions, promises and generators.

All components in Crank are just functions or generator functions. No classes, hooks, proxies or template languages are needed.

## What is Crank Native?

Crank Native is a Crank custom renderer that allows you to describe a NativeScript app using Crank's 'way of thinking'.

It was created by Jamie Birch ([GitHub](https://github.com/shirakaba), [Twitter](https://twitter.com/LinguaBrowse)).

## Why would you use this (and not React Native)?

**In brief:** Crank Native puts native access at the front of the developer experience.

React Native has a different architecture (the JavaScript Virtual Machine runs on a separate thread to the main/UI thread), and – at the time of writing – it relies on a JSON-serialised bridge to communicate between the native and JS contexts.

This architecture makes native access a chore – any native access from the JS context is necessarily asynchronous, and a lot of boilerplate is needed to set up a JSON-compatible communication interface between the two contexts. Any alterations to native code also require a recompile of the app.

NativeScript (and therefore Crank Native), by comparison, runs its JS VM on the main thread, and is bridgeless, with JS-native bindings to all the platform's APIs. This means that we can access native functionality synchronously simply by calling it via JS. Native development becomes even faster thanks to JS facilitating hot reload.

Crank Native furthermore can render synchronously, which solves a huge number of problems that React Native suffers from.

## How is its compatibility with the React ecosystem?

This has yet to be explored thoroughly, but there compatibility is likely to be limited to a very small number of cases if any, and will likely require some refactoring before being compatible.

## Want to get involved?

Crank Native is an open-source project and contributions are very much encouraged. Join us on the `#crank` channel on the [NativeScript Community Slack](https://www.nativescript.org/slack-invitation-form) to chat.

## Who supports it?

Nobody; it's purely been a labour of love. A donation page may pop up at some point in the future, however.

## Is it production-ready?
​
It is feature-equivalent with NativeScript Core, which itself is production-ready; however, Crank is very new indeed. Until users start picking it up and identifying holes in it, we can't be sure.