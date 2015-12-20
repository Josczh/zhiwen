$(function(){

	$("#search_button").button({
		icons:{
			primary:"ui-icon-search"
		}
	});

	$("#reg").dialog({
		title:"会员注册",
		buttons:{
			"注册":function(){
				alert("正在ajax提交中");
			},
			"取消":function(){
				$(this).dialog("close");
			}
		},
		autoOpen:false,
		modal:true,
		resizable:false,
		width:320,
		height:340,
		closeText:"关闭",
	});

	$("#reg_a").on("click",function(){

		$("#reg").dialog("open");

	})

	$("#reg").buttonset();
	$("#date").datepicker({
		showOtherMonths:true,
		changeMonth:true,
		changeYear:true,
		showOn:"button",
		buttonImage:"img/calendar.gif",
		buttonImageOnly:true,
		maxDate:0,
		hideIfNoPrevNext:true,
		yearRange:"1950:2020"
	});

	

	$("#email").autocomplete({
		autoFocus:true,
		source:function(request,response){
			var hosts = ["126.com","gmail.com","163.com","qq.com","live.com","sina.com.cn"],
			term = request.term,
			name = term,
			host = "",
			it ="@",
			result = [];
			result.push(term);
			if(name.indexOf(it)!=-1){
				name = term.slice(0,term.indexOf(it));
				host = term.slice(term.indexOf(it)+1);
			}
			if(name){
				var findedHost = (host? $.grep(hosts,function(value,index){return value.indexOf(host)!=-1;}):hosts)
			}
			var findedResult = $.map(findedHost,function(value,index){
				return name+"@"+value;
			})
			result = result.concat(findedResult);
			response(result);
		},
		delay:0,
	})

})