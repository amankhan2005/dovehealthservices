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
        .captcha-field label {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: var(--navy);
          margin-bottom: 6px;
        }
        .captcha-row {
          display: flex;
          align-items: stretch;
          gap: 10px;
        }
        .captcha-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--navy);
          color: #fff;
          border-radius: 12px;
          padding: 0 16px;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 15px;
          white-space: nowrap;
          user-select: none;
        }
        .captcha-chip .op { color: rgba(255,255,255,0.7); }
        .captcha-chip .q { color: var(--peach); }
        .captcha-input-wrap {
          position: relative;
          flex: 1;
        }
        .captcha-input-wrap input {
          width: 100%;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: var(--navy);
          padding: 13px 40px 13px 16px;
          border-radius: 12px;
          border: 1px solid #E3DFD9;
          background: var(--paper);
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          box-sizing: border-box;
        }
        .captcha-input-wrap input:focus {
          border-color: var(--blue);
          box-shadow: 0 0 0 3px rgba(47, 134, 198, 0.15);
        }
        .captcha-input-wrap input.error {
          border-color: var(--crisis-red);
        }
        .captcha-input-wrap input.valid {
          border-color: #2F8F5B;
        }
        .captcha-check {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #2F8F5B;
          pointer-events: none;
        }
        .captcha-refresh {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 14px;
          border-radius: 12px;
          border: 1px solid #E3DFD9;
          background: var(--paper);
          color: var(--navy);
          cursor: pointer;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .captcha-refresh:hover {
          border-color: var(--peach-deep);
          color: var(--peach-deep);
        }
        .captcha-error-text {
          margin-top: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: var(--crisis-red);
        }
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