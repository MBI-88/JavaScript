function mouselog(event) {
  text.value += event.type + ' [target: ' + event.target.className + ']\n'
  text.scrollTop = text.scrollHeigh
}

function mouselog2(event){
  text2.value += event.type + ' [target: '+ event.target.className + ']\n'
  text2.scrollTop = text2.scrollHeight
}