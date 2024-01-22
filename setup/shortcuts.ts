import type { NavOperations, ShortcutOptions } from '@slidev/types';
import { defineShortcutsSetup } from '@slidev/types';

export default defineShortcutsSetup(
  (nav: NavOperations, base: ShortcutOptions[]) => {
    return [
      {
        key: 'ArrowDown',
        fn: () => nav.next(),
        autoRepeat: true,
      },
      {
        key: 'ArrowUp',
        fn: () => nav.prev(),
        autoRepeat: true,
      },
      ...base, // keep the existing shortcuts
    ];
  },
);
