window.Event = new class {
  constructor() {
    this.event = new Vue();
  }

  fire(event,data=null){
  	this.event.$emit(event)
  }

  listener(event,callback){
  	this.event.$on(event,callback)
  }

}

Vue.component('task',{
	template:`<input placeholder="enter text" @blur="onBlurEmit"/>`,
	methods:{
		onBlurEmit:function(){

			Event.fire('jobOpen');
		}
	}

});

new Vue({
	el: '#app',
	created(){
		Event.listener('jobOpen',function(){
			alert('job closed.!!');
		});
	}

});