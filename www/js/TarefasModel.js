function getTarefas(){
	this.itens = [
	{titulo:"Item01",data:"subt",finalizada:false,texto:"This is a Facebook styled Card. The header is created from a Thumbnail List item, the content is from a card-body consisting of an image and paragraph text. The footer consists of tabs, icons aligned left, within the card-footer."},
	{titulo:"Item02",data:"subt",finalizada:false,texto:"This is a Facebook styled Card. The header is created from a Thumbnail List item, the content is from a card-body consisting of an image and paragraph text. The footer consists of tabs, icons aligned left, within the card-footer."},
	{titulo:"Item03",data:"subt",finalizada:false,texto:"This is a Facebook styled Card. The header is created from a Thumbnail List item, the content is from a card-body consisting of an image and paragraph text. The footer consists of tabs, icons aligned left, within the card-footer."}
	];

	this.remove = function(item){
		var pos = this.itens.indexOf(item);
		this.itens.splice(pos, 1);
	};

	this.add = function(item){
		this.itens.push(item);
	};
}