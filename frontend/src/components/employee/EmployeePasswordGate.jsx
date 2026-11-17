import { useState } from "react";
import { Lock, Eye, EyeOff, AlertCircle } from "lucide-react";
import { EMPLOYEE_PASSWORD, EMPLOYEE_SESSION_KEY } from "../../config/employeeConfig";

/**
 * Wraps the Employee page. Children render only once the shared password
 * has been entered. The unlock is remembered for the browser tab session.
 */
export default function EmployeePasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(EMPLOYEE_SESSION_KEY) === "true"
  );
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === EMPLOYEE_PASSWORD) {
      sessionStorage.setItem(EMPLOYEE_SESSION_KEY, "true");
      setUnlocked(true);
      setError("");
      setValue("");
    } else {
      setError("That password doesn't match. Check with your supervisor and try again.");
    }
  };

  if (unlocked) return children;

  return (
    <div className="emp-gate">
      <style>{`
        .emp-gate {
          position: relative;
          overflow: hidden;
          min-height: calc(100vh - var(--dh-header-h));
          display: grid;
          place-items: center;
          padding: clamp(48px, 8vw, 96px) var(--dh-gutter);
          background:
            radial-gradient(800px 420px at 100% 0%, rgba(207, 222, 236, 0.75), transparent 60%),
            radial-gradient(700px 380px at 0% 100%, rgba(245, 238, 229, 0.95), transparent 60%),
            var(--dh-sand-50);
        }
        .emp-gate-card {
          position: relative;
          width: 100%;
          max-width: 440px;
          padding: clamp(30px, 5vw, 44px);
          border: 1px solid var(--dh-line);
          border-radius: var(--dh-radius-lg);
          background: #fff;
          box-shadow: var(--dh-shadow-lg);
          text-align: center;
        }
        .emp-gate-icon {
          width: 56px;
          height: 56px;
          margin: 0 auto 22px;
          display: grid;
          place-items: center;
          border-radius: 18px;
          background: var(--dh-brand);
          color: #fff;
          box-shadow: 0 14px 26px -14px rgba(11, 64, 119, 0.7);
        }
        .emp-gate-card h1 {
          margin: 0 0 10px;
          font-family: var(--dh-font-display);
          font-size: 2rem;
          font-weight: 500;
          letter-spacing: -0.015em;
          color: var(--dh-ink);
        }
        .emp-gate-card > p { margin: 0 0 28px; font-size: 15px; line-height: 1.65; color: var(--dh-ink-2); }
        .emp-gate-card form { text-align: left; }
        .emp-gate-label { display: block; margin-bottom: 8px; font-size: 13.5px; font-weight: 600; color: var(--dh-ink); }
        .emp-gate-field { position: relative; }
        .emp-gate-field input {
          width: 100%;
          min-height: 52px;
          padding: 13px 52px 13px 16px;
          border: 1.5px solid var(--dh-line);
          border-radius: 14px;
          background: #fff;
          font-family: var(--dh-font-sans);
          font-size: 15.5px;
          color: var(--dh-ink);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .emp-gate-field input:focus { outline: none; border-color: var(--dh-brand); box-shadow: 0 0 0 4px rgba(11, 64, 119, 0.12); }
        .emp-gate-toggle {
          position: absolute;
          right: 6px;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border: 0;
          border-radius: 10px;
          background: transparent;
          color: var(--dh-muted);
          cursor: pointer;
        }
        .emp-gate-toggle:hover { background: var(--dh-sky-50); color: var(--dh-brand); }
        .emp-gate-error {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-top: 12px;
          padding: 12px 14px;
          border-radius: 12px;
          background: var(--dh-crisis-50);
          font-size: 13.5px;
          line-height: 1.5;
          color: #9b1c14;
        }
        .emp-gate-error svg { flex-shrink: 0; margin-top: 1px; }
        .emp-gate-submit {
          width: 100%;
          min-height: 52px;
          margin-top: 18px;
          border: 0;
          border-radius: var(--dh-radius-pill);
          background: var(--dh-brand);
          font-family: var(--dh-font-sans);
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          box-shadow: 0 12px 26px -14px rgba(11, 64, 119, 0.7);
          transition: background-color 0.25s, transform 0.25s var(--dh-ease);
        }
        .emp-gate-submit:hover { background: var(--dh-brand-700); transform: translateY(-1px); }
        .emp-gate-note { margin: 22px 0 0; font-size: 13px; color: var(--dh-muted); }
      `}</style>

      <div className="emp-gate-card">
        <div className="emp-gate-icon">
          <Lock size={22} />
        </div>

        <h1>Employee access</h1>
        <p>This area is for Dove Health staff. Enter the shared password to continue.</p>

        <form onSubmit={handleSubmit}>
          <label className="emp-gate-label" htmlFor="employee-password">
            Password
          </label>

          <div className="emp-gate-field">
            <input
              id="employee-password"
              type={show ? "text" : "password"}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (error) setError("");
              }}
              placeholder="Enter password"
              autoComplete="current-password"
              autoFocus
            />
            <button
              type="button"
              className="emp-gate-toggle"
              onClick={() => setShow((s) => !s)}
              aria-label={show ? "Hide password" : "Show password"}
            >
              {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {error && (
            <div className="emp-gate-error" role="alert">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          <button type="submit" className="emp-gate-submit">
            Unlock
          </button>
        </form>

        <p className="emp-gate-note">
          Access stays unlocked until you close this browser tab.
        </p>
      </div>
    </div>
  );
}
