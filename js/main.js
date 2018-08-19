	var mixin = {
		methods: {
			getUsers(){
				this.loader.posts = true;
				var url = 'https://jsonplaceholder.typicode.com/posts';
					// quando essa requisicao terminar, entao vamos realizar uma ação
					this.$http.get(url).then(function(response){
						this.posts = response.body;
					}, function(err){
						console.log("Deu o seguinte erro:");
						console.log(err);
						this.response.status = "error";
					})
					.finally(function(){
						this.loader.posts = false;
					});
				}
			}
		}

		var app =  new Vue({
			el:"#app",
			mixins: [mixin],
			data: {
				titulo: "Vue js com AJAX",
				posts: [],
				loader: {
					posts:false,
				},
				response: {
					msg: "Erro ao conectar, tente novamente mais tarde.",
					status: ""
				}
			}

		});