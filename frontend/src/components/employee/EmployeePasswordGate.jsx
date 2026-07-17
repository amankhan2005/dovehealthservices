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
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600&display=swap');

        .emp-gate {
          --navy: #16314F;
          --navy-deep: #0E2138;
          --blue: #2F86C6;
          --blue-tint: #EAF3FA;
          --peach: #F2A878;
          --peach-tint: #FCEEE4;
          --peach-deep: #E8895A;
          --paper: #FBF9F7;
          --crisis-red: #C8302B;
          --crisis-red-tint: #FBE7E6;
          background: var(--paper);
          font-family: 'Inter', sans-serif;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 64px 24px;
        }

        .emp-gate h1 { font-family: 'Manrope', sans-serif; }

        .emp-gate-card {
          width: 100%;
          max-width: 440px;
          background: #fff;
          border: 1px solid #EFEAE5;
          border-radius: 20px;
          padding: 40px 32px;
          box-shadow: 0 20px 44px -24px rgba(22, 49, 79, 0.22);
        }

        .emp-gate-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: var(--peach-tint);
          color: var(--peach-deep);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
        }

        .emp-gate-card h1 {
          font-weight: 800;
          letter-spacing: -0.5px;
          font-size: 1.6rem;
          color: var(--navy);
          margin: 0 0 10px;
        }

        .emp-gate-card > p {
          font-size: 15px;
          line-height: 1.65;
          color: #6A7783;
          margin: 0 0 28px;
        }

        .emp-gate-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.3px;
          color: var(--navy);
          margin-bottom: 8px;
        }

        .emp-gate-field { position: relative; }

        .emp-gate-field input {
          width: 100%;
          padding: 14px 46px 14px 16px;
          border: 1px solid #E2DAD2;
          border-radius: 12px;
          font-size: 15px;
          font-family: inherit;
          color: var(--navy);
          background: var(--paper);
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .emp-gate-field input:focus {
          border-color: var(--blue);
          box-shadow: 0 0 0 3px rgba(47, 134, 198, 0.15);
        }

        .emp-gate-toggle {
          position: absolute;
          right: 6px;
          top: 50%;
          transform: translateY(-50%);
          width: 36px;
          height: 36px;
          border: none;
          background: none;
          color: #8A97A2;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
        }

        .emp-gate-toggle:hover { color: var(--navy); background: var(--blue-tint); }

        .emp-gate-error {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-top: 14px;
          padding: 12px 14px;
          border-radius: 10px;
          background: var(--crisis-red-tint);
          border-left: 3px solid var(--crisis-red);
          font-size: 13.5px;
          line-height: 1.5;
          color: #791F1F;
        }

        .emp-gate-error svg { flex-shrink: 0; margin-top: 1px; }

        .emp-gate-submit {
          width: 100%;
          margin-top: 24px;
          padding: 15px 24px;
          border: none;
          border-radius: 100px;
          background: var(--peach);
          color: #fff;
          font-family: inherit;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
          box-shadow: 0 14px 32px -12px rgba(242, 168, 120, 0.55);
        }

        .emp-gate-submit:hover { background: var(--peach-deep); transform: translateY(-1px); }

        .emp-gate-note {
          margin: 22px 0 0;
          font-size: 12.5px;
          line-height: 1.6;
          color: #8A97A2;
          text-align: center;
        }

        @media (prefers-reduced-motion: reduce) {
          .emp-gate-submit { transition: none; }
          .emp-gate-submit:hover { transform: none; }
        }
      `}</style>

      <div className="emp-gate-card">
        <div className="emp-gate-icon">
          <Lock size={22} />
        </div>

        <h1>Employee access</h1>
        <p>This area is for Dove Healthcare staff. Enter the shared password to continue.</p>

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
