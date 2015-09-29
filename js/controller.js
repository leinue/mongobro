$(function() {

	//项目基本配置

	var _document = $(document);

	var config = {
		DEBUG : true //是否为DEBUG状态
	};

	//用于输出数据的函数,仅当DEBUG状态为真时触发
	var debug = function(str) {
		if(config.DEBUG){
			console.log(str);
		}
	};

	//终端窗口状态
	var terminalStatus = {
		isMaxified : false, //终端窗口是否最大化,默认为假
		isMinified : false, //终端窗口是否最小化,默认为假
		isClosed : true, //终端窗口是否被关闭,默认为真
		isShow : false //终端窗口是否被显示,默认为假
	};

	//控制台的相关配置文件
	var terminalConfig = {
		TIPS : '$_> ', //控制台输入提示符(用来作为用户输入命令的分割符)
		EDITORID : 'cmd', //控制台编辑器的ID
		EOI : '\r\n' //换行符
	};

	//拓展string对象
	String.prototype.trim=function(){
　　    return this.replace(/(^\s*)|(\s*$)/g, "");
　　};

　　String.prototype.ltrim=function(){
　　    return this.replace(/(^\s*)/g,"");
　　};

　　String.prototype.rtrim=function(){
　　    return this.replace(/(\s*$)/g,"");
　　};

	//终端命令列表
	var terminalCommands = {

		currentFunctionName : '', //当前的函数名

		terminalEditorObj : '',

		getTerminalAllContent : function(obj) { //获得控制台窗口的全部内容
			var _this = $(obj);
	    	var e = _this.val();
	    	return e;
		},

		//为控制台窗口添加新行
		appendNewLineInTerminal : function(e,obj,displayTips) {
			displayTips = displayTips == null ? true : false;

			if(displayTips) {
				var TIPS = terminalConfig.TIPS;
			}else{
				var TIPS = '';
			}

			$(obj).val(e + '\r\n' + TIPS);
			var scrollTop = $("#" + terminalConfig.EDITORID)[0].scrollHeight;
            $("#"+terminalConfig.EDITORID).scrollTop(scrollTop);
		},

		cmd : function (func,obj,args) { //根据函数名执行函数
			if(func.length!==0){
				var objCalled = eval('terminalCommands.'+func);

				//清空命令行中的空白字符
				for (var i = 0; i < args.length; i++) {
					args[i] = args[i].trim();
					args[i] = args[i].replace('\r\n','');
				};

				func = func.replace('\n','');//textarea中\n为换行符,替换之.否则会多出一行
				var append = '\r\n       command "' + func +'" is not found';

				if (typeof objCalled == 'undefined') {
					terminalCommands.appendNewLineInTerminal(terminalCommands.getTerminalAllContent(obj)+append, obj);
					return false;
				}

				new objCalled(obj,args);
			}
		},

		clear : function (obj,args) { //清空控制台窗口内容
			obj.val(terminalConfig.TIPS);
		},

		help : function (obj,args) { //输出帮助信息
			var all = terminalCommands.getTerminalAllContent(obj);
			all = all + '\r\n       this the help file';
			for (var i = 0; i < args.length; i++) {
				all += '\n       '+ args[i] + ' : ' + terminalCommands[args[i]];
			};
			terminalCommands.appendNewLineInTerminal(all,obj);
		}

	};

	//***************************UI控制层***************************

	//模态框

	var modal = {

		show : function(id) {
			$('#' + id).addClass('is-visible');
		}

	};

	//点击空白处时触发
	$('.cd-popup').on('click', function(event){
	    if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
	      event.preventDefault();
	      $(this).removeClass('is-visible');
	    }
	});

	//确定按钮被按下
	$('.cd-buttons li:first-child a').click(function(){
		$('.cd-popup').removeClass('is-visible');
		var callback = $(this).attr('data-callback');
		if(typeof callback == 'undefined') {
			return false;
		}
		var callfunc = eval(callback);
	});

	//取消按钮被按下
	$('.cd-buttons li:last-child a').click(function(){
		$('.cd-popup').removeClass('is-visible');
		var callback = $(this).attr('data-callback');
		if(typeof callback == 'undefined') {
			return false;
		}
		var callfunc = eval(callback);
	});

	//左边数据库列表被点击
	$(document).on("click",".file-list ul li",function(){
	    
	    ///装饰器模式

	    var _this = $(this);

		FileListClickOnStart(this);

		$('.file-list ul').find('.active').removeClass('active');
		_this.toggleClass('active');

		FileListClickOnEnd(this);

	});

	$(document).on('click','.file-list ul li.active ul li',function(){
		
		var _this = $(this);

		tableListClickOnStart(this);

		_this.parent().find('.sactive').removeClass('sactive');
		_this.addClass('sactive');

		tableListClickOnEnd(this);

	});

	//禁用右键菜单	
	$('body').bind('contextmenu',function() {
		if(!config.DEBUG){
			return false;			
		}
	});

	$('body').bind('selectstart',function() {
		if(!config.DEBUG){
			return false;			
		}
	});

	//终端右边按钮

	//终端位置初始化
	var mongoTerminalObj = $('.mongo-terminal');
	mongoTerminalObj.css({
		'left' : ((_document.width()-mongoTerminalObj.width())/2)+'px',
		'top' : ((_document.height()-mongoTerminalObj.height())/2-150)+'px'
	});

	//最大化终端窗口
	var maxifyTerminal = function() {
		if(terminalStatus.isMaxified){
			$('.mongo-terminal').css({
				'width':'800px',
				'height':'400px',
				'top':'30px',
				'left':'30px'
			});
		}else{
			$('.mongo-terminal').css({
				'width':'100%',
				'height':'100%',
				'top':'0',
				'left':'0'
			});
		}
		terminalStatus.isMaxified = !terminalStatus.isMaxified;
		terminalStatus.isShow = true;
		terminalStatus.isMinified = false;
	};

	//最小化终端窗口
	var minifyTerminal = function() {
		$('.mongo-terminal').hide();
		terminalStatus.isMinified = true;
		terminalStatus.isShow = true;
		terminalStatus.isMaxified = false;
	};

	//关闭或打开终端窗口
	var toggleTerminal = function() {
		$('.mongo-terminal').fadeToggle(200);
		$("#"+terminalConfig.EDITORID).focus();
		terminalStatus.isClosed = !terminalStatus.isClosed;
		terminalStatus.isShow = !terminalStatus.isShow;
		if(!terminalStatus.isMinified) {
			$("#"+terminalConfig.EDITORID).val("Welcome to MongoBro (version 1.0.0-preview20151010)\r\n\r\nRun 'h' to dplay the help index.\r\nRun 'h <command>' to display help for specific commands.\r\n\r\n"+terminalConfig.TIPS);
		}
		terminalStatus.isMinified = !terminalStatus.isMinified;
		// terminalStatus.isMaxified = !terminalStatus.isMaxified;
	};

	//终端控制按钮点击事件
	$('.terminal-control-btn ul li').click(function(){
		var thisId = $(this).attr('id');
		switch (thisId) {
			case 'minify' :
				minifyTerminal();
				break;
			case 'maxify' :
				maxifyTerminal();
				break;
			case 'close' :
				toggleTerminal();
				break;
		}
	});

	//双击终端标题栏放大或缩小
	$('.terminal-top').on('dblclick',function(){
		maxifyTerminal();
	});

	//终端标题栏拖动事件
	var dragging = false;
	var dragIsFirst = true;
    var iX, iY;
    $(".terminal-top").mousedown(function(e) {
        dragging = true;
        $(".mongo-terminal").css({"transition":'none'});
        iX = e.clientX - this.offsetLeft;
        iY = e.clientY - this.offsetTop;
        this.setCapture && this.setCapture();
        return false;
    });

    document.onmousemove = function(e) {
        if (dragging) {
	        var e = e || window.event;
	        if (!dragIsFirst){
	        	var oX = e.clientX - iX + 830;
	        	var oY = e.clientY - iY - 300;
	        }else{
	        	var oX = e.clientX - iX + 170;
	        	var oY = e.clientY - iY + 40;
	        }
	        $(".mongo-terminal").css({"left":oX + "px", "top":oY + "px"});
	        return false;
        }
    };

    $(document).mouseup(function(e) {
        dragging = false;
        dragIsFirst = true;
        $(".mongo-terminal")[0].releaseCapture();
        $(".mongo-terminal").css({"transition":'all 0.6s ease 0s'});
        iX = 0;
        iY = 0;
        e.cancelBubble = true;
    });

	//菜单栏终端选项点击事件
	$('#main-menu ul li#menu-terminal').click(function(){
		toggleTerminal();
	});

	//获得用户输入的命令
	var getCMD = function(obj,count) {
		count = count == null ? 2 : count;
		var e = terminalCommands.getTerminalAllContent(obj);
    	var cmd = e.split(terminalConfig.TIPS);
    	var n = cmd.length-count;
    	e = '';
    	cmd[n] = cmd[n].replace('\n','');
    	return cmd[n];
	}

	//控制台textarea回车捕获事件
	$("#"+terminalConfig.EDITORID).keydown(function(event) {
        if (event.keyCode === 13) {
        	var all = terminalCommands.getTerminalAllContent(this);
        	terminalCommands.appendNewLineInTerminal(all,this);
        	handleCommands(getCMD(this));
        	all = '';
        	return false;
        }
	});

	//控制台textarea按下退格键时判断前4个字符是否为'$_> ',如果是则阻止删除
	$("#"+terminalConfig.EDITORID).keydown(function(event){
		if (event.keyCode === 8) {
			var cmd = getCMD(this,1);
			if(cmd === ''){
				return false;
			}
		}
	});

	//控制台命令处理函数
	var handleCommands = function(cmd) {
		var func = eval(terminalCommands.cmd);

		var cmdSplit = cmd.split(' ');
		var funcName = cmdSplit[0];
		var args = cmdSplit.shift();

		funcName = funcName.replace('\n','');

		if(funcName == 'h'){
			funcName = 'help';//因为命令行依赖的函数不能出现一个字符的情况,所以当输入为h时自动转换为help
		}

		//第二个参数是被调用函数的第一个参数
		//所有被调用函数的第一个参数都为控制台编辑器的对象
		//第二个参数为命令后面的空格数据(数组形式)
		new func (funcName,$("#"+terminalConfig.EDITORID),cmdSplit);
		
	};

	//快捷键CTRL+ALT+SAPCE,显示命令行控制台
	var fnKeyup = function(event) {
		if (event.keyCode === 32 && event.ctrlKey && event.altKey) {
			toggleTerminal(); 	
		}
	}

	if (document.addEventListener) {
		document.addEventListener("keyup",fnKeyup,true);
	}else {
		document.attachEvent("onkeyup",fnKeyup);
	}

	//新建数据库按钮被按下
	$('#main-menu ul li#new-db').click(function(){
		modal.show('input-newdb');
	});

	//新建数据库表按钮被按下
	$('#main-menu ul li#new-table').click(function(){

		var currentDB = $('.file-list ul').find('li.active');
		var dbname = '';

		if(currentDB.length === 0){
			alert('请至少选择一个数据库');	
		}

		dbname = currentDB.html();

		console.log(dbname);

		modal.show('input-netable');
	});

	//数据库列表append

	var appendDBList = function(obj) {

		$('.file-list ul').html('');

		var second = '<ul class="second">';
		for (var i = obj.length - 1; i >= 0; i--) {
			var tableList = mongoBro.getTableByDBName(obj[i]);

			if (tableList.length !== 0) {
				for (var j = tableList.length - 1; j >= 0; j--) {
					var tableName = mongoBro.getTable(tableList[j]);
					second += '<li data-dbname="'+tableName['dbname']+'" data-tableName="'+tableName['tableName']+'"><div>'+tableName['tableName']+'</div></li>';
				};
			}
			
			second = second === '<ul class="second">' ? '' : second + '</ul>';
			console.log('<li data-dbname="'+obj[i]+'"><div>'+obj[i]+'</div>'+second+'</li>');
			$('.file-list ul').append('<li data-dbname="'+obj[i]+'"><div>'+obj[i]+'</div>'+second+'</li>');
			second = '<ul class="second">';
		};

	};

	var changeCurrentDBName = function(name) {
		$('#main-menu ul li.main-menu-title').html(name);
	}

	//***************************业务逻辑控制层***************************

	//读取已有数据库

	var getDBExists = function() {
		var allDB = mongoBro.getDatabases();
		appendDBList(allDB);
	};

	getDBExists();

	//左边数据库列表被点击时触发
	function FileListClickOnStart(obj) {

	}

	//左边数据库列表被点击完毕时触发
	function FileListClickOnEnd(obj) {

		var dbname = $(obj).attr('data-dbname');

		changeCurrentDBName(dbname);

		var tableList = mongoBro.getTableByDBName(dbname);

	}

	//数据表被点击开始
	function tableListClickOnStart(obj) {

	}

	//数据表被点击结束
	function tableListClickOnEnd(obj) {

		var _this = $(obj);

		var thisName = _this.find('div').html();

	}

	//新建数据库确定按钮回调函数
	var createNewDB = function(id) {
		var dbname = $('#' + id).val();

		if(dbname == null){
			return false;
		}

		mongoBro.createDB(dbname);

		getDBExists();

	};


});
