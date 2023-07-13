dm=YAHOO.util.Dom;

function init(){
	var usercode = document.getElementById("userCode");
	  if(usercode != undefined && trim(usercode.value) == "ofrAdmin"){
	    disabledAll();
	  }
	//����TableView
	initTabViewByScript("certifyTabView")
	fm.reset();//�˴�����reset��Ϊ�˽����ҳ���ʼ����radioĬ�Ϲ�ѡ�ͳ�ʼ���������ð�ť��Ĭ�Ϲ�ѡ��һ�����⡣@author yangweijun
	var viewFlag = document.getElementById("viewFlag");
	if(viewFlag != null && viewFlag != undefined && viewFlag.value == '1'){
		
		var elements1 = document.getElementsByTagName("INPUT");
		if(elements1 != null && elements1 != undefined && elements1.length > 0){
			for(var i=0;i<elements1.length;i++){
				elements1[i].disabled = true;
			}
		}
		var elements2 = document.getElementsByTagName("SELECT");
		if(elements2 != null && elements2 != undefined && elements2.length>0){
			for(var i=0;i<elements2.length;i++){
				elements2[i].disabled = true;
			}
		}
		var elements3 = document.getElementsByTagName("IMG");
		if(elements3 != null && elements3 != undefined && elements3.length>0){
			for(var i=0;i<elements3.length;i++){
				elements3[i].disabled = true;
			}
		}
		var elements4 = document.getElementsByTagName("a");
		if(elements4 != null && elements4 != undefined && elements4.length > 0){
			for(var i=0;i<elements4.length;i++){
				if(i != elements4.length - 2){
					elements4[i].disabled = true;
				}
			}
		}
		
	}
	
	var prepayFlag = fm.prepayFlag.value;
	var compensateFlag = fm.compensateFlag.value;
	var autoCompensateFlag = fm.autoCompensateFlag.value;
	if((compensateFlag != '1' && compensateFlag != '2') || autoCompensateFlag !='true' ||prepayFlag != '1' || (fm.policyFeeReason != null && fm.policyFeeReason.value !="") || (fm.tipMessage != null && fm.tipMessage.value !="")){
		showReason();
	}
	if((compensateFlag == '1' || compensateFlag == '2') && autoCompensateFlag == 'true' &&  viewFlag.value != '1'){
		if(fm.autoCompensateButton != null 
				&& fm.autoCompensateButton != undefined){			
			fm.autoCompensateButton.disabled = false;
		}
	}
	
	registNo=document.getElementById("registNo").value;
	findMessageList(registNo,'LossAsseCar');
    var rejectFlagForEditClaim=document.getElementById("rejectFlagForEditClaim").value;
    if (rejectFlagForEditClaim==='0'){
        document.getElementById("modifyClaim").disabled=false;
        document.getElementById("registNo").disabled=false;
        document.getElementById("rejectFlagForEditClaim").disabled=false;
	}
    
}
YAHOO.util.Event.addListener(window,"load",init);

function certiListInit(id)
{
  var vhref = id.href ;
  id.href=vhref+"?RegistNo=111";
  alert(id.href);
}


function pending(){
    fm.submit();
    window.location.href="${ctx}/pages/bpmpages/docCollectPending.jsp"
    }

function startCompTask()
    {
      var oldTarget = fm.target;
      var oldAction = fm.action;
      fm.target = "_blank";
      fm.action = "/PiccClaim/pages/bpmpages/createSubProcess.jsp";
      fm.submit();
      fm.target = oldTarget;
      fm.action = oldAction;
    }
var isShowClaim = "";
function rollbackIsEndCase(inputObject,outputObject,returnObject){
	isShowClaim = returnObject;
}
function update(registNo){
		if(checkStayReason()==false){
			return false;
		}
		submitDlg = new YAHOO.widget.Panel("submitDlg",{iframe:true, visible:true, width:450, height:255, underlay:"shadow", constraintoviewport:true, fixedcenter:true, modal:true,zIndex:302});
		submitDlg.setHeader("����ɹ�");
		submitDlg.setBody("<iframe name='submitFrame' src='javascript:false;'  frameborder='0' style='margin:0; padding:0; width:100%; height: 100%'></iframe>");
		submitDlg.render(document.body);
		submitDlg.show();
		fm.action = "/piccclaim/compensateDispatch/saveOrUpdateCompensateDispatchEdit.do";					
		fm.target="submitFrame";
		fm.submit();
  }
