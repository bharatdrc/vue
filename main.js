Vue.component('task',{
	props:['col1Name','col2Name'],
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
	},

	template:`<table>
				<tr>
					<th>{{col1Name}}</th>
					<th>{{col2Name}}</th>
				</tr>
				<tr v-for="task in tasks">
					<td>{{task.name}}</td>
					<td>{{task.status}}</td>
				</tr>
			</table>`

});

new Vue({
	el: '#app',
});