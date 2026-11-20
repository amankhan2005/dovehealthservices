// MathCaptcha.jsx
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { RefreshCw, CheckCircle2 } from "lucide-react";

const generate = () => {
  const isAdd = Math.random() > 0.5;
  let a = Math.floor(Math.random() * 9) + 1;
  let b = Math.floor(Math.random() * 9) + 1;
  if (!isAdd && b > a) [a, b] = [b, a];
  return { a, b, op: isAdd ? "+" : "−", answer: isAdd ? a + b : a - b };
};

const MathCaptcha = forwardRef(({ onValidChange, className = "" }, ref) => {
  const [challenge, setChallenge] = useState(generate);
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = value.trim() !== "" && Number(value) === challenge.answer;

  const cbRef = useRef(onValidChange);
  useEffect(() => {
    cbRef.current = onValidChange;
  });
  useEffect(() => {
    cbRef.current?.(isValid);
  }, [isValid]);

  const regenerate = useCallback(() => {
    setChallenge(generate());
    setValue("");
    setTouched(false);
  }, []);

  useImperativeHandle(ref, () => ({ regenerate }), [regenerate]);

  const showError = touched && value.trim() !== "" && !isValid;

  return (
    <div className={`captcha-field ${className}`}>
      <style>{`
        .captcha-field { display: flex; flex-direction: column; gap: 8px; }
        .captcha-field > label {
          font-size: 13.5px;
          font-weight: 600;
          color: var(--dh-ink);
        }
        .captcha-row { display: flex; flex-wrap: wrap; align-items: stretch; gap: 10px; }
        .captcha-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
          min-height: 52px;
          padding: 0 16px;
          border-radius: var(--dh-radius);
          background: var(--dh-paper);
          border: 1px solid var(--dh-line-strong);
          font-family: var(--dh-font-display);
          font-size: 18px;
          font-weight: 650;
          font-variant-numeric: tabular-nums;
          color: var(--dh-ink);
          user-select: none;
        }
        .captcha-chip .op { color: var(--dh-muted); font-family: var(--dh-font-sans); font-size: 16px; }
        .captcha-chip .q { color: var(--dh-accent-ink); }
        .captcha-input-wrap { position: relative; flex: 1 1 140px; min-width: 0; }
  .captcha-input-wrap + .captcha-refresh { min-height: 52px; }
        .captcha-input-wrap input {
          width: 100%;
          height: 100%;
          min-height: 52px;
          padding: 13px 40px 13px 16px;
          border: 1px solid var(--dh-line-strong);
          border-radius: var(--dh-radius);
          background: #fff;
          font-family: var(--dh-font-sans);
          font-size: 15.5px;
          color: var(--dh-ink);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .captcha-input-wrap input::placeholder { color: #8797a8; }
        .captcha-input-wrap input:focus {
          outline: none;
          border-color: var(--dh-brand);
          box-shadow: 0 0 0 4px rgba(11, 64, 119, 0.12);
        }
        .captcha-input-wrap input.valid { border-color: var(--dh-success); }
        .captcha-input-wrap input.error { border-color: var(--dh-crisis); }
        .captcha-check {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--dh-success);
        }
        .captcha-refresh {
          width: 52px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border: 1px solid var(--dh-line-strong);
          border-radius: var(--dh-radius);
          background: #fff;
          color: var(--dh-brand);
          cursor: pointer;
          transition: background-color 0.2s, border-color 0.2s, transform 0.3s var(--dh-ease);
        }
        .captcha-refresh:hover { background: var(--dh-sky-50); border-color: var(--dh-sky-200); }
        .captcha-refresh:active { transform: rotate(-30deg); }
        .captcha-error-text { margin: 0; font-size: 13px; font-weight: 500; color: var(--dh-crisis); }
      `}</style>

      <label htmlFor="captcha-answer">Security check</label>

      <div className="captcha-row">
        <div className="captcha-chip">
          <span>{challenge.a}</span>
          <span className="op">{challenge.op}</span>
          <span>{challenge.b}</span>
          <span className="op">=</span>
          <span className="q">?</span>
        </div>

        <div className="captcha-input-wrap">
          <input
            id="captcha-answer"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            placeholder="Answer"
            aria-invalid={showError}
            value={value}
            onChange={(e) => setValue(e.target.value.replace(/[^\d-]/g, ""))}
            onBlur={() => setTouched(true)}
            className={showError ? "error" : isValid ? "valid" : ""}
          />
          {isValid && <CheckCircle2 size={18} className="captcha-check" />}
        </div>

        <button
          type="button"
          onClick={regenerate}
          aria-label="Get a new question"
          title="Get a new question"
          className="captcha-refresh"
        >
          <RefreshCw size={16} />
        </button>
      </div>

      {showError && (
        <p className="captcha-error-text">Incorrect answer — please try again.</p>
      )}
    </div>
  );
});

MathCaptcha.displayName = "MathCaptcha";

export default MathCaptcha;