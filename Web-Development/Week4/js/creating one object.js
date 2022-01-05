var company = new Object();
company.name = "Facebook"; // create the property name on object company
company.ceo = new Object(); // create new object of company
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";

console.log(company);
console.log(company.name); // Facebook
console.log(company["name"]); // Facebook
