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

		this.writeMongoTableDB(tableExists);

		return this;

	}

	mongoBro.prototype.removeTableList = function(dbname,tableName) {

		var tableNameId = this.isTableExists(dbname,tableName);

		if(tableNameId === false) {
			return false;
		}

		var tableList = this.getTableList();

		if(tableList === null) {
			return false;
		}

		delete tableList[tableNameId];
		tableList.length -= 1;
		this.writeMongoTableDB(tableList);

		return this;

	}

	mongoBro.prototype.removeAlltableList = function(){

		localStorage['MongoDBTableList'] = '';

		return this;
	}

	mongoBro.prototype.updateTableList = function(dbname,oldName,newName) {
		
		if(oldName === null || oldName === '' || newName === null || newName === ''){
			return false;
		}

		var tableNameId = this.isTableExists(dbname,oldName);

		console.log(tableNameId);

		if(tableNameId === false) {
			return false;
		}

		var tableList = this.getTableList();

		tableList[tableNameId].tableName = newName;

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

			for(var key in data) {
				data[key]._id = parseInt(key);
			}

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

	mongoBro.prototype.isTableExists = function(dbname,tableName) {
		
		var tableList = this.getTableList();

		if(tableList === null) {
			return false;
		}

		if(this.isExists(dbname) === false) {
			return false;
		}

		for (var i = 0; i < tableList.length; i++) {
			if(tableList[i].tableName === tableName && tableList[i].database === dbname) {
				return i;
			}
		};

		return false;

	}

	mongoBro.prototype.updateTable = function(dbname,oldName,newName) {

		var res = this.updateTableList(dbname,oldName,newName);

		if(res !== false) {
			var currentTableObj = JSON.parse(localStorage[oldName]);
			currentTableObj.tableName = newName;
			localStorage[newName] = JSON.stringify(currentTableObj);
			localStorage[oldName] = '';
		}else {
			return false;
		}

		return this;

	}

	mongoBro.prototype.removeTable = function(dbname,tableName) {

		var tableNameId = this.isTableExists(dbname,tableName);

		if(tableNameId === false) {
			return false;
		}

		this.removeTableList(dbname,tableName);

		localStorage[tableName] = '';

		return this;

	}

	mongoBro.prototype.getTableByDBName = function(dbname) {

		var tableList = this.getTableList();

		var result = [];

		for (var key in tableList) {
			if(typeof tableList[key] == 'object') {
				var tableObj = tableList[key];
				var databaseName = tableObj.database;

				if(databaseName == dbname){
					result.push(tableObj.tableName);
				}
			}
			
		};

		return result;
	}

	mongoBro.prototype.getTableCollection = function(tableName) {
		if( typeof localStorage[tableName] != 'undefined') {
			return JSON.parse(localStorage[tableName]);
		}
		return false;
	}

	mongoBro.prototype.removeTableCollection = function(dbname, tableName, id) {

		if(dbname == null || tableName == null || id == null) {
			return false;
		}

		var dataExists = this.getTableCollection(tableName);
		var realData = dataExists.data.data;

		dataExists.data.data.splice(id,1);

		localStorage[tableName] = JSON.stringify(dataExists);

	}

	mongoBro.prototype.updateTableCollection = function(dbname, tableName, id) {

	}

	mongoBro.prototype.insertTableCollection = function(dbname, tableName, data) {

		if(dbname == null || tableName == null || data == null ) {
			return false;
		}

		var dataExists = this.getTableCollection(tableName);
		var realData = dataExists.data.data;
		var dataCount = realData.length;

		dataExists.data.data[dataCount] = data;
		dataExists.data.data[dataCount]._id = dataCount;
 		localStorage[tableName] = JSON.stringify(dataExists);

		return this;
	}

	mongoBro.prototype.getTableKey = function(tableCollection) {
		var collectionList = [];
		if(typeof tableCollection != 'undefined') {
			for(var name in tableCollection.data) {
				console.log(tableCollection.data);
				if(typeof tableCollection.data == 'object') {
					for (var i = 0; i < tableCollection.data.length; i++) {
						var currentTableCollection = tableCollection.data[i];
						for(var key in currentTableCollection) {
							collectionList.push(key);
						}
						break;
					};
					break;
				}else {
					collectionList.push(name);
				}
			}

			return collectionList;
		}

		return false;
		
	}

	window.mongoBro = new mongoBro();

})(window);

var rollback = function(remove) {

	remove = remove == null ? false : remove;

	mongoBro.removeAllDatabases();

	console.log(mongoBro.createDB('test').getDatabases());

	console.log(mongoBro.createDB('fuck').getDatabases());

	console.log(mongoBro.updateDB('fuck','bitch').getDatabases());

	console.log(mongoBro.getCurrentDBName());

	console.log(mongoBro.removeDB('bitch').getDatabases());

	console.log(mongoBro.use('test').getCurrentDBName());

	console.log(mongoBro.createTable('test','person').getTableCollection('person'));

	console.log(mongoBro.getTableList());

	console.log(mongoBro.createTable('test','xieyang',
		[{
		name : 'xieyang',
		sex : 'male' 
	},{
		name: 'lanjia',
		sex: 'male'
	}]).getTableCollection('xieyang'));
		
	var tableInTest = mongoBro.getTableByDBName('test');

	console.log(tableInTest);

	console.log('输出test数据库中的表数据');

	for (var i = 0; i < tableInTest.length; i++) {
		console.log(mongoBro.getTableCollection(tableInTest[i]));
	};

	console.log('向test表中插入数据');

	console.log(mongoBro.insertTableCollection('test', 'xieyang', {
		name: 'hh',
		sex: '233'
	}));

	console.log('更新test表中主键为0的数据');

	console.log('删除test表中主键为1的数据');

	console.log('修改person表的名称');

	console.log(mongoBro.updateTable('test','person','person_edit2').getTableList());

	if(remove) {
		console.log(mongoBro.removeTable('test','person_edit2').getTableList());
	}

}


rollback();
