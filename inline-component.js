Vue.component('task',{
	props:['col1name','col2name'],
	data(){
		return{
			tasks:[
				{name:'task1',status:true},
				{name:'task2',status:false},
				{name:'task3',status:false},
				{name:'task4',status:false},
				{name:'task5',status:false},
				{name:'task6',status:true}
			]
		}
	}
});

new Vue({
	el: '#app',
});