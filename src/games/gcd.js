import getRandomNumber from '../utils.js';
import gameWrapper from '../index.js';

const minNumber = 0;
const maxNumber = 100;

const getGcd = (a, b) => {
  const lowerNumber = Math.min(a, b);
  const greaterNumber = Math.max(a, b);
  const diff = greaterNumber - lowerNumber;
  const initialIndex = ((diff > lowerNumber) ? lowerNumber : diff) - 1;

  switch (lowerNumber) {
    case 0:
      return greaterNumber;
    case 1:
      return 1;
    default:
  }
  if (greaterNumber % lowerNumber === 0) {
    return lowerNumber;
  }
  for (let i = initialIndex; i > 1; i -= 1) {
    if ((greaterNumber % i === 0) && (lowerNumber % i === 0)) {
      return i;
    }
  }
  return 1;
};

const generateQuestionObj = () => {
  const a = getRandomNumber(minNumber, maxNumber);
  const b = getRandomNumber(minNumber, maxNumber);
  return {
    question: `${a} ${b}`,
    result: String(getGcd(a, b)),
  };
};

const task = 'Find the greatest common divisor of given numbers.';

export default () => gameWrapper(task, generateQuestionObj);
