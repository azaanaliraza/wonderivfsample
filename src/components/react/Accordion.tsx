import { useId, useState } from 'react';
import type { Faq } from '../../lib/content-types';

export default function Accordion({ items, id }: { items: Faq[]; id?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <div className="accordion" id={id} role="list">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${uid}-panel-${i}`;
        const btnId = `${uid}-btn-${i}`;
        return (
          <div className="acc-item" role="listitem" key={item.q}>
            <h3 style={{ margin: 0 }}>
              <button
                id={btnId}
                className="acc-trigger"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <span className="acc-icon" aria-hidden="true" />
              </button>
            </h3>
            <div className="acc-panel" id={panelId} role="region" aria-labelledby={btnId} data-open={isOpen}>
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
