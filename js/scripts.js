// business logic
function Getpizza(flavour, size, crust, topping) {
    this.flavour = flavour;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}

function Pizzaprice(sizeprice, crustprice, toppingprice) {
    this.sizeprice = sizeprice;
    this.crustprice = crustprice;
    this.toppingprice = toppingprice;
}
Pizzaprice.prototype.totalprice = function () {
    return this.sizeprice + this.crustprice + this.toppingprice
}
var sizePrice = [1000, 800, 600]
var sizeName = ["Large", "Medium", "Small"]
var crustPrice = [300, 150, 50]
var crustName = ["Cripsy", "Stuffed", "Gluten-free"]
var toppingPrice = [100, 150, 50]
var toppingName = ["Mushroom", "Sausage", "Bacon"]

$(document).ready(function () {
    $("#kert").click(function () {
        $("#ret").toggle();
    })
    $("#kert").click(function () {
        $("#dev").toggle();
    })
    $("#home").click(function () {
        $(".dev").toggle();
    });
});

$(document).ready(function () {

    $("#lily").submit(function (event) {
        event.preventDefault();
        var flavour = $("#flavour").val();
        // alert(flavour);

        productAddList()
        the_total()
        formClear()
    });
});

function productAddList() {

    var flavour = ($("#flavour").val());
    var size = parseInt($("#size").val());
    var sizeNem = sizeName[size - 1]
    var crust = parseInt($("#crust").val());
    var crustNem = crustName[crust - 1]
    var topping = parseInt($("#topping").val());
    var toppingNem = toppingName[topping - 1]

    var size =parseInt($("#size").val());
    var sizeprice =sizePrice[size - 1]
    var crust =parseInt($("#crust").val());
    var crustprice = crustPrice[crust - 1]
    var topping =parseInt($("#topping").val());
    var toppingprice =toppingPrice[topping - 1]
    var newPizzaPrice = new Pizzaprice(sizeprice, crustprice, toppingprice)
    
    var total = newPizzaPrice.totalprice()




    // First check if a <tbody> tag exists, add one if not
    if ($("#myTable tbody").length == 0) {
        $("#myTable").append("<tbody></tbody>");
    }
    $("#myTable tbody").append(
        `<tr>
        <td>${flavour}</td>
        <td>  ${sizeNem}</td>
        <td>  ${crustNem}</td>
        <td>  ${toppingNem}</td>
    
        <td class="total"> ${total}</td>
        <td>
        <button type='button' onclick='rowDelete(this);' class='btn btn-default text-danger'>
        <i class='fas fa-trash-alt'></i>
        </button>
        </td>
        </tr>`);
}


function productDelete(ctl) {
    $(ctl).parents("tr").remove();
}

function formClear() {
    $("#flavour").val("");
    $("#size").val("");
    $("#crust").val("");
    $("#topping").val("");
}

function the_total(){
    var total = 0;
    $(".total").each(function(){
      total += parseFloat($(this).text());
    });
    $('#total').text(total);
  }

  function delivery(){
      var name = $("#nam").val();
      var loc = $("#loc").val();
      var number = $("#num").val();
      alert("Thank you " + name+ " your order will be delivered at " +loc+ ".")
  }