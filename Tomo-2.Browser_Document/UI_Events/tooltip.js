let tooltipElem;
let coords;

function mouseOver(event){
    let target = event.target.closest('[data-tooltip]')
    if (!target)return
    tooltipElem = showTooltip(target,target.dataset.tooltip)
}
function mouseOut(event){
    if (tooltipElem){
        tooltipElem.remove()
        tooltipElem = false
    }
}
function showTooltip(target,tooltip){
    let div = document.createElement('div')
    div.className = 'tooltip'
    div.innerHTML = tooltip
    document.body.append(div)
    coords = target.getBoundingClientRect()

    let left = coords.left + (target.offsetWidth - div.offsetWidth) / 2
    if (left < 0) left = 0
    let top = coords.top - div.offsetHeight - 5
    if (top < 0) top = coords.top + target.offsetHeight + 5

    div.style.left = left + 'px'
    div.style.top = top + 'px'
    return div
}
document.addEventListener('mouseover',mouseOver)
document.addEventListener('mouseout',mouseOut)