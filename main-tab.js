Vue.component('tabs',{
	template:`<div class="panel">
				<ul class="nav nav-tabs" role="tablist">
					<li v-for="tab in tabs">{{tab.name}}</li>
				</ul>
				<div class="tab-content">
				  	<slot></slot>
				</div>
			</div>`,
	data(){
		return {tabs:[]}
	},

	created(){
		this.tabs = this.$children;
		/*this.$children.forEach(myFunction(item, index) {
		   console.log(item);
		});*/
		this.$children.forEach(function(tab) {
		  console.log(tab.name);
		});
	}

});

Vue.component('tab',{
	template:`
				<div role="tabpanel" class="tab-pane fade" :id="ID"><slot></slot></div>
			`,
	props:['ID']

});

new Vue({
	el: '#app'
});