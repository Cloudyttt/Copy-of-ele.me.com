<template>
    <div class="icon"  v-bind:class="setSize">
      <span v-bind:class="itemClass[supportsType]" class="icon-item"></span>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    iconSize: {
      type: Number
    },
    supportsType: {
      type: Number
    }
  },
  data() {
    return {
      itemClass: ["decrease", "discount", "special", "invoice", "guarantee"]
    };
  },
  computed: {
      setSize() {
          // console.log('图标尺寸类型：' + 'size-' + this.iconSize)
          return 'size-' + this.iconSize;
      }
  }
};
</script>
<style type="text/css">
 .icon-item {
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: top;
 }
.size-12 .icon-item {
  width: 12px;
  height: 12px;
  background-size: 12px 12px;
  margin-right: 4px;
}
.size-16 .icon-item {
  width: 16px;
  height: 16px;
  background-size: 16px 16px;
  margin-right: 6px;
}
.decrease {
  background-image: url(decrease_1@2x.png);
}
.discount {
  background-image: url(discount_1@2x.png);
}
.special {
  background-image: url(special_1@2x.png);
}
.invoice {
  background-image: url(invoice_1@2x.png);
}
.guarantee {
  background-image: url(guarantee_1@2x.png);
}
</style>
