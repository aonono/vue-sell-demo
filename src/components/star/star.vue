<template>
	<div class="star" :class="starType">
    	<span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" key="index"></span>
  	</div>
</template>
<script type="text/ecmascript-6">
const LENGTH = 5
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'
export default{
props: {
  score: {
    type: Number
  },
  size: {
    type: Number
  }
},
computed: {
  starType() {
    return 'star-' + this.size
  },
  itemClasses() {
    let result = []
    let integer = Math.floor(this.score) // 改变算法
    let hasDecimal = (this.score - integer) >= 0.5
    for (let i = 0; i < integer; i++) {
      result.push(CLS_ON)
    }
    if (hasDecimal) {
      result.push(CLS_HALF)
    }
    while (result.length < LENGTH) {
      result.push(CLS_OFF)
    }
    return result
  }
}

}

</script>
<style lang="stylus"rel="stylesheet/stylus">
 @import "../../common/stylus/mixin.styl"

  .star
    font-size: 0
    .star-item
      display: inline-block
      background-repeat: no-repeat
    &.star-48
      .star-item
        width: 20px
        height: 20px
        margin-right: 22px
        background-size: 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./img/star48_on')
        &.half
          bg-image('./img/star48_half')
        &.off
          bg-image('./img/star48_off')
    &.star-36
      .star-item
        width: 15px
        height: 15px
        margin-right: 6px
        background-size: 15px 15px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./img/star36_on')
        &.half
          bg-image('./img/star36_half')
        &.off
          bg-image('./img/star36_off')
    &.star-24
      .star-item
        width: 10px
        height: 10px
        margin-right: 3px
        background-size: 10px 10px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./img/star24_on')
        &.half
          bg-image('./img/star24_half')
        &.off
          bg-image('./img/star24_off')
</style>
