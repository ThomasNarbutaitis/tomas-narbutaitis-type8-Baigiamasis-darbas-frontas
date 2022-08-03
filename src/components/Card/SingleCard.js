import { useAuthCtx } from '../../store/authContext';
import css from './Cards.module.css';

function SingleCard({
  question,
  username,
  created,
  modified,
  onClick,
  answer,
  created_at,
  modified_at,
  children,
  className,
}) {
  const { isUserLoggedIn } = useAuthCtx();

  return (
    <div className={`${css.cards} ${css[className]}`} onClick={onClick}>
      <div>
        <h3 className={css.title}>{question || answer}</h3>
        <div>
          <p className={css.descr}>
            <strong>Asked by:</strong> {username}
          </p>
          <p className={css.descr}>
            <strong>Created:</strong>{' '}
            {`${new Date(created || created_at).toUTCString().slice(0, 26)}`}
          </p>

          {isUserLoggedIn && (
            <p className={css.descr}>
              <strong>Last modified:</strong>{' '}
              {`${new Date(modified || modified_at)
                .toUTCString()
                .slice(0, 26)}`}
            </p>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

export default SingleCard;
