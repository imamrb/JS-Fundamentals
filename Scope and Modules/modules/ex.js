var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];
var deepJS = defineWorkshop();
for(let student of studentRecords){
	deepJS.addStudent(student.id, student.name, student.paid);
}
for(let id of currentEnrollment){
	deepJS.enrollStudent(id);
}

deepJS.printCurrentStudents();
deepJS.printCurrentEnrollment();
deepJS.enrollPaidStudents();
deepJS.remindUnpaidStudents();

/*
----Current Students-----
Bob (664): Not Paid
Brian (709): Not Paid
Frank (313): Paid
Greg (867): Not Paid
Henry (105): Not Paid
Mary (502): Paid
Peter (250): Paid
Sarah (375): Paid
Suzy (410): Paid
-------------------

----Print Current Enrollment-----
Bob (664): Not Paid
Henry (105): Not Paid
Sarah (375): Paid
Suzy (410): Paid
-------------------

----Enrolled Paid Students-----
Bob (664): Not Paid
Frank (313): Paid
Henry (105): Not Paid
Mary (502): Paid
Peter (250): Paid
Sarah (375): Paid
Suzy (410): Paid
-------------------

----Remind Unpaid Students-----
Bob (664): Not Paid
Henry (105): Not Paid
-------------------

[Finished in 0.2s]
*/
function defineWorkshop(){
	var currentEnrollment =[];
	var studentRecords = [];
	var publicAPI = {
		addStudent, 
		printCurrentStudents,
		enrollStudent,
		printCurrentEnrollment, 
		enrollPaidStudents, 
		remindUnpaidStudents
	};
	return publicAPI;


	//*************************************
	function addStudent(id , name , paid){
		studentRecords.push({id, name, paid});
	}
	function printCurrentStudents(){
		var currentStudents = studentRecords.map(getStudentId);
		console.log('----Current Students-----');
		printRecords(currentStudents);
	}
	function enrollStudent(id){
		currentEnrollment.push(id);
	}
	function printCurrentEnrollment(){
		console.log('----Print Current Enrollment-----');
		printRecords(currentEnrollment);
	}
	function enrollPaidStudents() {
		var recordsToEnroll = studentRecords.filter(needToEnroll);

		var idsToEnroll = recordsToEnroll.map(getStudentId);

		currentEnrollment = [ ...currentEnrollment, ...idsToEnroll ];
		console.log('----Enrolled Paid Students-----');
		printRecords(currentEnrollment);
	}
	function remindUnpaidStudents(recordIds=currentEnrollment) {
		var unpaidIds = recordIds.filter(notYetPaid);

		console.log('----Remind Unpaid Students-----');
		printRecords(unpaidIds);
	}


	//********************************************
	function getStudentFromId(studentId) {
		return studentRecords.find(matchId);

		function matchId(record) {
			return (record.id == studentId);
		}
	}
	function getStudentId(record) {
		return record.id;
	}
	function printRecords(recordIds){
		var records = recordIds.map(getStudentFromId);

		records.sort(sortByNameAsc);

		records.forEach(printRecord);
		console.log('-------------------\n');
	}
	function sortByNameAsc(record1,record2){
		if (record1.name < record2.name) return -1;
		else if (record1.name > record2.name) return 1;
		else return 0;
	}

	function printRecord(record) {
		console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
	}

	function needToEnroll(record) {
		return (record.paid && !currentEnrollment.includes(record.id));
	}
	function notYetPaid(studentId) {
		var record = getStudentFromId(studentId);
		return !record.paid;
	}
};






