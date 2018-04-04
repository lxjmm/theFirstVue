 <template>
  <div>
  	<div class="boxmin">
	   	<dl>
	   		<dt>
	   			<img src="../assets/free.jpg"/>
	   		</dt>
	   		<dd>
	   			<b>❤自由第一!❤</b>
	   		</dd>
	   	</dl>
	   	<dl>
	   		<dt>
	   			<img src="../assets/hu.jpg"/>
	   		</dt>
	   		<dd>
	   			<b>❤胡歌❤</b>
	   		</dd>
	   	</dl>
	</div>
	<div class="boxmin">
	   	<dl>
	   		<dt>
	   			<img src="../assets/first.jpg"/>
	   		</dt>
	   		<dd>
	   			<b>❤beautiful girl!❤</b>
	   		</dd>
	   	</dl>
	   	<dl>
	   		<dt>
	   			<img src="../assets/zhangjie.jpg"/>
	   		</dt>
	   		<dd>
	   			<b>❤Mr zhangjie❤</b>
	   		</dd>
	   	</dl>
	</div>
  </div>
</template>
<script>
	export default{
		name:'guangJie'
	}
</script>
<style scoped>
  div.boxmin{
  	display:-webkit-flex;
  	display:flex;
  	margin:auto;
  	width:99%;
	height:150px;
/*   	-webkit-flex-direction:column;
flex-direction:column; */
  }
  dl{
	-webkit-flex:2;
	height:100%;
  }
  dl dt{
	height:85%;
  }
  dl dd{
  	width:100%;
	height:15%;
	line-height:22px;
	background:pink;
	text-align:center;
	color:#fff;
	font-size:12px;
  }
  dl dd b{
  	font-weight:normal;
  }
  dl dt img{
	width:100%;
	height:100%;
	display:inline-block;
  }
</style>