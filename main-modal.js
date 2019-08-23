Vue.component('modal',{
	template:`<div  id="exampleModalLong" class="modal fade show" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" >
			  <div class="modal-dialog" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="$emit('close')">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <div class="modal-body">
			        ...
			      </div>
			      <div class="modal-footer">
			        <button type="button" class="btn btn-secondary" data-dismiss="modal" v-on:click="$emit('close')">Close</button>
			        <button type="button" class="btn btn-primary" >Save changes</button>
			      </div>
			    </div>
			  </div>
			</div>`

});

new Vue({
	el: '#app',
	data:{
		showModel:false,
	}
});