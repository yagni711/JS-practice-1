<!DOCTYPE html>

<html>
  <head>
    <script src="scripts.js"></script>
  </head>

  <body>
    <input type="number" placeholder="USD" id="usd" />
    <button onclick="changeINR()">Change to INR</button>
    <h1>Result of USD to INR - <span id="INRvalue"></span></h1>
    <br /><br />
    <input type="number" placeholder="INR" id="inr" />
    <button onclick="changeUSD()">Change to USD</button>
    <h1>Result of INR to USD - <span id="USDvalue"></span></h1>
    <br /><br />
    <input type="number" placeholder="value 1" id="value1" />
    <input type="number" placeholder="value 2" id="value2" />
    <button onclick="multiplication()">Multiplication</button> <button onclick="addition()">Addition</button>
    <h1>Result of Multiplication -  <span id="multiplicationValue"></span></h1>
    <h1>Result of Addition -  <span id="additionValue"></span></h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4Qw5iEQvcx-nO-Okmh8KvInvaMtYy68Kvg&usqp=CAU" height="200" width="200" id="image"><br/><br/>
    <button onclick="changeImg()">Click To Change Image INDIA</button>
    <button onclick="changeusaImg()">Click To Change Image USA</button>
  </body>
</html>
