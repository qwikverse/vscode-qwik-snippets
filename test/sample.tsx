// sample snippets

import { component$ } from '@builder.io/qwik';

export const Sample = component$(() => {
  return <span> data.property </span>
});

import { component$ } from '@builder.io/qwik';


export const Sample = component$(() => {
  const test = 'qwik';
  return <div onClick$={(event) => alert('Hello Qwik Event!')}>q-on</div>
});