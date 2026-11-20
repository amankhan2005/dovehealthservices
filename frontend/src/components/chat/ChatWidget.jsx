import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, X, Send, RotateCcw, ExternalLink } from "lucide-react";
import ArrowIcon from "../ui/ArrowIcon";
import { getResponse } from "./chatEngine";
import { SUGGESTED_QUESTIONS, WELCOME_MESSAGE } from "../../data/chatbotKnowledge";

/**
 * Dove Health rule-based chat assistant.
 * - Answers come from the website's own content (see data/chatbotKnowledge.js).
 * - No AI, no network requests, nothing stored: the conversation only lives in
 *   this component's memory and is cleared on reload or "Restart".
 */
const CHAT_CSS = `
  .dh-chat__launcher {
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 10000;
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    border: 0;
    border-radius: 50%;
    background: var(--dh-brand);
    color: #fff;
    cursor: pointer;
    box-shadow: 0 16px 34px -14px rgba(11, 64, 119, 0.75), 0 0 0 4px rgba(255, 255, 255, 0.9);
    transition: transform 0.25s var(--dh-ease), background-color 0.25s;
  }

  .dh-chat__launcher:hover { background: var(--dh-brand-700); transform: translateY(-2px); }
  .dh-chat__launcher svg { transition: transform 0.3s var(--dh-ease); }
  .dh-chat__launcher[aria-expanded="true"] svg { transform: rotate(90deg); }

  .dh-chat__panel {
    position: fixed;
    right: 20px;
    bottom: 92px;
    z-index: 10001;
    width: min(392px, calc(100vw - 40px));
    height: min(640px, calc(100vh - 116px));
    height: min(640px, calc(100dvh - 116px));
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--dh-line);
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 30px 70px -30px rgba(14, 42, 71, 0.45), 0 8px 20px -12px rgba(14, 42, 71, 0.2);
    transform-origin: 100% 100%;
    opacity: 0;
    visibility: hidden;
    transform: translateY(12px) scale(0.97);
    transition: opacity 0.22s var(--dh-ease), transform 0.22s var(--dh-ease), visibility 0s linear 0.22s;
  }

  .dh-chat__panel.is-open {
    opacity: 1;
    visibility: visible;
    transform: none;
    transition: opacity 0.26s var(--dh-ease), transform 0.26s var(--dh-ease), visibility 0s;
  }

  .dh-chat__head {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 14px 16px 18px;
    background: var(--dh-brand);
    color: #fff;
  }

  .dh-chat__avatar {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #fff;
  }

  .dh-chat__avatar .dh-dove-mark { width: 17px; background-color: var(--dh-brand); }

  .dh-chat__titles { flex: 1; min-width: 0; }

  .dh-chat__titles h2 {
    margin: 0;
    font-size: 15.5px;
    font-weight: 700;
    letter-spacing: -0.01em;
    line-height: 1.3;
  }

  .dh-chat__titles p {
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 2px 0 0;
    font-size: 12.5px;
    color: rgba(255, 255, 255, 0.78);
  }

  .dh-chat__titles .dot { width: 7px; height: 7px; border-radius: 50%; background: #5fd59a; }

  .dh-chat__icon-btn {
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border: 0;
    border-radius: 10px;
    background: transparent;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .dh-chat__icon-btn:hover { background: rgba(255, 255, 255, 0.14); }
  .dh-chat__icon-btn:focus-visible { outline: 2px solid #fff; outline-offset: 1px; }

  .dh-chat__body {
    flex: 1;
    overflow-y: auto;
    overscroll-behavior: contain;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 18px 16px 12px;
    background: var(--dh-sand-50);
  }

  .dh-msg {
    max-width: 88%;
    padding: 11px 14px;
    border-radius: 10px;
    font-size: 14.5px;
    line-height: 1.55;
    overflow-wrap: anywhere;
    animation: dh-msg-in 0.25s var(--dh-ease);
  }

  @keyframes dh-msg-in {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: none; }
  }

  .dh-msg p { margin: 0; }
  .dh-msg p + p { margin-top: 8px; }

  .dh-msg--bot {
    align-self: flex-start;
    border: 1px solid var(--dh-line);
    border-top-left-radius: 3px;
    background: #fff;
    color: var(--dh-ink);
  }

  .dh-msg--user {
    align-self: flex-end;
    border-top-right-radius: 3px;
    background: var(--dh-brand);
    color: #fff;
  }

  .dh-msg--alert {
    border-color: rgba(180, 35, 24, 0.22);
    border-left: 3px solid var(--dh-crisis);
    background: var(--dh-crisis-50);
  }

  .dh-msg__title { font-weight: 700; color: var(--dh-brand); }

  .dh-msg__list { margin: 8px 0 0; padding: 0; list-style: none; display: grid; gap: 6px; }

  .dh-msg__list li {
    position: relative;
    padding-left: 14px;
  }

  .dh-msg__list li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.62em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--dh-accent);
  }

  .dh-msg a { color: var(--dh-brand); font-weight: 600; text-decoration: underline; text-underline-offset: 2px; }

  .dh-msg__facts { display: grid; gap: 6px; margin: 10px 0 0; }
  .dh-msg__facts div { display: grid; grid-template-columns: 64px minmax(0, 1fr); gap: 8px; }
  .dh-msg__facts dt { font-size: 12px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: var(--dh-muted); padding-top: 2px; }
  .dh-msg__facts dd { margin: 0; font-weight: 600; }

  .dh-msg__foot { color: var(--dh-ink-2); font-size: 13.5px; }

  .dh-msg__links { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px; }

  .dh-msg .dh-msg__link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 34px;
    padding: 0 12px;
    border-radius: var(--dh-radius);
    background: var(--dh-sky-50);
    font-size: 13px;
    font-weight: 600;
    color: var(--dh-brand);
    text-decoration: none;
    transition: background-color 0.2s, color 0.2s;
  }

  .dh-msg .dh-msg__link:hover { background: var(--dh-brand); color: #fff; }

  .dh-msg__note { margin-top: 10px !important; font-size: 12.5px; color: var(--dh-muted); }

  .dh-typing { display: inline-flex; gap: 4px; padding: 14px 16px; }

  .dh-typing span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--dh-sky-200);
    animation: dh-dot 1.1s infinite ease-in-out;
  }

  .dh-typing span:nth-child(2) { animation-delay: 0.15s; }
  .dh-typing span:nth-child(3) { animation-delay: 0.3s; }

  @keyframes dh-dot {
    0%, 60%, 100% { transform: translateY(0); background: var(--dh-sky-200); }
    30% { transform: translateY(-4px); background: var(--dh-dove); }
  }

  .dh-chat__chips { display: flex; flex-wrap: wrap; gap: 6px; padding-top: 4px; }

  .dh-chat__chip {
    padding: 8px 12px;
    border: 1px solid rgba(11, 64, 119, 0.25);
    border-radius: var(--dh-radius);
    background: #fff;
    font-family: inherit;
    font-size: 13px;
    font-weight: 500;
    color: var(--dh-brand);
    text-align: left;
    cursor: pointer;
    transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  }

  .dh-chat__chip:hover { background: var(--dh-brand); border-color: var(--dh-brand); color: #fff; }

  .dh-chat__composer {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 12px 8px;
    border-top: 1px solid var(--dh-line);
    background: #fff;
  }

  .dh-chat__composer input {
    flex: 1;
    min-width: 0;
    height: 46px;
    padding: 0 14px;
    border: 1px solid var(--dh-line-strong);
    border-radius: var(--dh-radius);
    background: #fff;
    font-family: inherit;
    font-size: 15px;
    color: var(--dh-ink);
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .dh-chat__composer input::placeholder { color: #8797a8; }

  .dh-chat__composer input:focus {
    outline: none;
    border-color: var(--dh-brand);
    box-shadow: 0 0 0 4px rgba(11, 64, 119, 0.12);
  }

  .dh-chat__send {
    width: 46px;
    height: 46px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border: 0;
    border-radius: var(--dh-radius);
    background: var(--dh-brand);
    color: #fff;
    cursor: pointer;
    transition: background-color 0.2s, opacity 0.2s;
  }

  .dh-chat__send:hover { background: var(--dh-brand-700); }
  .dh-chat__send:disabled { opacity: 0.4; cursor: not-allowed; }

  .dh-chat__privacy {
    margin: 0;
    padding: 0 16px 12px;
    background: #fff;
    font-size: 11.5px;
    color: var(--dh-muted);
    text-align: center;
  }

  @media (max-width: 520px) {
    .dh-chat__panel {
      inset: 0;
      width: 100%;
      height: 100%;
      border: 0;
      border-radius: 0;
      transform: translateY(24px);
    }

    .dh-chat__launcher { right: 16px; bottom: 16px; }
    .dh-chat__launcher.is-hidden { opacity: 0; pointer-events: none; }
    .dh-msg { max-width: 92%; }
  }
`;

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export default function ChatWidget() {
  const nextId = useRef(1);
  const makeWelcome = () => ({ id: 0, from: "bot", answer: WELCOME_MESSAGE });

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => [makeWelcome()]);
  const [suggestions, setSuggestions] = useState(SUGGESTED_QUESTIONS);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const launcherRef = useRef(null);
  const timerRef = useRef(null);

  const close = useCallback(() => {
    setOpen(false);
    launcherRef.current?.focus();
  }, []);

  // Focus the input when the window opens; Escape closes it.
  useEffect(() => {
    if (!open) return undefined;
    const t = setTimeout(() => inputRef.current?.focus(), 120);
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  // Keep the newest message in view.
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  }, [messages, typing, open]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const send = (raw) => {
    const text = String(raw || "").trim().slice(0, 300);
    if (!text || typing) return;

    setMessages((m) => [...m, { id: nextId.current++, from: "user", text }]);
    setInput("");
    setSuggestions([]);
    setTyping(true);

    const reply = getResponse(text);
    timerRef.current = setTimeout(
      () => {
        setMessages((m) => [...m, { id: nextId.current++, from: "bot", answer: reply.answer }]);
        setSuggestions(reply.suggestions);
        setTyping(false);
      },
      prefersReducedMotion() ? 0 : 520
    );
  };

  const restart = () => {
    clearTimeout(timerRef.current);
    setMessages([makeWelcome()]);
    setSuggestions(SUGGESTED_QUESTIONS);
    setTyping(false);
    setInput("");
    inputRef.current?.focus();
  };

  // On small screens the chat covers the page, so close it when a link is followed.
  const onNavigate = () => {
    if (window.matchMedia?.("(max-width: 520px)").matches) setOpen(false);
  };

  return (
    <div className="dh-chat">
      <style>{CHAT_CSS}</style>

      <section
        id="dh-chat-panel"
        className={`dh-chat__panel${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="false"
        aria-labelledby="dh-chat-title"
        aria-hidden={!open}
      >
        <header className="dh-chat__head">
          <span className="dh-chat__avatar" aria-hidden="true">
            <span className="dh-dove-mark" />
          </span>
          <div className="dh-chat__titles">
            <h2 id="dh-chat-title">Dove Health Assistant</h2>
            <p>
              <span className="dot" aria-hidden="true" />
              Answers from our website
            </p>
          </div>
          <button
            type="button"
            className="dh-chat__icon-btn"
            onClick={restart}
            aria-label="Restart conversation"
            title="Restart conversation"
          >
            <RotateCcw size={18} />
          </button>
          <button
            type="button"
            className="dh-chat__icon-btn"
            onClick={close}
            aria-label="Close chat"
            title="Close chat"
          >
            <X size={20} />
          </button>
        </header>

        <div className="dh-chat__body" ref={bodyRef} role="log" aria-live="polite" aria-relevant="additions">
          {messages.map((m) =>
            m.from === "user" ? (
              <div key={m.id} className="dh-msg dh-msg--user">
                <p>{m.text}</p>
              </div>
            ) : (
              <BotMessage key={m.id} answer={m.answer} onNavigate={onNavigate} />
            )
          )}

          {typing && (
            <div className="dh-msg dh-msg--bot dh-typing" role="status" aria-label="Assistant is typing">
              <span />
              <span />
              <span />
            </div>
          )}

          {!typing && suggestions.length > 0 && (
            <div className="dh-chat__chips" aria-label="Suggested questions">
              {suggestions.map((q) => (
                <button key={q} type="button" className="dh-chat__chip" onClick={() => send(q)}>
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>

        <form
          className="dh-chat__composer"
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
        >
          <label htmlFor="dh-chat-input" className="dh-visually-hidden">
            Type your question
          </label>
          <input
            id="dh-chat-input"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question…"
            maxLength={300}
            autoComplete="off"
          />
          <button type="submit" className="dh-chat__send" disabled={!input.trim() || typing} aria-label="Send message">
            <Send size={18} />
          </button>
        </form>
        <p className="dh-chat__privacy">Please don't share personal or medical details here.</p>
      </section>

      <button
        ref={launcherRef}
        type="button"
        className={`dh-chat__launcher${open ? " is-hidden" : ""}`}
        onClick={() => (open ? close() : setOpen(true))}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={open}
        aria-controls="dh-chat-panel"
      >
        {open ? <X size={24} /> : <MessageCircle size={26} />}
      </button>
    </div>
  );
}

function BotMessage({ answer, onNavigate }) {
  return (
    <div className={`dh-msg dh-msg--bot${answer.tone === "alert" ? " dh-msg--alert" : ""}`}>
      {answer.title && <p className="dh-msg__title">{answer.title}</p>}

      {answer.text?.map((t, i) => (
        <p key={i}>{t}</p>
      ))}

      {answer.list && (
        <ul className="dh-msg__list">
          {answer.list.map((item) => (
            <li key={item.title}>
              {item.to ? (
                <Link to={item.to} onClick={onNavigate}>
                  {item.title}
                </Link>
              ) : (
                item.title
              )}
            </li>
          ))}
        </ul>
      )}

      {answer.facts && (
        <dl className="dh-msg__facts">
          {answer.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.href ? <a href={f.href}>{f.value}</a> : f.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {answer.footnote && <p className="dh-msg__foot">{answer.footnote}</p>}

      {answer.links && (
        <div className="dh-msg__links">
          {answer.links.map((l) =>
            l.external ? (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="dh-msg__link">
                {l.label}
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            ) : (
              <Link key={l.label} to={l.to} onClick={onNavigate} className="dh-msg__link">
                {l.label}
                <ArrowIcon size={13} />
              </Link>
            )
          )}
        </div>
      )}

      {answer.note && <p className="dh-msg__note">{answer.note}</p>}
    </div>
  );
}
