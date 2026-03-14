console.log("FaithHive Church Management System");

let members = [];
let visitors = [];

function addMember(name, phone, dateJoined, contactMethod) {
    members.push({
        name: name,
        phone: phone,
        dateJoined: dateJoined,
        contactMethod: contactMethod
    });
}

function addVisitor(name, phone, visitDate, contactMethod) {
    visitors.push({
        name: name,
        phone: phone,
        visitDate: visitDate,
        contactMethod: contactMethod
    });
}

let memberList = [
  { name: "Rev. Charles Asare", phone: "+233243080947", dateJoined: "2020-03-19", contactMethod: "WhatsApp" },
  { name: "Mrs. Dorothy Asare", phone: "+233532335703", dateJoined: "2020-03-19", contactMethod: "SMS" },
  { name: "Dora Tanya", phone: "+233241284019", dateJoined: "2024-09-05", contactMethod: "WhatsApp" },
  { name: "Theodosia Fiador", phone: "+233240915486", dateJoined: "2022-02-20", contactMethod: "SMS" },
  { name: "Isaac Kwesi Sam", phone: "+233550591531", dateJoined: "2022-01-01", contactMethod: "WhatsApp" },
  { name: "Ps. Jephthah Fiifi Adu-Mensah", phone: "+233243044955", dateJoined: "2024-08-01", contactMethod: "WhatsApp" }
];

let visitorList = [
  { name: "Agnes Lartey", phone: "+233242045327", visitDate: "2026-03-16", contactMethod: "WhatsApp" },
  { name: "Mary Smith", phone: "+233243544012", visitDate: "2026-03-16", contactMethod: "SMS" },
  { name: "Kwame Mensah", phone: "+233243420813", visitDate: "2026-03-16", contactMethod: "WhatsApp" }
];

// Add members to system
for (let person of memberList) {
    addMember(person.name, person.phone, person.dateJoined, person.contactMethod);
}

// Add visitors to system
for (let person of visitorList) {
    addVisitor(person.name, person.phone, person.visitDate, person.contactMethod);
}

console.log("Members:", members);
console.log("Visitors:", visitors);

