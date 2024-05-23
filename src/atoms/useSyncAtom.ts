import { atom, useAtom } from 'jotai';

const synchedAtom = atom(false);
const synchedAtAtom = atom<Date | null>(null);

export const useSynchedAtom = () => useAtom(synchedAtom);

export const useSynchedAtAtom = () => useAtom(synchedAtAtom);
