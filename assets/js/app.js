var ContactManager = new Marionette.Application();

ContactManager.addRegions({
    mainRegion: "#main-region"
});

ContactManager.navigate = function(route, options){
	options || (options={});
	Backbone.history.navigate(route,options);
};

ContactManager.getCurrentRoute = function(){
	return Backbone.history.fragment;
};

ContactManager.on("initialize:after", function(){
	var self = this;
	if(Backbone.history){
		Backbone.history.start();
		if(self.getCurrentRoute() === ""){
			ContactManager.trigger("contacts:list");
		}
	}
});
