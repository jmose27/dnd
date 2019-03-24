window.onload = function(){
var dice = {
  sides: 6,
  roll: function (num_dice, plus, dice_type) {
    var total = 0;
    var list = [];
    for (i = 0; i < num_dice; i++) {
      var randomNumber = Math.floor(Math.random() * dice_type) + 1;
      total += randomNumber;
      list.push(randomNumber)
    }
    console.log(total);
    console.log(list);
    total += parseInt(plus)
    roll = new Object();
    roll.total = total;
    roll.rolls = list;
    roll.plus = plus;
    roll.num = num_dice;
    roll.type = dice_type;
    return roll;
  }
}



//Prints dice roll to the page

function printNumber(roll) {
  var placeholder = document.getElementById('details');
  var dets = `
              <p>Total: ${roll.total}</p>
              <p>Number Of Dice: ${roll.num}</p>
              <p>Roll per dice ${roll.rolls}</p>
              <p>Number plus added to rolls ${roll.plus}</p>

  `;
  placeholder.innerHTML = dets;
}
var button = document.getElementById('button');

button.onclick = function() {
  var dice_type = document.getElementById('typedice').value;
  var num_dice = document.getElementById('numdice').value;
  var plus = document.getElementById('plusmod').value;
  var roll = dice.roll(num_dice, plus, dice_type);

  console.log(dice_type);
  console.log(num_dice);
  console.log(plus);
  printNumber(roll);
};
};
