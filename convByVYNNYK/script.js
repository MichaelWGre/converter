function removeTonos(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function convertText() {
  const input = document.getElementById("unconverted").value;
  const noTonos = removeTonos(input);
  const upper = noTonos.toLocaleUpperCase("el-GR");
  document.getElementById("converted").value = upper;
}


function copy() {
  const output = document.getElementById("converted");
  const copy = document.getElementById("copy");
  navigator.clipboard.writeText(output.value)
}