//����ѡ������˰�����������˵������
function checkStayReason(){
	var prpLCompensateDispatchstate = document.getElementById("prpLCompensateDispatch.state");
	var stayreason=document.getElementById('prpLCompensateDispatch.stayReason').value;
	if(prpLCompensateDispatchstate.checked==true && (stayreason == null || stayreason=="")){
		alert("����˵������Ϊ�գ�");
		return false;
	}
}

//�������� �ύУ��
function checkCompensate(type){
	//����λ�����������Զ�����
	if(type=="autoCompensate"){
		var isBeInstead = document.getElementById("isBeInstead").value;
		if(isBeInstead=="true"){
			alert("����λ�������������Զ����⣡");
			return;
		}
	}
    var comDiv = document.getElementById("compensateRisk");
    var comRadioList = comDiv.getElementsByTagName("input");
    var havePrePay = document.getElementById("havePrePay");
    var haveBIPay = document.getElementById("haveBIPay");
    var claimNo ;
    var comNo =0;
    var radioNo =0;
    var claimType;
//    var preclaimType = null;
    var riskCode;
    var policyType;
    for(var i=0;i<comRadioList.length;i++){
       if(comRadioList[i].getAttribute("type")=="radio" ){
       	  claimType = document.getElementById("claimType"+comRadioList[i].value).value;
       	 
       	  if(comRadioList[i].checked==true&&comRadioList[i].value.indexOf("ADDA")!=-1&&havePrePay.value=='1'&&haveBIPay.value!='1'){//��������ռ��������У��
       		  alert("�Ѵ�����Ч��Ԥ�����񣬲��ܷ������������������Ƚ�����ҵ��");
       		  return;
       	  }
//       	  if(preclaimType!=null && preclaimType!=claimType){
//       	  	alert("ȫ��������������һ�£����������㣡");
//       	  	return;
//       	  }
          radioNo++;
          if(comRadioList[i].checked==false){
             comNo++;
          }else{
          	if(claimType=="B"){
          		if(type=="autoCompensate"){
		          	alert("��λ���������ܷ����Զ�����");
		          	return;
	          	}
	          	var compensateNo = comRadioList[i].value;
	          	if(compensateNo.substring(1,4)!="DZA"){
	          		var isDLW = document.getElementById("isDLW").value;
					if(isDLW=="0"){
						alert("δ�б������հ�������ѡ���λ���ⰸ���ͣ��������");
						return false;
					}
	          	}
          	}
          }
       }
//       preclaimType = claimType;
    }        
    if(comNo==radioNo){
        alert("��ѡ�񱣵�����");
        return false;
    }else{
    	var mobileFlag = document.getElementById("mobileFlag");
    	if(mobileFlag.value=='0'){
    		if(window.confirm("�ж������ͻ��ظ���ͬ�⣬�Ƿ�������?")){
    			var oldAction = fm.action;
		        //����������������
		        if("multi" == type){
		        	fm.autoCompensateButtonOnClick.value = "multi";
		        	fm.action = "/piccclaim/docCollect/multiSubmitAndCreate.do?fromCompensateDispatch=1";
		        }else if("autoCompensate" == type){
		        	fm.autoCompensateButtonOnClick.value = "true";
		        	fm.action = "/piccclaim/docCollect/submitProcessTask.do?fromCompensateDispatch=1";
		        }else{
		        	fm.autoCompensateButtonOnClick.value = "";
		        	fm.action = "/piccclaim/docCollect/submitProcessTask.do?fromCompensateDispatch=1";
		        }
		        showSubmitDlg(type);
		        fm.action = oldAction;
    		}else{
    			return false;
    		}
    	}else{
	    	 var oldAction = fm.action;
	        //����������������
	        if("multi" == type){
	        	fm.autoCompensateButtonOnClick.value = "multi";
	        	fm.action = "/piccclaim/docCollect/multiSubmitAndCreate.do?fromCompensateDispatch=1";
	        }else if("autoCompensate" == type){
	        	fm.autoCompensateButtonOnClick.value = "true";
	        	fm.action = "/piccclaim/docCollect/submitProcessTask.do?fromCompensateDispatch=1";
	        }else{
	        	fm.autoCompensateButtonOnClick.value = "";
	        	fm.action = "/piccclaim/docCollect/submitProcessTask.do?fromCompensateDispatch=1";
	        }
	        showSubmitDlg(type);
	        fm.action = oldAction;
    	}
    }
}


