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
  // return !!((obj as IFireShow).singleFire && (obj as IFireShow).doubleFire);

  // return 'singleFire' in obj && 'doubleFire' in obj;

  /*这个改进版本确保 obj 是一个非 null 的对象，然后检查 singleFire 和 doubleFire 属性是否存在。
    这样既保持了类型检查的严谨性，又避免了可能的运行时错误。
    */
  return typeof obj === 'object' && obj !== null && 'singleFire' in obj && 'doubleFire' in obj;
}

export function hasWisdomShow(ani: object): ani is IWisdomShow {
  return !!((ani as IWisdomShow).dance && (ani as IWisdomShow).suanshuti);
}
