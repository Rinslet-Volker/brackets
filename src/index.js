module.exports = function check(str, bracketsConfig) {
  let bracketsConfigStr = bracketsConfig.map(el => el.join(''));

  while (true) {
    let lengthBefore = str.length;

    bracketsConfigStr.forEach(el => {
      str = str.replace(el, '');
    })

    if (str.length === 0) {
      return true;
    }

    if (str.length === lengthBefore) {
      return false;
    }
  }

}
