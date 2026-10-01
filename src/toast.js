import { hasExpectedValue, isEqual } from './utilities/index.js';

export function showToast(value) {
  if (hasExpectedValue(value) && isEqual(value, 'expected')) {
    console.log('The expected value was received');
  }
}
