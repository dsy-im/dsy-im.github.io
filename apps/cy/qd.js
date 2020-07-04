function calc() {
  var amountText = document.getElementById("amountField").value.trim();

  if (!amountText || !/^\d+$/.test(amountText)) {
    alert("请输入正确的数量！")
    return;
  }

  var amount = Number(amountText);

  if (amount < 1) {
    alert("请输入正确的数量！")
    return;
  }

  const allItems = [
    {name: "牛肉", ratio: 0.5},
    {name: "羊肉", ratio: 0.2},
  ];

  var tbody = document.getElementById('myTBody');
  allItems.forEach(item => {
    var tr = document.createElement('tr');
    // first td
    var itemNameTd = document.createElement('td');
    itemNameTd.appendChild(document.createTextNode(item.name));
    tr.appendChild(itemNameTd);
    // second td
    var amountTd = document.createElement('td');
    amountTd.appendChild(document.createTextNode(item.ratio * amount));
    tr.appendChild(amountTd);

    tbody.appendChild(tr);
  });
}

document.getElementById("calc").addEventListener("click", function(){
  document.querySelectorAll("#myTBody > tr").forEach( tr => tr.remove());
  calc();
});
