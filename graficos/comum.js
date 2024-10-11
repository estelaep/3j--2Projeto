const getCss = (variavel) =>{
    return getComputedStyle(document.body).getPropertyValue(variavel)
}