export interface IFireShow {
  singleFire(): void;
  doubleFire(): void;
}

export interface IWisdomShow {
  suanshuti(): void;
  dance(): void;
}

export interface IBalanceShow {
  dumuqiao(): void;
  zougangsi(): void;
}

export function hasFireShow(obj: object): obj is IFireShow {
  /*
    原始的方法
  */
  // return !!((obj as IFireShow).singleFire && (obj as IFireShow).doubleFire);

  /* 使用 in 操作符
  安全性：
    - 使用 in 操作符检查属性是否存在，并且不会尝试访问它们的值。这种方式在处理未定义或 null 的属性时更加安全.
    - 因为如果 singleFire 或 doubleFire 属性的值为 falsy（例如空字符串或 0），函数会返回 false，即使这些属性实际存在。这可能不是预期的行为。

  可读性：
    - 使用 in 操作符的方法更简洁、直观，因为它只检查属性是否存在。
    - 使用类型断言和双重否定的方法可能在可读性上稍差，特别是对于不熟悉 TypeScript 的开发者。

  类型检查: 类型断言方法更依赖于开发者的判断，可能会绕过类型检查的一些好处。
    - in 操作符方式更符合 TypeScript 的类型检查惯用方法，避免不必要的类型断言。
    -
  */
  // return 'singleFire' in obj && 'doubleFire' in obj;

  /* 进一步改进
    这个改进版本确保 obj 是一个非 null 的对象，然后检查 singleFire 和 doubleFire 属性是否存在。
    这样既保持了类型检查的严谨性，又避免了可能的运行时错误。
  */
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'singleFire' in obj &&
    'doubleFire' in obj
  );
}

export function hasWisdomShow(ani: object): ani is IWisdomShow {
  return !!((ani as IWisdomShow).dance && (ani as IWisdomShow).suanshuti);
}
