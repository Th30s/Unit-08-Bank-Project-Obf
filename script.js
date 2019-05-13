var deposit;
var name;
var number;
var total;

$(".newDeposit").click(function() {
    deposit = $('.accountDeposit').val();
    name = $(".accountName").val();
    $(".ledger").append("<p>" + name  + "</p><p>"+ "$" +deposit + "</p>");
    var numOfPeople = name.length;
   
    
    
    
});