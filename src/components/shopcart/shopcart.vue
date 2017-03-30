<template>
<div>
	<div class="shopcart">
      <div class="content" >
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" >
              <i class="icon-shopping_cart" ></i>
            </div>
            <div class="num" >1</div>
          </div>
          <div class="price" >￥0</div>
          <div class="desc">另需配送费￥4元</div>
        </div>
        <div class="content-right" >
          <div class="pay" >
            ￥20远起送
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script type="text/ecmascript-6">
export default{}

</script>
<style lang="stylus"rel="stylesheet/stylus">
.shopcart
	position:fixed
	left:0
	bottom:0
	width:100%
	height:48px
	.content
		width:100%
		height:100%
		padding:12px 0 12px 12px
		display:flex
		background:#141d27
		font-size:0
		color:rgba(255,255,255,0.4)
		box-sizing:border-box
		.content-left
			flex:1
			.logo-wrapper
				position:absolute
				top:-10px
				left:12px
				.logo
					width:44px
					height:44px
					border:6px solid #14172d
					background:rgba(255,255,255,0.4)
					color:rgba(0,0,0,0.2)
					border-radius:44px
					.icon-shopping_cart
						font-size:44px
		 	.price
		 		border-right:1px solid rgba(255,255,255,0.1)
		 		padding:0 12px 0 18px
		 		font-size:0
				color:rgba(255,255,255,0.4)
		 	.desc
		 		padding:0 12px
		 		font-size:0
				color:rgba(255,255,255,0.4)
		.content-right
			flex:1
			padding:0 8px
			font-size:12px
	
</style>
