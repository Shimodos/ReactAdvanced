type Mods = Record<string, boolean | string>;

export function classNames(
  classes: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string {
  return [
    classes,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ');
}
