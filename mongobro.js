(function(window){

	var mongoDB = {
		currentDBName : '',
		MongoDBNameList : '',
		MongoDBUpdated : false
	}

	function mongoBro(){
		if(!this.isMongoNull()){

		}else{
			localStorage.MongoBrowserDB = '';
		}
	}

	mongoBro.prototype.broadcastMongoDbUpdated = function() {
		mongoDB.MongoDBUpdated = true;
	}

	mongoBro.prototype.broadcastMongoDbNoUpdated = function() {
		mongoDB.MongoDBUpdated = false;
	}

	mongoBro.prototype.getDatabases = function() {
		return this.getMongoObj();
	}

	mongoBro.prototype.getMongoCount = function() {
		return this.getMongoObj().length;
	}

	mongoBro.prototype.isMongoNull = function() {
		return typeof localStorage.MongoBrowserDB == 'undefined'?true:(localStorage.MongoBrowserDB == ''?true:false);
	}

	mongoBro.prototype.getMongoObj = function(){
		if(this.isMongoNull()){
			return null;
		}

		if(mongoDB.MongoDBNameList === '' || mongoDB.MongoDBUpdated === true){
			mongoDB.MongoDBNameList = JSON.parse(localStorage.MongoBrowserDB);
			this.broadcastMongoDbNoUpdated();

		}

		return mongoDB.MongoDBNameList;
	}

	mongoBro.prototype.writeMongoObj = function(str) {
		localStorage.MongoBrowserDB = JSON.stringify(str);
		this.broadcastMongoDbUpdated();
		return this;
	}

	mongoBro.prototype.createDB = function(dbname) {
		if(dbname === null || dbname === '') {
			return false;
		}

		var databasesExists = this.getMongoObj();

		if(databasesExists == null) {
			databasesExists = {};
			databasesExists[0] = dbname;
			databasesExists.length = 1;
		}else{
			if(!this.isExists()){
				databasesExists[databasesExists.length] = dbname;
				databasesExists.length += 1;
			}
		}

		mongoDB.currentDBName = dbname;

		this.writeMongoObj(databasesExists);

		return this;
	}

	mongoBro.prototype.updateDB = function(original_name,new_name){

		var databasesNameList = this.getMongoObj();

		var nameId=this.isExists(original_name);

		if(!nameId){
			return false;
		}else{
			databasesNameList[nameId] = new_name;
			this.writeMongoObj(databasesNameList);
			return this;
		}
			
	}

	mongoBro.prototype.isExists = function(dbname) {
		var databasesNameList = this.getMongoObj();

		for (var i = 0; i < databasesNameList.length; i++) {
			if(dbname === databasesNameList[i]){
				return i;
			}
		}

		return false;
	}

	mongoBro.prototype.use = function(dbname) {
		mongoDB.currentDBName = dbname;
		return this;
	}

	mongoBro.prototype.getCurrentDBName = function(){
		return mongoDB.currentDBName;
	}

	mongoBro.prototype.removeDB = function(dbname) {

		var nameId = this.isExists();

		if(!nameId){
			return false;
		}

		var databasesNameList = this.getMongoObj();

		delete databasesNameList[nameId];
		this.writeMongoObj(databasesNameList);

		return this;

	}

	mongoBro.prototype.removeAllDatabases = function() {
		localStorage.MongoBrowserDB = '';
		return this;
	}

	window.mongoBro = new mongoBro();

})(window);

mongoBro.removeAllDatabases();

console.log(mongoBro.createDB('test').getDatabases());

console.log(mongoBro.createDB('fuck').getDatabases());

console.log(mongoBro.updateDB('fuck','bitch').getDatabases());

console.log(mongoBro.getCurrentDBName());