function checkIsHasFeesEvaluate(){
	var registNo = document.getElementById("registNo").value;
    DWREngine.setAsync(false);
    dwrInvokeDataAction.checkIsHasFeesEvaluate(registNo,callbackCheckIsHasFeesEvaluate);
}
function callbackCheckIsHasFeesEvaluate(data){
   if(data == "0"){
	   document.getElementById("isHasFeesEvaluate").value = "0";
   }else{
	   document.getElementById("isHasFeesEvaluate").value = "1";
   }
}



// add by panyan ���ü��������� �ύУ��
function checkChargeCompensate(type){
	checkIsHasFeesEvaluate();//���ҳ��δˢ��
	//����ð������ڷ���������Ϣ����ô����Ҫ�Ե����������������۲��ܷ�����ü�����
	var isHasFeesEvaluate = document.getElementById("isHasFeesEvaluate").value;
	if(isHasFeesEvaluate == '0'){
		alert("�ð�����������������Ϣ����Ե����������������ۺ��ٷ�����ü����飡");
		return false;
	}else{
		var comDiv = document.getElementById("chargeCompensateRisk");
		var comRadioList = comDiv.getElementsByTagName("input");
		var comNo =0;
		var radioNo =0;
		for(var i=0;i<comRadioList.length;i++){
			if(comRadioList[i].getAttribute("type")=="radio" ){
				radioNo++;
				if(comRadioList[i].checked==false){
					comNo++;
				}
			}
		}
		if(comNo==radioNo){
			alert("��ѡ�񱣵�����");
			return false;
		}else{
			var mobileFlag = document.getElementById("mobileFlag");
			if(mobileFlag.value=='0'){
				if(window.confirm("�ж������ͻ��ظ���ͬ�⣬�Ƿ����������?")){
					var oldAction = fm.action;
					//����������������
					if("multi" == type){
						fm.chargeCompensateRiskOnclick.value = "true";
						fm.action = "/piccclaim/docCollect/multiSubmitAndCreate.do?fromCompensateDispatch=1";
					}else{
						fm.chargeCompensateRiskOnclick.value = "true";
						fm.action = "/piccclaim/docCollect/submitProcessTask.do?fromCompensateDispatch=1";
					}
					showSubmitDlg(type);
					fm.action = oldAction;
				}else{
					return false;
				}
			}else{
				var oldAction = fm.action;
				//����������������
				if("multi" == type){
					fm.chargeCompensateRiskOnclick.value = "true";
					fm.action = "/piccclaim/docCollect/multiSubmitAndCreate.do?fromCompensateDispatch=1";
				}else{
					fm.chargeCompensateRiskOnclick.value = "true";
					fm.action = "/piccclaim/docCollect/submitProcessTask.do?fromCompensateDispatch=1";
				}
				showSubmitDlg(type);
				fm.action = oldAction;
			}
		}
	}
}


