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
		}

		return mongoDB.MongoDBNameList;
	}

	mongoBro.prototype.writeMongoObj = function(str){
		localStorage.MongoBrowserDB = JSON.stringify(str);
		return this;
	}

	mongoBro.prototype.create = function(dbname) {
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
		mongoDB.MongoDBUpdated = true;

		return this;
	}

	mongoBro.prototype.isExists = function(dbname) {
		var databasesNameList = this.getMongoObj();
		
		for (var i = 0; i < databasesNameList.length; i++) {
			if(dbname === databasesNameList[i]){
				return true;
			}
		}

		return false;
	}

	mongoBro.prototype.useCollection = function(tableName) {

	}

	mongoBro.prototype.removeAllDatabases = function() {
		localStorage.MongoBrowserDB = '';
	}

	window.mongoBro = new mongoBro();

})(window);

mongoBro.removeAllDatabases();

console.log(mongoBro.create('test').getDatabases());
