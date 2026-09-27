/* eslint-disable @next/next/no-img-element -- small square tiles, pre-sized */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './fashion.module.css';

const PHOTOS = Array.from({ length: 25 }, (_, i) => `/fashion/${String(i + 1).padStart(2, '0')}.jpg`);

// Tiles stay square and span the full width, so the height rarely divides
// evenly. Try tile sizes in this range and pick the one that wastes the least
// of the top/bottom rows (ties go to the size closest to TARGET_TILE).
const MIN_TILE = 120;
const MAX_TILE = 230;
const TARGET_TILE = 170;
const MIN_COLS = 5;

const measure = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const fewest = Math.max(MIN_COLS, Math.round(width / MAX_TILE));
  const most = Math.max(fewest, Math.round(width / MIN_TILE));

  let best = null;
  for (let cols = fewest; cols <= most; cols += 1) {
    const tile = width / cols;
    const fit = height / tile;
    const rows = Math.max(3, Math.ceil(fit - 0.001));
    const overflow = rows - fit;
    const drift = Math.abs(tile - TARGET_TILE) / TARGET_TILE;
    const score = overflow + drift * 0.25;
    if (!best || score < best.score) best = { cols, rows, tile, score };
  }

  return { ...best, offsetY: (height - best.rows * best.tile) / 2 };
};

// Only the outer ring of tiles is rendered; the green rectangle fills the rest.
const ringCells = (cols, rows) => {
  const cells = [];
  let photo = 0;
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const onRing = row === 0 || row === rows - 1 || col === 0 || col === cols - 1;
      if (!onRing) continue;
      const isPhoto = (row + col) % 2 === 0;
      cells.push({
        key: `${row}-${col}`,
        row,
        col,
        src: isPhoto ? PHOTOS[photo++ % PHOTOS.length] : null,
      });
    }
  }
  return cells;
};

const FashionPage = () => {
  const [layout, setLayout] = useState(null);

  useEffect(() => {
    const update = () => setLayout(measure());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <main className={styles.page}>
      {layout && (
        <div
          className={styles.board}
          style={{
            top: layout.offsetY,
            gridTemplateColumns: `repeat(${layout.cols}, ${layout.tile}px)`,
            gridTemplateRows: `repeat(${layout.rows}, ${layout.tile}px)`,
          }}
        >
          {ringCells(layout.cols, layout.rows).map(({ key, row, col, src }) => (
            <div
              key={key}
              className={src ? styles.photo : styles.pink}
              style={{ gridRow: row + 1, gridColumn: col + 1 }}
            >
              {src && <img src={src} alt="" />}
            </div>
          ))}
          <div className={styles.center}>
            <Link href="/" className={styles.back}>&larr; paige.</Link>
            <h1 className={styles.title}>I HAVE CUTE CLOTHES!</h1>
            <p className={styles.subtitle}>and you can too ;)</p>
            <a
              className={styles.button}
              href="https://www.depop.com/paigeinthemachine/"
              target="_blank"
              rel="noopener noreferrer"
            >
              depop
            </a>
          </div>
        </div>
      )}
    </main>
  );
};

export default FashionPage;
