<template>
	<div style=" position: fixed; top: 0; left: 0; width:100%; height:100%;">
		<div class='select-container' style="border:1px solid #e1e1e1; margin:50px 330px; width:720px; position: relative; z-index: 20;">
			<div style="background-color:#eeeeee; border-bottom:1px solid #e1e1e1; width:100%; height:40px">
				<p class="font13" style="line-height:40px; display:inline-block; padding-left:15px">选择分厂</p>
				<button @click='closeModelView' class="font13" style="float:right; line-height:40px; border:none; background-color:transparent">关闭</button>
			</div>
			<div class='search-bg' style="margin:10px 10px">
				<input class="font13" type='text' placeholder='输入分厂如上海一厂进行搜索'>
				<div style="border-bottom:1px solid #eeeeee"></div>
			</div>
			<div style="margin:10px 10px; border:1px solid #eeeeee">
				<ul>
					<li @click='selectItem(item)' v-for="(item, index) in listData" class="dib" :class="[(index+1)%3 ==0?'':'right-line',item.factoryId==curSelectFactory.factoryId? 'select':'']">
						<div class="list-item">
							<span v-if="item.factoryId==curSelectFactory.factoryId" class="check-on-icon"></span>
							<span style="line-height:30px">{{item.factoryName}}</span>
						</div>
					</li>
				</ul>
			</div>
			<div style="border-bottom:1px solid #eeeeee; margin:0px 10px"></div>
			<div style="margin:10px 10px">
				<span class="font13">您已选中：{{curSelectFactory.factoryName}}</span>
				<button class="font13 dib r" @click='closeModelView'>取消</button>
				<button @click='confirmAction' class="font13 dib r">确定</button>
			</div>
		</div>
		<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: #000; opacity: 0.5; z-index: 10;"></div>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:['listData'],
		data(){
			return{
				selected:true,
				curSelectFactory:{
					factoryId:'',
					factoryName:''
				}
			}
		},
		methods:{
			selectItem(item){
				console.log(item)
				if (this.curSelectFactory.factoryId == item.factoryId) {
					this.curSelectFactory = null
					return
				}
				this.curSelectFactory = item
			},

			closeModelView(){
				this.$emit('closeSelect')
			},

			confirmAction(){
				this.$emit('selectValue',this.curSelectFactory)
			}
		}
	}
</script>

<style type="text/css" scoped>
	.select-container{
		background-color: white;
	}
	.selected{
		background-color: yellow;
	}
	.font13{
		font-size: 13px;
	}
	.list-item{
		width: 220px;
		height: 40px;
		margin: 5px 0px 0px 10px;
	}
	li{
		line-height: 40px;
	}
	.right-line{
		border-right: 1px solid #eeeeee;
	}
	.select{
		color: blue;
	}
	button{
		border: 1px solid #eeeeee;
		margin: 0px 5px;
		padding-right: 10px;
	}
	.check-on-icon{
		display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 5px;
        background-image: url('../../images/icons.png');
        background-repeat: no-repeat;  
		background-position: -20px -80px;
	}
</style>