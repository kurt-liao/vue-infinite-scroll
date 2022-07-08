# Vue-Infinite-Scroll

The directive of infinite-scroll for vue.

<div align="center">
<img src="https://img.shields.io/npm/v/@kurtliao/vue-infinite-scroll?style=for-the-badge" alt="0.0.1"/>
<img src="https://img.shields.io/npm/l/@kurtliao/vue-infinite-scroll?style=for-the-badge" alt="MIT" />

<img src="https://img.shields.io/bundlephobia/min/@kurtliao/vue-infinite-scroll?style=for-the-badge" />

</div>

## Installation

```
npm install vue-infinite-scroll

or

yarn add vue-infinite-scroll
```

## Usage

```js

import { createApp } from "vue";
import App from "./App.vue";
import InfiniteScroll from "@kurtliao/vue-infinite-scroll";

const app = createApp(App);

app.directive("InfiniteScroll", InfiniteScroll);

...
```
