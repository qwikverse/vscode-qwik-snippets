
<p align="center">
  <br>
  <img width="400" src="./assets/qwik-snippets.png">
  <br>
</p>

<h1 align='center'>Qwik Snippets</h1>

<div align='center'>
Language and Ecosystem Support for <a href='https://github.com/BuilderIO/qwik'>Qwik</a>.
<br><br>
<a href='http://badge.fury.io/js/vscode-qwik-snippets'>
<img src='https://badge.fury.io/js/vscode-qwik-snippets.svg' alt='Qwik Snippets'>
</a>
</div>

<details>
<summary>Table of Contents</summary>

<!-- - [Qwik Essentials](#qwik-essentials) -->
- [Usage](#usage)
- [Qwik Snippets](#qwik-snippets)
  - [Components](#components)
  - [Events](#events)
  - [Stores](#stores)
  - [Props](#props)
  - [Reactivity](#reactivity)
  - [Context](#context)
  - [Lifecycle Hooks](#lifecycle-hooks)
  - [Projection](#projection)
  - [Styling](#styling)
  - [Optimizer](#optimizer)
  - [Composing New APIs](#composing-new-apis)
- [Qwik City Snippets](#qwik-city-snippets)
  - [Routing](#routing)
  - [Layout](#layout)
  - [Data](#data)
  - [Authoring Content](#authoring-content)
  - [Integrations](#integrations)
  - [Prefetching](#prefetching)
  - [Static Site Generation](#static-site-generation)
  - [Head](#head)
- [Mitosis Snippets](#mitosis-snippets)
- [Partytown Snippets](#partytown-snippets)
- [Installation](#installation)
- [Contributing](#contributing)
- [Related Links](#related-links)
- [Issues](#issues)

</details>
<br>

**Updated for Qwik 0.11.1 release**

This extension for Visual Studio Code adds snippets for Qwik for TypeScript and MDX.

![Use Extension](assets/use-extension.gif)

See the [CHANGELOG](CHANGELOG.md) for the latest changes

<!-- # Qwik Essentials

Check out the [Qwik Essentials extension](https://marketplace.visualstudio.com/items?itemName=johnreemar.qwik-essentials) for more great extensions for developing with Typescript and Qwik. -->

<br>

## Usage

Type part of a snippet(for example: `q-c`, press `enter`, and the snippet unfolds.

Alternatively, press `Ctrl`+`Space` (Windows, Linux) or `Cmd`+`Space` (macOS) to activate snippets from within the editor.

<br>

##  Qwik Snippets

### Components
> Components are the building blocks of a Qwik application. Components are declared using component$() and at a minimum need to return a JSX Element.

| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `q-component`                | Basic Qwik Component                                                 |
| `q-bind`                     | Add binding expression                                               |
| `q-inline-component`         | Qwik  inline component                                               |
| `q-component-compose`        | Qwik Composing Components with child component                       |
| `q-component-with-binding`   | Qwik Component with binding                                          |
| `q-component-with-inline-component` | Qwik Component with inline component                          |

### Events
  
> Declaring, binding, and triggering events.

| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `q-onClick`                  | Add an onClick event                                                 |
| `q-onBlur`                   | Add an onBlur event                                                  |
| `q-preventdefault`           | Add prevent default for click event                                  |
| `q-useOn`                    | Add an event on specific event on current host element               |
| `q-useOnDocument`            | Add an event on specific event on document.                          |
| `q-useOnWindow`              | Add an event on specific event on window.                            |
### Stores


| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `q-useStore`                | Add useStore()                       |
| `q-component-with-store-and-props` | Qwik component with props and store   |
### Props
| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `q-component-with-props`     | Qwik component with props           |
### Reactivity
| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `q-useSignal`                | useSignal() declaration             |
| `q-useWatch`                 | useWatch$() function hook          |
| `q-useResource`              | useResource$() declaration          |
### Context
| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `q-createContext`   |     This creates a serializable ID for the context. Make sure that this id is unique within your application       |
| `q-useContextProvider`   |     At a parent component call this method to publish the context value. All children (and grandchildren) that are descendants of this component will be able to retrieve the context.       |
| `q-useContext`   |     To retrieve the context and use it in any component.       |
### Lifecycle Hooks
| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `q-useMount`                 | `useMount$()` function hook. Hook that executes a callback when the component is mounted into the rendering tree.                           |
| `q-useServerMount`           | `useServerMount$()` function hook: Hook that executes on the component mount when in a server environment. This is useful because server often has different APIs for retrieving data.                           |
| `q-useClientEffect`          | Use `useClientEffect$()` to execute code after the component is resumed. This is useful for setting up timers or streams on the client when the application is resumed.       |
| `q-useWatch`                 | Use `useWatch$()` to execute a function before the initial render and whenever the tracking values change. The function executes before rendering, but it can't delay rendering, so if `useWatch$()` is asynchronous, the rendering will happen before the `useWatch$()` is fully executed.            |
| `q-useRef`                 | Use `useRef()` to get a hold of DOM elements created by the component.     |
| `q-useOn`                  | Add an event on specific event on current host element   |
| `q-useOnDocument`            | Add an event on specific event on document.          |
| `q-useOnWindow`              | Add an event on specific event on window.         |
### Projection
| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `q-basic-projection`         | Projection is a way of passing content to a child component that in turn controls where the content is rendered. Projection is a collaboration between the parent and child component. The parent component decides what is the content that needs to be rendered, child component decides where and if the content should be rendered.                                      |
### Styling
| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `q-component`                | WIP                                                 |
### Optimizer
| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `q-component`                | WIP                                                 |
### Composing New APIs
| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `q-component`                | WIP                                                 |
<br>

## Qwik City Snippets


### Routing
| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `q-component`                | WIP                                                 |
### Layout
| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `q-component`                | WIP                                                 |

### Data
| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `q-component`                | WIP                                                 |
### Authoring Content
| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `q-component`                | WIP                                                 |

### Integrations
| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `q-component`                | WIP                                                 |
### Prefetching
| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `q-component`                | WIP                                                 |
### Static Site Generation
| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `q-component`                | WIP                                                 |
### Head
| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `q-component`                | WIP                                                 |

<br>

## Mitosis Snippets


| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `qm-xxx`                | WIP                                                            |

<br>

## Partytown Snippets

| Snippet                      | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `qp-xxx`                | WIP                                                            |



## Installation

1. Install Visual Studio Code 1.10.0 or higher
1. Launch Code
1. From the command palette `Ctrl`-`Shift`-`P` (Windows, Linux) or `Cmd`-`Shift`-`P` (OSX)
1. Select `Install Extension`
1. Choose the extension, Qwik Snippets
1. Reload Visual Studio Code

## Contributing

We love contributions! Check out our [contributing docs](./contributing/CONTRIBUTING.md) to get more details into how to run this project, the examples, and more all locally.


## Related Links

- [Qwik Docs](https://qwik.builder.io/)
- [Discord](https://qwik.builder.io/chat)
- [Qwik GitHub](https://github.com/BuilderIO/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)
- [Partytown](https://partytown.builder.io/)
- [Mitosis](https://github.com/BuilderIO/mitosis)
- [Builder.io](https://www.builder.io/)

## Issues

Have an issue with using the snippets, or want to suggest new snippets to help make your development life better? Log an issue in our [issues](https://github.com/qwik-design/vscode-qwik-snippets/issues) tab! You can also browse older issues and discussion threads there to see solutions that may have worked for common problems.