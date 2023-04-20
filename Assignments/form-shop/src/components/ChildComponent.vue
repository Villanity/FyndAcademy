<template>
    <div>
      <h1>Child Component</h1>
      <slot name="header"></slot>
      <h3>This is Outside the Slot in the Child Component</h3>
      <slot name="body"></slot>
      <slot name="footer"></slot>
    </div>
  </template>

<script>

export default {
  name: 'ChildComponent',
}

</script>