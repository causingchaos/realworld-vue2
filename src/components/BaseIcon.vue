<template>
  <div class="icon-wrapper">
    <svg class="icon" width="24" height="24">
      <use v-bind="{'xlink:href':'/feather-sprite.svg#'+name}" />
    </svg>
    <slot></slot>
  </div>
</template>

<script>
import feather from 'feather-icons';

export default {
  // note adding v-html="svg" doesn't work (exact code from tutorial)
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
  },
  computed: {
    svg() {
      console.log(this.name);
      return feather.icon[this.name].toSvg({
        class: 'icon',
        width: this.width,
        height: this.height,
      });
    },
  },
  mounted() {
    console.log(this.name);
  },
};
</script>

<style scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
  font-weight: 600;
  margin-right: 6px;
}
.icon {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
</style>
