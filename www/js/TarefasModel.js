function getTarefas(){
	this.itens = [];

	var lista = localStorage.getItem("listaTarefas");
	if(lista !== null){
		this.itens = angular.fromJson(lista);
	}

	this.remove = function(item){
		var pos = this.itens.indexOf(item);
		this.itens.splice(pos, 1);
	};

	this.add = function(item){
		this.itens.push(item);
	};

	this.save = function(){
		var lista = angular.toJson(this.itens);
		localStorage.setItem("listaTarefas", lista);
	};
}