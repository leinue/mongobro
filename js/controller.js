$(function() {

	//项目基本配置

	var config = {
		DEBUG : true //是否为DEBUG状态
	};

	var terminalStatus = {
		isMaxified : false,
		isClosed : true,
		isHided : false,
	};

	//***************************UI控制层***************************

	$('.file-list ul li').click(function() {

		///装饰器模式

		FileListClickOnStart(this);
		$('.file-list ul').find('.active').removeClass('active');
		$(this).addClass('active');
		FileListClickOnEnd(this);

	});

	//禁用右键菜单	
	$('body').bind('contextmenu',function() {
		return false;
	});

	$('body').bind('selectstart',function() {
		if(!config.DEBUG){
			return false;			
		}
	});

	//终端右边按钮

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
	};

	var minifyTerminal = function() {
		$('.mongo-terminal').hide();
	}

	var closeTerminal = function() {
		$('.mongo-terminal').fadeToggle(200);
	}

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
				closeTerminal();
				break;
		}
	});

	//双击终端标题栏放大或缩小
	$('.terminal-top').on('dblclick',function(){
		maxifyTerminal();
	});

	//空格抬起事件,显示命令行控制台
	var fnKeyup = function(event) {
		if (event.keyCode === 32) {
			closeTerminal();
		}
	}

	if (document.addEventListener) {
		document.addEventListener("keyup",fnKeyup,true);
	}else {
		document.attachEvent("onkeyup",fnKeyup);
	}

	//***************************业务逻辑控制层***************************

	//左边数据库列表被点击时触发
	function FileListClickOnStart(obj) {

	}

	//左边数据库列表被点击完毕时触发
	function FileListClickOnEnd(obj) {

	}

});
