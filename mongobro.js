(function(window){

	var isLocalStorageNull = function(key) {
		return typeof localStorage[key] == 'undefined'?true:(localStorage[key] == ''?true:false);
	};

	var mongoDB = {
		currentDBName : '',
		MongoDBNameList : '',
		MongoDBUpdated : false
	};

	var mongoDBTable = {
		MongoDBTableList : '',
		mongoDBTableUpdated : false,
	};

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
			if(this.isExists() === false){
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

		if(nameId === false){
			return false;
		}else{
			databasesNameList[nameId] = new_name;
			this.writeMongoObj(databasesNameList);
			this.setCurrentDBName(new_name);
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

		this.setCurrentDBName(dbname);

		if(this.isExists(dbname) === false){
			this.setCurrentDBName('');
		}
		
		return this;
	}

	mongoBro.prototype.getCurrentDBName = function(){
		return mongoDB.currentDBName;
	}

	mongoBro.prototype.setCurrentDBName = function(dbname){
		mongoDB.currentDBName = dbname;
	}

	mongoBro.prototype.removeDB = function(dbname) {

		var nameId = this.isExists(dbname);

		if(nameId === false){
			return false;
		}

		var databasesNameList = this.getMongoObj();

		delete databasesNameList[nameId];
		databasesNameList.length-=1;
		this.writeMongoObj(databasesNameList);

		if(this.getCurrentDBName() === dbname){
			this.setCurrentDBName('');
		}

		return this;

	}

	mongoBro.prototype.removeAllDatabases = function() {
		localStorage.MongoBrowserDB = '';
		this.removeAlltableList();
		return this;
	}

	mongoBro.prototype.isTableNull = function() {
		return isLocalStorageNull('MongoDBTableList');
	}

	mongoBro.prototype.writeMongoTableDB = function(obj) {
		localStorage['MongoDBTableList'] = JSON.stringify(obj);
		this.broadcastMongoDbTableUpdated();
	}

	mongoBro.prototype.addTableList = function(database,tableName) {

		if(tableName === null || tableName === '') {
			return false;
		}

		var tableExists = this.getTableList();

		if(tableExists === null || tableExists === '') {
			tableExists = {};
			tableExists.length = 1;
			tableExists[0] = {
				tableName : tableName,
				database : database
			};
		}else{
			tableExists[tableExists.length] = {
				tableName : tableName,
				database : database				
			};
			tableExists.length += 1;
		}

		console.log(tableExists);

		this.writeMongoTableDB(tableExists);

		return this;

	}

	mongoBro.prototype.removeTableList = function(tableName) {

		var tableNameId = this.isTableExists(tableName);

		if(tableNameId === false) {
			return false;
		}

		var tableList = this.getTableList();

		if(tableList === null) {
			delete tableList[tableNameId];
			this.writeMongoTableDB(tableList);
		}

		return this;

	}

	mongoBro.prototype.removeAlltableList = function(){

		localStorage['MongoDBTableList'] = '';

		return this;
	}

	mongoBro.prototype.updateTableList = function(oldName,newName) {
		
		if(oldName === null || oldName === '' || newName === null || newName === ''){
			return false;
		}

		var tableNameId = this.isTableExists(oldName);

		if(tableNameId === false) {
			return false;
		}

		var tableList = this.getTableList();

		tableList[tableNameId] = newName;
		
		this.writeMongoTableDB(tableList);

		return this;
	}

	mongoBro.prototype.getTableList = function() {

		if(this.isTableNull()) {
			return null;
		}

		if(this.isTableUpdated()) {
			var tableList = JSON.parse(localStorage['MongoDBTableList']);
			mongoDBTable.MongoDBTableList = tableList;
			this.broadcastMongoDbTableNoUpdated();
		}else{
			if(mongoDBTable.MongoDBTableList === ''){
				var tableList = JSON.parse(localStorage['MongoDBTableList']);
				mongoDBTable.MongoDBTableList = tableList;
				this.broadcastMongoDbTableNoUpdated();	
			}
			var tableList = mongoDBTable.MongoDBTableList;
		}
		
		return tableList;

	}

	mongoBro.prototype.isTableUpdated = function() {
		return mongoDBTable.mongoDBTableUpdated;
	}

	mongoBro.prototype.broadcastMongoDbTableUpdated = function() {
		mongoDBTable.mongoDBTableUpdated = true;
	}

	mongoBro.prototype.broadcastMongoDbTableNoUpdated = function() {
		mongoDBTable.mongoDBTableUpdated = false;
	}

	mongoBro.prototype.createTable = function(dbname,tableName,data) {

		dbname = dbname === null ? getCurrentDBName() : dbname;

		if(dbname === null || dbname === '' || tableName === '' || tableName === null ){
			return false;
		}

		data = data === null ? '': data;

		var dbnameId = this.isExists(dbname);

		if(dbnameId === false){
			return false;
		}else{
			var tableObj = {
				dbname : dbname,
				tableName : tableName,
				data : {
					data
				}
			}

			this.addTableList(dbname,tableName);

			localStorage[tableName] = JSON.stringify(tableObj);
		}

		return this;
	}

	mongoBro.prototype.isTableExists = function(tableName) {
		
		var tableList = this.getTableList();

		if(tableList === null) {
			return false;
		}

		for (var i = 0; i < tableList.length; i++) {
			if(tableList[i] === tableName) {
				return i;
			}
		};

		return false;

	}

	mongoBro.prototype.updateTable = function(oldName,newName) {


	}

	mongoBro.prototype.removeTable = function(tableName) {

		var tableNameId = this.isTableExists(tableName);

		if(tableNameId === false) {
			return false;
		}

		this.removeTableList(tableName);

		localStorage[tableName] = '';

		return this;

	}

	mongoBro.prototype.getTableByDBName = function(dbname) {



	}

	mongoBro.prototype.getTable = function(tableName) {
		return JSON.parse(localStorage[tableName]);
	}

	window.mongoBro = new mongoBro();

})(window);

mongoBro.removeAllDatabases();

console.log(mongoBro.createDB('test').getDatabases());

console.log(mongoBro.createDB('fuck').getDatabases());

console.log(mongoBro.updateDB('fuck','bitch').getDatabases());

console.log(mongoBro.getCurrentDBName());

console.log(mongoBro.removeDB('bitch').getDatabases());

console.log(mongoBro.use('test').getCurrentDBName());

console.log(mongoBro.createTable('test','person').getTable('person'));

console.log(mongoBro.getTableList());

console.log(mongoBro.createTable('test','xieyang',{
	name : 'xieyang',
	sex : 'male' 
}).getTable('xieyang'));