//Ԥ������ �ύУ��
function checkPrepay(){
    var comDiv = document.getElementById("prepayRisk");
    var comRadioList = comDiv.getElementsByTagName("input");
    var linkCaseFlag = document.getElementById("linkCaseFlag").value;
    var comNo =0;
     var radioNo =0;
    for(var i=0;i<comRadioList.length;i++){
       if(comRadioList[i].getAttribute("type")=="radio" ){
           radioNo++;
          if(comRadioList[i].checked==false){
             comNo++;
          }
       }
    }
    if(comNo==radioNo){
        alert("��ѡ�񱣵�����");
        return false;
    }   
    //closed by yangweijun 20131128.������ȷ�Ϻ�ͨ��ſ��˹ܿ�
    /*else if(fm.systemFlag.value=="1"){//ͨ�ⰸ�����յز�����Ԥ��
    	  var subComCode =  fm.cxComCode.value;//���ջ���
 	      var newGsComCode = fm.gsComCode.value;//�б�����
 	      var newSubFComCode = newGsComCode.substring(0, 4);//�б���������ǰ��λ 
 	      var newSubTComCode = newGsComCode.substring(0, 2); //�б���������ǰ��λ
 	      var planCity = YAHOO.util.Dom.get("planCity").value;
		  if(planCity.search(newSubFComCode) != -1 || planCity.search(subComCode.substring(0, 4)) != -1){
 	         	if(subComCode.substring(0, 4) == newSubFComCode){
 	         		var oldAction = fm.action;
	 	            fm.action = "/piccclaim/docCollect/submitPrepayTask.do?fromCompensateDispatch=1";
	                showSubmitDlg("pending");
	                fm.action = oldAction;
	 	         }else{
	 	         	 alert("���յز��ܽ���Ԥ�⴦��");
	 	           return false;
	 	         }
 	      }else{
 	            if(subComCode.substring(0, 2) == newSubTComCode){
 	               var oldAction = fm.action;
                   fm.action = "/piccclaim/docCollect/submitPrepayTask.do?fromCompensateDispatch=1";
                   showSubmitDlg("pending");
                   fm.action = oldAction;
 	            }else{
 	            	alert("���յز��ܽ���Ԥ�⴦��");
 	              return false;  
 	            }
 	      }
        	
    }//modify end add by fengchunxia ͨ�ⲻ����Ԥ��        
*/    else{
        var oldAction = fm.action;
        fm.action = "/piccclaim/docCollect/submitPrepayTask.do?fromCompensateDispatch=1";
        showSubmitDlg("pending");
        fm.action = oldAction;
    }
}
 /**
 * ����/�ύʱ��ҳ��չ�ֺ���
 */
function showSubmitDlg(type){

	submitDlg = new YAHOO.widget.Panel("submitDlg",{iframe:true, visible:true, width:650, height:500, underlay:"shadow", constraintoviewport:true, fixedcenter:true, modal:true,zIndex:302});
	if(type=='submit'){
		submitDlg.setHeader("�����ռ������ύ");
	}else{
		submitDlg.setHeader("��ʾ��Ϣ");
	}
	submitDlg.setBody("<iframe name='submitFrame00' src='javascript:false;'  frameborder='0' style='margin:0; padding:0; width:100%; height: 100%'></iframe>");
	submitDlg.render(document.body);
	submitDlg.show();

	YAHOO.util.Event.addListener(submitDlg.close, "click", refreshPage, this);

	fm.target="submitFrame00";
	fm.submit();
}

function refreshPage(){
	window.location.reload();
}
function closePage(){
	parent.window.close();
	try{
		if(parent.parent.window!=null && parent.parent.window!=undefined){
			if(parent.parent.window.opener.fm.bpmsubmit!=undefined){
				parent.parent.window.opener.fm.bpmsubmit.onclick();
			}else{
				parent.window.opener.location.reload();
			}
		}
	}catch(E){

	}
}
//add by yefei 20120627
 var strRiskLevel='';
 function caseRiskLevelCallBack(inputObject,outputObject,returnObject){
	 if(returnObject!=null){
		 strRiskLevel=returnObject;
	 }
 }
  //add by xuezhen 20150511
 var strMessage='';
 function getCmainClauseissue(inputObject,outputObject,returnObject){
	 if(returnObject!=null){
		 strMessage=returnObject;
	 }
 }
 var strData = '';
 function getAccidentNumberCallBack(inputData, outputData, returnData){
 	if(returnData != null){
 		strData += returnData;
 	}
 }
   var successRegist='';
  function getSuccessRegistCallBack(inputData, outputData, returnData){
  	if(returnData != null){
  	successRegist += returnData;
  	}
  }
  
  var checkResultInfo = '';
  function getcheckResultInfoCallBack(inputObject,outputObject,returnObject){
 	    if(returnObject !=null){
 	    	checkResultInfo += returnObject;
 	    }
 }
