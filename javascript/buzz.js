function ClearForm(form){
    form.InSeed.value  ="";
 }


 function FillBs(form){
 var seed  = "";
 seed  = form.InSeed.value;
 var LeadIn = new makeArray(18);
 var Subject = new makeArray(12);
 var Verb = new makeArray(13);
 var ObjectPhrase = new makeArray(14);
 initArrays(LeadIn, Subject, Verb, ObjectPhrase, seed);
 l = Math.floor(17 * RandomNumber() + 1);
 s = Math.floor(11 * RandomNumber() + 1);
 v = Math.floor(12 * RandomNumber() + 1);
 o = Math.floor(13 * RandomNumber() + 1);
 BsValue=LeadIn[l]+" "+Subject[s]+" "+Verb[v]+" "+ObjectPhrase[o];
 alert(BsValue);
 }


 function makeArray(numElements) {
 this.length = numElements
 for (count = 1; count <= numElements; count++)
 this[count] = 0;
 return (this);
 }

 
 function initArrays(LeadIn, Subject, Verb, ObjectPhrase, seed){
 LeadIn[0] = " ";
 LeadIn[1] = "In particular,";
 LeadIn[2] = "On the other hand,";
 LeadIn[3] = "However,";
 LeadIn[4] = "Similarly,";
 LeadIn[5] = "As a resultant implication,";
 LeadIn[6] = "In this regard,";
 LeadIn[7] = "Based on integral subsystem considerations,";
 LeadIn[8] = "For example,";
 LeadIn[9] = "Thus,";
 LeadIn[10] = "In respect to specific goals,";
 LeadIn[11] = "Interestingly enough,";
 LeadIn[12] = "Without going into the technical details,";
 LeadIn[13] = "Of course,";
 LeadIn[14] = "To approach true user-friendliness,";
 LeadIn[15] = "In retrospect,";
 LeadIn[16] = "Conversely,";
 LeadIn[17] = "From a top-level view,";
 Subject[0]=" ";
 Subject[1] = "a large portion of interface coordination communication";
 Subject[2] = "a constant flow of effective communication";
 Subject[3] = "the characterization of specific criteria";
 Subject[4] = "initiation of critical subsystem development";
 Subject[5] = "the fully integrated test program";
 Subject[6] = "the product configuration baseline";
 Subject[7] = "any associated supporting element";
 Subject[8] = "the incorporation of additional mission constraints";
 Subject[9] = "the independent functional principle";
 Subject[10] = "the interrelation of system and/or subsystem technologies";
 Subject[11] = "the product assurance architecture";
 Verb[0] = " ";
 Verb[1] = "must utilize and be functionally interwoven with";
 Verb[2] = "maximizes the probability of project success, yet minimizes cost and time required for";
 Verb[3] = "adds explicit performance limits to";
 Verb[4] = "necessitates that urgent consideration be applied to";
 Verb[5] = "requires considerable systems analysis and trade-off studies to arrive at";
 Verb[6] = "is further compounded when taking into account";
 Verb[7] = "presents extremely interesting challenges to";
 Verb[8] = "recognizes other systems' importance and the necessity for";
 Verb[9] = "effects a significant implementation of";
 Verb[10] = "adds overriding performance constraints to";
 Verb[11] = "mandates staff-meeting-level attention to";
 Verb[12] = "is functionally equivalent and parallel to";
 ObjectPhrase[0] = " ";
 ObjectPhrase[1] = "the "+seed+" sophisticated physical layer";
 ObjectPhrase[2] = "the "+seed+" anticipated fourth-generation equipment.";
 ObjectPhrase[3] = "the "+seed+" subsystem compatibility testing.";
 ObjectPhrase[4] = "the "+seed+" structural design, based on system engineering concepts.";
 ObjectPhrase[5] = "the "+seed+" preliminary qualification limit.";
 ObjectPhrase[6] = "the "+seed+" evolution of specifications over a given time period.";
 ObjectPhrase[7] = "the "+seed+" philosophy of commonality and standardization.";
 ObjectPhrase[8] = "the "+seed+" greater fight-worthiness concept.";
 ObjectPhrase[9] = "any "+seed+" discrete configuration mode.";
 ObjectPhrase[10] = "the "+seed+" management-by-contention principle.";
 ObjectPhrase[11] = "the "+seed+" total system rationale.";
 ObjectPhrase[12] = "possible "+seed+" bidirectional logical relationship approaches.";
 ObjectPhrase[13] = "the "+seed+" postulated use of dialog management technology.";
 }
 function RandomNumber() {
 var today = new Date();
 num= Math.abs(Math.sin(today.getTime()));
 return num;
 }