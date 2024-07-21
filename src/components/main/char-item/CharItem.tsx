import { CharacterBase } from '../../../types/character.interface.ts';
import styles from './CharItem.module.css';

function CharItem({ person }: { person: CharacterBase }) {
  return (
    <div className={styles.card} key={person.name}>
      <h2 className={styles.cardName}>
        Name: <span className={styles.cardSpan}>{person.name}</span>
      </h2>

      <p className={styles.cardInfo}>
        Gender: <span className={styles.cardSpan}>{person.gender}</span>
      </p>
      <p className={styles.cardInfo}>
        Height: <span className={styles.cardSpan}>{person.height}</span>
      </p>
      <p className={styles.cardInfo}>
        Mass: <span className={styles.cardSpan}>{person.mass}</span>
      </p>
      <p className={styles.vertical}>
        Birth year: <span className={styles.cardSpan}>{person.birth_year}</span>
      </p>
    </div>
  );
}

export default CharItem;
