console.clear();
const weapons = [
  new Knife(),
  new Staff(),
  new Axe(),
  new StormStaff(),
  new LongBow(),
  new Bow(),
];

const getNames = () => weapons.map((weapon) => weapon.name);

const getCountReliableWeapons = (durability) => {
  return weapons.filter((weapon) => weapon.durability > durability).length;
};

const hasReliableWeapons = (durability) => {
  return weapons.some((weapon) => weapon.durability > durability);
};

const getReliableWeaponsNames = (number) => {
  return weapons.reduce((acc, { name, durability }) => {
    return durability > number ? [...acc, name] : acc;
  }, []);
};

const getTotalDamage = () =>
  weapons.reduce((acc, { attack }) => acc + attack, 0);

// 2 задание

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return (sum += +arg);
  }, 0);
}

const compareArrays = (arr1, arr2) => {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
};

const memorize = (fn, limit) => {
  const memory = [];

  return (...args) => {
    const cachedElem = memory.find((item) => compareArrays(item.args, args));

    if (cachedElem) {
      return cachedElem.result;
    }

    const calculatedVal = fn(...args);
    if (memory.length >= limit) {
      memory.unshift();
    }
    memory.push({ args, result: calculatedVal });

    return calculatedVal;
  };
};
