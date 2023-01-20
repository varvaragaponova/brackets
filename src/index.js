module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const mapper = bracketsConfig.reduce((acc, bracket) => {
    acc[bracket[1]] = bracket[0];
    return acc;
  }, {})

  for (let i = 0; i < str.length; i++) {
    if(mapper[str[i]] === str[i] && !stack.includes(str[i])) {
      stack.push(str[i]);
    } else if(Object.values(mapper).includes(str[i]) && mapper[str[i]] !== str[i]) {
      stack.push(str[i]);
    } else if(stack[stack.length - 1] === mapper[str[i]]) {
      stack.pop();
    } else return false;
  }

  return stack.length === 0;
}
