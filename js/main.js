	// USANDO O VUE RESOURCE
	var ajaxPosts = {
		methods: {
			getPosts(){
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


		// USANDO AXIOS
		var ajaxPhotos = {
			methods: {
				getPhotos(){
					this.loader.photos = true;
					var url = 'https://jsonplaceholder.typicode.com/photos';
					// quando essa requisicao terminar, entao vamos realizar uma ação
					var self = this;
					axios.get(url).then(function(response){
						self.photos = response.data;
						self.loader.photos = false;
					});


					
				}
			}
		}

		var app =  new Vue({
			el:"#app",
			mixins: [ajaxPosts,ajaxPhotos],
			data: {
				titulo: "Vue js com AJAX",
				posts: [],
				photos: [],
				loader: {
					posts:false,
					photos: false
				},
				response: {
					msg: "Erro ao conectar, tente novamente mais tarde.",
					status: ""
				}
			}

		});