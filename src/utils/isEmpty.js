/* eslint-disable */
function isEmpty(obj) {
  for (const key in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return false
  }
  return true
}

export default isEmpty
