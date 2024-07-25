type Mods = Record<string, boolean | string>;

export function classNames(classes: string, mods: Mods, additional: string[]): string {
  return [
    classes,
    ...additional,
    ...Object.entries(mods)
      .filter(([classeName, value]) => Boolean(value))
      .map(([classeName]) => classeName),
  ].join(' ');
}

classNames('remove-btn', { hover: true, selectabel: true, red: false }, ['pdg']);
