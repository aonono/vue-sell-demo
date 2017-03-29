<template>
	<span class="icon" :class="classType"></span>
</template>
<script type="text/ecmascript-6">
export default {
props: {
  iconType: {
    type: Number
  },
  iconSize: {
    type: Number
  }
},
created() {
  this.classMap = [
  ['decrease1', 'discount1', 'special1', 'invoice1', 'guarantee1'],
  ['decrease2', 'discount2', 'special2', 'invoice2', 'guarantee2']
  ]
},
computed: {
  classType: function () {
    if (this.iconSize === 24){
      return this.classMap[0][this.iconType]
    } else if (this.iconSize === 32){
      return this.classMap[1][this.iconType]
    }
  }
}
}

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin";
.icon
    display: inline-block
    vertical-align: top
    width: 12px
    height: 12px
    margin-right: 4px
    background-size: 12px 12px
    background-repeat: no-repeat
    &.decrease1
      bg-image('./img/decrease_1')
    &.discount1
      bg-image('./img/discount_1')
    &.guarantee1
      bg-image('./img/guarantee_1')
    &.invoice1
      bg-image('./img/invoice_1')
    &.special1
      bg-image('./img/special_1')
    &.decrease2
      bg-image('./img/decrease_2')
    &.discount2
      bg-image('./img/discount_2')
    &.guarantee2
      bg-image('./img/guarantee_2')
    &.invoice2
      bg-image('./img/invoice_2')
    &.special2
      bg-image('./img/special_2')
</style>