var urgeInfo='';
function getUrgeInfoCallBack(inputData, outputData, returnData){
    if(returnData != null){
        urgeInfo += returnData;
    }
}
 function showReason(){
	if(YAHOO.Claim.messageDlg == undefined){
		var message  = "";
		var tipMessage = "";
		
		var preFlag = document.getElementById('preFlag').value;
		var certiType = document.getElementById('certiType').value;
		var prepayFlag = document.getElementById('prepayFlag').value;
		var compensateFlag = document.getElementById('compensateFlag').value;
		var comFlag = document.getElementById('comFlag').value;
		var selfLossCondFlag = document.getElementById('selfLossCondFlag').value;
		
		if(fm.policyFeeReason != null && fm.policyFeeReason.value !=""){
			message += fm.policyFeeReason.value + '|';
		}
		if(fm.message != null && fm.message.value !=""){
			message += fm.message.value + '|';
		}
		//if(comFlag && certiType == 'AL' 
		//	&& (compensateFlag == '1' || compensateFlag == '2') 
		//		&& selfLossCondFlag == '0'){
		//    message += fm.comReason.value + '|';//������Ϣ���ӻ�����ʾ qinyongli 2010��04��21��
		//}
		if(fm.comReason != null && fm.comReason.value !=""){
			message += fm.comReason.value + '|';
		}
		//alert("comReason="+fm.comReason.value);//test
		if(fm.autoCompensateReason != null && fm.autoCompensateReason.value != ""){
			message += fm.autoCompensateReason.value;
		}
		//if(preFlag && (certiType == 'PR' || certiType == 'AL' ) 
		//		&& prepayFlag == '1'){
		//    message += fm.prepayReason.value;
		//}
		if(fm.prepayReason != null && fm.prepayReason.value != ""){
			message += fm.prepayReason.value;
		}
		if(dm.get("tipMessage") != undefined){
			tipMessage = dm.get("tipMessage").value;
			message += tipMessage;
		}
		// PNCCAR, add by panyan ���ü�������ʾ��Ϣ 
		//if(comFlag && (certiType == 'CH' || certiType == 'AL' ) 
		//		&& (fm.chargeCompensateFlag.value =='1' || fm.chargeCompensateFlag.value =='2')){
		//    message += '|' + fm.chargeComReason.value + '|';
		//}
		if(fm.chargeComReason != null && fm.chargeComReason.value != ""){
			message += fm.chargeComReason.value;
		}
		//alert("chargeComReason="+fm.chargeComReason.value);//test

        message +="<br><span style='color:red;'>���ݡ��л����񹲺͹�������Ȩ�汣�����������л����񹲺͹����簲ȫ��������ط��ɷ���涨���ͻ�������Ϣ���ռ���ʹ��Ҫ��ͻ���ʾ�����ͻ�ͬ�⣬ͬʱ�����ռ��Ŀͻ���Ϣ�����ϸ��ܣ�����й¶���۸ġ����ۻ��߷Ƿ��������ṩ��</span>";

        //���ûص���������õ�ǰ�������յȼ� add by yefei 20120627
		var registNo =document.getElementById("registNo").value;
		var taskId = document.getElementById("taskId").value;
		var Ofrparam = registNo+","+taskId;
	    dwrInvokeData("caseRiskLevel",registNo,"caseRiskLevelCallBack",null,null,"",false);
	    message+=strRiskLevel;
	 	dwrInvokeData("getPrpLcMainPolicy",registNo,"getCmainClauseissue",null,null,"",false);
	 	message += strMessage;
	 	dwrInvokeData("getAccidentNumber", registNo, "getAccidentNumberCallBack", null, null, "",false);
	 	message += strData;
	 	dwrInvokeData("getSuccessRegist", Ofrparam,"getSuccessRegistCallBack", null, null,"",false);
	 	message+=successRegist;
	 	var registNoAndpolicyNo = new Array(registNo,"");
	 	dwrInvokeData("getcheckResultInfo", registNoAndpolicyNo,"getcheckResultInfoCallBack", null, null,"",false);
	 	message+=checkResultInfo;
        dwrInvokeData("getUrgeInfo",taskId,"getUrgeInfoCallBack",null,null,"",false);
        message+=urgeInfo;
		//PNCCAR WANGXIN ADD BEGIN
		message = (message == null) ?"":message;
		if(message!=""){
			YAHOO.Claim.messageDlg = new YAHOO.widget.Dialog("messageDlg",{
		    width:"440px",
		    x:160,
		    y:100,
		    constraintoviewport:true,
		    iframe:true,
		    postmethod:"none",
		    zIndex:310
		    });
		    YAHOO.Claim.messageDlg.setHeader("������������ʾ��Ϣ");
			promptMsg="";
			strList = message.split("|");
			ul = dm.get("promptMsgs");
			for(index=0;index<strList.length;index++){
				if(strList[index]=="") continue;
				el=ul.appendChild(document.createElement("LI"));
				el.innerHTML=strList[index];
			}
			ul.appendChild(document.createElement("LI"));
			YAHOO.Claim.messageDlg.render();
		}
	}else{
		YAHOO.Claim.messageDlg.show();
	}
 }
 
 var taskDlg;
	function prepareRetractTask(){
		taskDlg = new YAHOO.widget.Panel("taskDlg",{iframe:true, visible:true, width:850, height:300, underlay:"shadow", constraintoviewport:true, fixedcenter:true, modal:true, zIndex:320});
		taskDlg.setHeader("�ɳ���������Ϣ");
		taskDlg.setBody("<iframe name='submitFrame0' src='javascript:false;'  frameborder='0' style='margin:0; padding:0; width:100%; height: 100%'></iframe>");
		taskDlg.render(document.body);
		taskDlg.show();
		YAHOO.util.Event.addListener(taskDlg.close, "click", returnPage, this);
		fm.action="/piccclaim/compensateDispatch/prepareRetractTask.do";
		fm.target="submitFrame0";
		fm.submit();
	}
	function returnPage(){
	 if(parent.window!=null && parent.window!=undefined){
		 parent.window.location.reload();
	 }
	}
	

