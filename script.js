var deposit;
var name;

$(".newDeposit").click(function() {
    deposit = $('.accountDeposit').val();
    name = $(".accountName").val();
    $(".ledger").append("<p>" + name  + "</p><p>"+ "$" +deposit + "</p>");
    deposit.push(
    
});