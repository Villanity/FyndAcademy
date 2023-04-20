<template>
    <div>
      <child-component>
        <template v-slot:header>
          <p>This is the header content</p>
        </template>
        <template v-slot:body>
          <p>This is the body content</p>
        </template>
        <template v-slot:footer>
          <p>This is the footer content</p>
        </template>
      </child-component>
      <h3> This is outside the slot from the Parent Component</h3>
    </div>
  </template>

<script>

import ChildComponent from './ChildComponent.vue';

export default {
  name: 'ParentComponent',
  components: {
    ChildComponent
  }
}

</script>