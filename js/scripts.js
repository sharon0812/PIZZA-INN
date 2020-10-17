// business logic
function Getpizza(flavour, size, crust, topping){
this.flavour = flavour;
this.size = size;
this.crust = crust;
this.topping = topping;
}

function Pizzaprice(sizeprice, crustprice, toppingprice){
    this.sizeprice = sizeprice;
    this.crustprice = crustprice;
    this.toppingprice = toppingprice;
    }
}













$(document).ready(function(){
    $("#kert").click(function(){
        $("#ret").toggle();
    })
    $("#kert").click(function(){
        $("#dev").toggle();
    })
    $("#home").click(function(){
        $("dev").toggle();
    })
})



$(document).ready(function(){

$("#lily").submit(function(event){
event.preventDefault();
var flavour=$("#flavour").val();
alert(flavour);
productAddList()
formClear()
});



});

function productAddList() {
    // First check if a <tbody> tag exists, add one if not
    if ($("#myTable tbody").length == 0) {
        $("#myTable").append("<tbody></tbody>");
    }
    // Append product to the table
    $("#myTable tbody").append("<tr>" +
        "<td>" + $("#flavour").val() + "</td>" +
        "<td>" + $("#size").val() + "</td>" +
        "<td>" + $("#crust").val() + "</td>" +
        "<td>" + $("#topping").val() + "</td>" +
        "<td></td>" +
        // "<td>" + $("#number1").val() + "</td>" +
        "<td>" +
        "<button type='button' onclick='productDelete(this);' class='btn btn-default text-danger'>" +
        "<i class='fas fa-trash-alt'></i>" +
        "</button>" +
        "</td>" +
        "</tr>");
}
function productDelete(ctl) {
    $(ctl).parents("tr").remove();
}
function formClear() {
    $("#flavour").val("");
    $("#size").val("");
    $("#crust").val("");
    $("#topping").val("");
    // $("#url").val("");
}