var claimInfoDlg;
 function docModifyClaim(type){
 	if(!type){
 		alert('��������δ����!');
 		return;
 	}
 	claimInfoDlg = new YAHOO.widget.Panel("claimInfoDlg",{iframe:true, visible:true, width:850, height:300, underlay:"shadow", constraintoviewport:true, fixedcenter:true, modal:true, zIndex:320});
	claimInfoDlg.setHeader("������Ϣ");
	claimInfoDlg.setBody("<iframe name='submitFrame12' src='javascript:false;'  frameborder='0' style='margin:0; padding:0; width:100%; height: 100%'></iframe>");
	claimInfoDlg.render(document.body);
	claimInfoDlg.show();
//	YAHOO.util.Event.addListener(claimInfoDlg.close, "click", closePage, this);
	//fm.action=url;
	fm.action=contextRootPath+"/docCollect/getClaimInfo.do";
	fm.target="submitFrame12";
	fm.submit();
 }
 function checkPayeeName(){
   var payeeName = document.getElementById("prpLpayeeInfo.payeeName");
   if(payeeName!=undefined && payeeName!=null && trim(payeeName.value)==''){
     alert("�տ�����������Ϊ�գ����������룡");
     return false;
   }else{
     return true;
   }
 }
 var checkInfoDlg;
 function docModifyCheck(){
	checkInfoDlg = new YAHOO.widget.Panel("checkInfoDlg",{iframe:true, visible:true, width:850, height:300, underlay:"shadow", constraintoviewport:true, fixedcenter:true, modal:true, zIndex:320});
	checkInfoDlg.setHeader("�鿱��Ϣ");
	checkInfoDlg.setBody("<iframe name='submitFrame1' src='javascript:false;'  frameborder='0' style='margin:0; padding:0; width:100%; height: 100%'></iframe>");
	checkInfoDlg.render(document.body);
	checkInfoDlg.show();
	fm.action=contextRootPath+"/docCollect/getCheckInfo.do";
	fm.target="submitFrame1";
	fm.submit();
 }
