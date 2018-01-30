This is an example repository demonstrating how to use vue-custom-element with TypeScript.

To get started:

```
npm install
npm run dev
```

Then visit `localhost:8081`.

This project was generated using vue-cli with the webpack template. Things to note:

- The `sfc.d.ts` file solves a well-known issue where TypeScript does not understand what `*.vue` files are.
- `Vue.customElement` expects an argument of type `ComponentOptions<Vue>`, so imported Vue single-file components must be cast to `ComponentOptions<Vue>` or `any` (the first one is preferred).
- The entry file is `src/main.ts`. The component being used as a Vue Custom Element is `src/example-component.vue`. `src/main-component.vue` is a simple wrapper component that is mounted on the HTML page.