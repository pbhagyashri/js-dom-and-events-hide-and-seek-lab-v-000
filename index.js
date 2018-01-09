function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById("nested")
}

function deepestChild () {
  let nodes = document.querySelectorAll('#grand-node div');
  let mostDeep = nodes[nodes.length- 1];
  return mostDeep
}

function increaseRankBy(n) {

  const lists = document.querySelectorAll('.ranked-list')
  const firstList = document.querySelectorAll('.ranked-list')[0]
  const secondList = document.querySelectorAll('.ranked-list')[1]

  for (let c = 0; c < firstList.children.length; c++) {
    firstList.children[c].innerHTML = parseInt(firstList.children[c].innerHTML) + n
  }

  for (let c = 0; c < secondList.children.length; c++) {
    secondList.children[c].innerHTML = parseInt(secondList.children[c].innerHTML) + n
  }

}
