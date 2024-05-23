import useInterval from './../../hooks/useInterval';
import { useSynchedAtAtom, useSynchedAtom } from '../../atoms/useSyncAtom';
import { GRID_QUERIES, useSyncCards } from '../../query/useGridQuery';
import cs from './Grid.module.css';
import Spinner from './../../components/Spinner';
import { timeAgo } from '../../utils';
import { useQueryClient } from '@tanstack/react-query';

const Header = () => {
  const { mutate: syncCards, isPending, status } = useSyncCards();
  const [synchedAt] = useSynchedAtAtom();
  const queryClient = useQueryClient();
  const [isSynced] = useSynchedAtom();

  const sync = () => {
    //@ts-ignore
    const { data: cards } = queryClient.getQueryData([
      GRID_QUERIES.GET_ALL_CARDS,
    ]);
    if (!isSynced) {
      syncCards(cards);
    }
  };

  //auto-save every 5sec
  useInterval(() => {
    sync();
  }, 5000);

  return (
    <div className={cs.header}>
      <div className={cs['inline']}>
        {isPending ? (
          <>
            {' '}
            <Spinner size="small" />
            <span>Saving</span>
          </>
        ) : null}
      </div>
      {synchedAt ? (
        <div className={cs.synchedAt}> Synched {timeAgo(synchedAt)} </div>
      ) : null}
    </div>
  );
};

export default Header;
