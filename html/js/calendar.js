var myDate = new Date();
var myWeekTbl = new Array("��","��","��","��","��","��","�y");
var myMonthTbl = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
var myYear = myDate.getFullYear();

if (((myYear%4) == 0 && (myYear%100)!= 0)
	||(myYear%400) == 0) {
		myMonthTbl[1] = 29;
		}

var myMonth = myDate.getMonth(); //�������擾
var myToday = myDate.getDate(); //�������擾

myDate.setDate(1);
var myWeek = myDate.getDay(); //����̗j��
var myTblLine = Math.ceil((myWeek+myMonthTbl[myMonth])/7);
//ceil�͐؂�グ
var myTable = new Array(7*myTblLine);

for (i=0; i<7*myTblLine; i++) 
	myTable[i]=" ";�@//��������J�����_�[�𔒎���
for (i=0; i<myMonthTbl[myMonth]; i++) 
	myTable[i+myWeek]=i+1
//*********�挎�Ɨ����̓��t************
for (i=0; i<myWeek; i++)
	myTable[i]=myMonthTbl[myMonth-1]-myWeek+i+1
for (i=myMonthTbl[myMonth]+myWeek; i<7*myTblLine; i++)
	myTable[i]= i - myMonthTbl[myMonth] -myWeek + 1

//**********�J�����_�[�̕\��**************
document.write("<table border='1'>");
document.write("<tr><td colspan='7' bgcolor='#7fffd4'>");
//colspan�E�E�E���������Z���̃T�C�Y�i�V�����j
document.write("<strong>",myYear,"�N",(myMonth+1),"���J�����_�[</strong>");
document.write("</td></tr>");

//*********�j��**********
document.write("<tr>");
for (i=0; i<7; i++) {
	document.write("<td align='center'");
	if (i==0) {
		document.write("bgcolor='#fa8072'>");
	} else {
		document.write("bgcolor='#ffebcd'>");
	}
	document.write("<strong>", myWeekTbl[i], "</strong>");
	document.write("</td>");
	}
document.write("</tr>");

//********************���t�̐F��ς���*********************
for (i=0; i<myTblLine; i++) {
	document.write("<tr>");
	for (j=0; j<7; j++) {
		document.write("<td align='center'");
		myDat = myTable[j+(i*7)];
		if (myDat == myToday) {
			document.write("bgcolor='#00ffff'>");
		} else if (j==0 && (j+(i*7)) > myWeek) {
			document.write("bgcolor='#ffb6c1'>");
//*********�挎�Ɨ����̓��t�̐F��ς���***********
		} else if (i==0 && j<myWeek) {
			document.write("bgcolor='#808080'>");
		} else if (i==myTblLine-1 && myTable[j+(i*7)] < 7) {
			document.write("bgcolor='#808080'>");
		}
		else {
		document.write("bgcolor='#ffffe0'>");
		}
		document.write("<strong>",myDat,"</strong>");
		document.write("</td>");
	}
	document.write("</tr>");
}
document.write("</table>");
