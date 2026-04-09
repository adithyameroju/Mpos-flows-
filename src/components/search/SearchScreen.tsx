import { useMemo, useState } from 'react';
import { searchQuickFilters, searchRecentItems } from '../../data/tabScreensData';
import { MainScreenHeader } from '../layout/MainScreenHeader';
import { IconChevronRight, IconPolicy, IconTabSearch } from '../icons/DashboardIcons';
import styles from './SearchScreen.module.css';

export function SearchScreen() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchRecentItems;
    return searchRecentItems.filter(
      (item) =>
        item.label.toLowerCase().includes(q) || item.meta.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <>
      <MainScreenHeader title="Search" />
      <div className={styles.page}>
      <p className={styles.subtitle}>Policies, quotes, and endorsements for phone &amp; EV battery</p>

      <div className={styles.searchWrap}>
        <span className={styles.searchIcon} aria-hidden>
          <IconTabSearch size={20} />
        </span>
        <input
          className={styles.input}
          type="search"
          placeholder="Policy number, customer name…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          enterKeyHint="search"
          autoComplete="off"
          aria-label="Search policies"
        />
      </div>

      <p className={styles.sectionLabel}>Quick filters</p>
      <div className={styles.chips} role="group" aria-label="Quick filters">
        {searchQuickFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            className={styles.chip}
            onClick={() =>
              setQuery(f.id === 'policy' ? 'ACK-' : f.label === 'EV battery' ? 'Battery' : f.label)
            }
          >
            {f.label}
          </button>
        ))}
      </div>

      <p className={styles.sectionLabel}>Recent</p>
      {filtered.length === 0 ? (
        <p className={styles.empty}>No matches. Try another keyword or clear the search.</p>
      ) : (
        <ul className={styles.list}>
          {filtered.map((item) => (
            <li key={item.id}>
              <button type="button" className={styles.row}>
                <span className={styles.rowIcon} aria-hidden>
                  <IconPolicy size={20} />
                </span>
                <span className={styles.rowBody}>
                  <span className={styles.rowTitle}>{item.label}</span>
                  <span className={styles.rowMeta}>{item.meta}</span>
                </span>
                <span className={styles.rowChevron} aria-hidden>
                  <IconChevronRight size={18} />
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
      </div>
    </>
  );
}
