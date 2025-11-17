import * as migration_20251117_104559_add_versionning_to_pages from './20251117_104559_add_versionning_to_pages';

export const migrations = [
  {
    up: migration_20251117_104559_add_versionning_to_pages.up,
    down: migration_20251117_104559_add_versionning_to_pages.down,
    name: '20251117_104559_add_versionning_to_pages'
  },
];