// function closePage(){
//		parent.window.close();
//  }
//PNCCAR WANGXIN 20120112 BEGIN ��λ��
function limitinSubrogation(obj){
	if(obj.checked==true){
		obj.value="1";
	}else if(obj.checked == false){
		obj.value="0";
	}
}

var checkflag = false;

function callevaluateOrNot(taskid,carid,propid,perid){
    DWREngine.setAsync(false);
    dwrInvokeDataAction.evaluateOrNot(taskid,carid,propid,perid,callbackevaluateOrNot);
}
function callbackevaluateOrNot(data){
	   checkflag = data;
}

var validCompensate = false;

function hasValidCompensate(taskid){
    DWREngine.setAsync(false);
    dwrInvokeDataAction.hasValidCompensate(taskid,callbackhasValidCompensate);
}
function callbackhasValidCompensate(data){
	validCompensate = data;
}


function prepareComDisPatchBackToDoc(){
	hasValidCompensate(document.getElementById("taskId").value);
    if(validCompensate == "1"){
        alert("������Ч�ļ������������񣬲����������˻أ�");
        return false;
    }

    var backReason = document.getElementById("prpLCompensateDispatch.backReason").value;
	if(backReason == null || trim(backReason) == ''){
		alert("�����������˻�˵����");
		return false;
	}
	
    callevaluateOrNot(document.getElementById("taskId").value,"","","");
    if(!checkflag){
        alert("���������һ�����֣�");
        var url = contextRootPath+"/evaluation/initEvaluationDetails.do?taskId=" + document.getElementById("taskId").value;
        showRecord(url);
        return false;
    }
    
	submitDlg = new YAHOO.widget.Panel("submitDlg",{iframe:true, visible:true, width:650, height:500, underlay:"shadow", constraintoviewport:true, fixedcenter:true, modal:true, zIndex:320});
	submitDlg.setHeader("���㷢�������˻�");
	submitDlg.setBody("<iframe name='submitFrame2' src='javascript:false;'  frameborder='0' style='margin:0; padding:0; width:100%; height: 100%'></iframe>");
	submitDlg.render(document.body);
	submitDlg.show();
	YAHOO.util.Event.addListener(submitDlg.close, "click", returnPage, this);
	fm.action="/piccclaim/compensateDispatch/prepareComDispatchBackToDoc.do";
	fm.target="submitFrame2";
	fm.submit();
}

function prepareComDispatchSubmit(){
	//�ύʱ���¼��������˻�˵�������˻�˵����ա�pnccar wangweiwei add begin �޸�BUG��PNC-20874 ��֤�ռ�����ҳ�棬����б�չʾ�����㷢���ݴ�ʱ����˻������������㷢��ʵ��δ�˻�����б���Ȼչʾ��һ����������������
	document.getElementById("prpLCompensateDispatch.backReason").value = "";
	//pnccar wangweiwei add �޸�BUG��PNC-20874 end 
	submitDlg = new YAHOO.widget.Panel("submitDlg",{iframe:true, visible:true, width:650, height:500, underlay:"shadow", constraintoviewport:true, fixedcenter:true, modal:true, zIndex:320});
	submitDlg.setHeader("���㷢�������ύ");
	submitDlg.setBody("<iframe name='submitFrame3' src='javascript:false;'  frameborder='0' style='margin:0; padding:0; width:100%; height: 100%'></iframe>");
	submitDlg.render(document.body);
	submitDlg.show();
	YAHOO.util.Event.addListener(submitDlg.close, "click", returnPage, this);
	fm.action="${ctx}/compensateDispatch/prepareSubmitComDispatch.do";
	fm.target="submitFrame3";
	fm.submit();
}

