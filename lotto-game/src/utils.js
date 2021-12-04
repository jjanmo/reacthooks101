export function getColor(num) {
  const res = Math.floor((num - 1) / 10);
  switch (res) {
    case 0: {
      return '#f1c40f';
    }
    case 1: {
      return 'blue';
    }
    case 2: {
      return 'red';
    }
    case 3: {
      return 'black';
    }
    case 4: {
      return 'green';
    }
    default: {
      return;
    }
  }
}
