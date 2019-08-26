Vue.component('tabs',{
	template:`<div class="panel">
				<ul class="nav nav-tabs" role="tablist">
					<li v-for="tab in tabs" class="nav-item"><a role="tab" :class="tab.isActive?'nav-link active':'nav-link'" :href="tab.href"  @click="makeActive(tab)" data-toggle="tab">{{tab.name}} </a></li>
				</ul>
				<div class="tab-content">
				  	<slot></slot>
				</div>
			</div>`,
	data(){
		return {
			tabs:[]
		}
	},

	created(){
		this.tabs = this.$children;

		/*this.$children.forEach(function(tab) {
			console.log(this.tabs);
		  	tab.isActive = tab.selected;
		});*/
	},
	methods:{
		makeActive:function(selectedTab){
			/*console.log(tab.id)*/
			this.tabs.forEach(function(tab) {
			  if(selectedTab.id == tab.id)
			  {
			  	selectedTab.isActive=true;
			  }else {
			  	tab.isActive = false;
			  }
			});

		}
	}



});

Vue.component('tab',{
	template:`
				<div role="tabpanel" :id="id" :class="isActive?'tab-pane fade active show':'tab-pane fade'"><slot></slot></div>
			`,
	data(){
		return {isActive:this.selected?true:false}
	},
	props:{
		name:{required:true},
		id:{required:true},
		selected:{default:false}
	},
	computed:{
		href(){
			return "#" + this.id;
		}
	},
	mouted(){
		this.isActive = this.selected;
	}

});

new Vue({
	el: '#app'
});