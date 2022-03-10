var job = ["Teacher","Dentist","Pharmasist","Therapist"];
var city = ["Dallas","Georgia","Miami","Elyria"];
var spouse = ["John","Nick","Jason","David"];
var numKids = [0,10,5,2];

var xx = Math.floor(Math.random() * 4 );

function teller(job,city,spouse,numKids) {

  document.write("You will be a " + job + " in " + city + ", and married to " + spouse + " with " + numKids + " kids. ");
}

teller (job[xx],city[xx],spouse[xx],numKids[xx])
