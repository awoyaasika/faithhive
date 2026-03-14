console.log("FaithHive Church Management System");
let members = [];
let visitors = [];
function addMember(name, phone, dateJoined) {

    members.push({
        name: name,
        phone: phone,
        dateJoined: dateJoined
    });

}
function addVisitor(name, phone, visitDate) {

    visitors.push({
        name: name,
        phone: phone,
        visitDate: visitDate
    });

}
let memberList = [

 { name: "Rev. Charles Asare", phone: "+233243080947", dateJoined: "2020-03-19" },

 { name: "Mrs. Dorothy Asare", phone: "+233532335703", dateJoined: "2020-03-19" },

 { name: "Dora Tanya", phone: "+233241284019", dateJoined: "2024-09-05" },

 { name: "Theodosia Fiador", phone: "+233240915486", dateJoined: "2022-02-20" },

 { name: "Isaac Kwesi Sam", phone: "+233550591531", dateJoined: "2022-01-01" }

 { name: "Ps. Jephthah Fiifi Adu-Mensah", phone: "+233243044955", dateJoined: "2024-08-01" }


];
let visitorList = [

 { name: "Agnes Lartey", phone: "+233242045327" },

 { name: "Mary Smith", phone: "=233243544012" },

 { name: "Kwame Mensah", phone: "+233243420813" }

];
for (let person of memberList) {

 addMember(person.name, person.phone, person.dateJoined);

}
for (let person of visitorList) {

 addVisitor(person.name, person.phone, "2026-03-16");

}
console.log("Members:", members);
console.log("Visitors:", visitors);
