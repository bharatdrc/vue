<template>
<div>
<p>sxsssasa111 : {{test}} sasc :{{count}}</p>
<button @click="count +=1">add</button>
</div>
</template>

<script>

export default {

  data(){
  	return {count: 0,test:"dede121"};
  },
  methods:{
  	addCount:function(){
  		this.count =	this.count+1;
  	}
  }

}
</script>