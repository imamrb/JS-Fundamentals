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
function getStudentFromId(studentId){
  return studentRecords.find(function matchId(record){
    return record.id == studentId;
  });
}
function printRecords(recordIds) {
	// TODO
	var result = recordIds.map(getStudentFromId);
  
  result.sort(function sortByName(a, b){
    return a.name==b.name? 0 : a.name > b.name ? 1 : -1; 
  }); 
  
  result.forEach(function printRecord(student){
    var status = student.paid === true ? 'Paid' : 'Not Paid';
    console.log(`${student.name} (${student.id}): ${status}`);
  });
}

function paidStudentsToEnroll() {
  var recordsToEnroll = studentRecords.filter(function needToEnroll(record){
    return (record.paid && !currentEnrollment.includes(record.id));
  });
  
  var idsToEnroll = recordsToEnroll.map(function getStudentId(record){
    return record.id; 
  });
  return [...idsToEnroll, ...currentEnrollment];
	// TODO
} 

function remindUnpaid(recordIds) {
	var unpaidIds = recordIds.filter(function findUnpaidStudents(studentId){
    var student = getStudentFromId(studentId);
    return student.paid===false;
  });
  printRecords(unpaidIds); 
}


// ********************************

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment); 


/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
