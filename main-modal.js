Vue.component('modal',{
	template:`<div  id="exampleModalLong" class="modal fade show" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" >
			  <div class="modal-dialog" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			      	<slot name="header"></slot>
			        
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="$emit('close')">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <div class="modal-body">
			        <slot>Default content</slot>
			      </div>
			      <div class="modal-footer">
			      	<slot name="footer"></slot>
			       
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