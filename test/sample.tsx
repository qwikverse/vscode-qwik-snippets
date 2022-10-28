// sample snippets
import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './header.css';

export const Header = component$(() => {
  useStyles$(styles);

  return (
    <header>
      <div class="header-inner">
        <div class="header-logo">
          <a href="/">
            <span className="sr-only">Qwik Homepage</span>
            <img src="" />
          </a>
        </div>
        <ul >
          <li>
            <a href="/docs/">
              <span>Docs</span>
            </a>
          </li>
          <li>
            <a href="/tutorial/">
              <span>Tutorial</span>
            </a>
          </li>
          <li>
            <a href="/playground/">
              <span>Playground</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});

// └──────────────────────────────────────────────────┘