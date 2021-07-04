<template>
  <div>
    <ClientOnly>
      <slot name="before"></slot>
      <span ref="countUp"></span>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: "CountUp",
  props: {
    startVal: {
      type: Number,
      default: 0,
    },
    endVal: {
      type: Number,
      // 值需要用户自己填入，并且是必须的
      require: true,
    },
    decimalPlaces: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 2,
    },
    delay: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      counter: null,
    };
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.counter.reset();
    this.counter = null;
  },
  methods: {
    init() {
      import("countup.js").then((module) => {
        // use code
        this.$nextTick(() => {
          this.counter = new module.CountUp(this.$refs.countUp, this.endVal, {
            startVal: this.startVal,
            decimalPlaces: this.decimalPlaces,
            duration: this.duration,
          });
          setTimeout(() => {
            this.counter.start();
          }, this.delay);
        });
      });
    },
  },
};
</script>

<style>
</style>