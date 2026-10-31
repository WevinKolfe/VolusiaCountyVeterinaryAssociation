import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const WEB3FORMS_HCAPTCHA_SITE_KEY =
  "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

let hCaptchaScriptPromise;

function loadHCaptchaScript() {
  if (
    typeof window !== "undefined" &&
    window.hcaptcha
  ) {
    return Promise.resolve(window.hcaptcha);
  }

  if (hCaptchaScriptPromise) {
    return hCaptchaScriptPromise;
  }

  hCaptchaScriptPromise = new Promise(
    (resolve, reject) => {
      const existingScript = document.querySelector(
        'script[data-vvma-hcaptcha="true"]'
      );

      if (existingScript) {
        existingScript.addEventListener("load", () => {
          resolve(window.hcaptcha);
        });

        existingScript.addEventListener(
          "error",
          reject
        );

        return;
      }

      const script = document.createElement("script");

      script.src =
        "https://js.hcaptcha.com/1/api.js?render=explicit";

      script.async = true;
      script.defer = true;
      script.dataset.vvmaHcaptcha = "true";

      script.onload = () => {
        if (window.hcaptcha) {
          resolve(window.hcaptcha);
        } else {
          reject(
            new Error(
              "hCaptcha loaded without exposing its API."
            )
          );
        }
      };

      script.onerror = () => {
        reject(
          new Error(
            "The hCaptcha script could not be loaded."
          )
        );
      };

      document.head.appendChild(script);
    }
  );

  return hCaptchaScriptPromise;
}

const Web3Captcha = forwardRef(function Web3Captcha(
  { onVerify, onExpire },
  ref
) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  const [loadError, setLoadError] =
    useState(false);

  useImperativeHandle(ref, () => ({
    reset() {
      if (
        window.hcaptcha &&
        widgetIdRef.current !== null
      ) {
        window.hcaptcha.reset(
          widgetIdRef.current
        );
      }
    },
  }));

  useEffect(() => {
    let cancelled = false;

    const renderCaptcha = async () => {
      try {
        const hcaptcha =
          await loadHCaptchaScript();

        if (
          cancelled ||
          !containerRef.current ||
          widgetIdRef.current !== null
        ) {
          return;
        }

        widgetIdRef.current =
          hcaptcha.render(
            containerRef.current,
            {
              sitekey:
                WEB3FORMS_HCAPTCHA_SITE_KEY,
              theme: "light",
              size: "normal",

              callback: (token) => {
                onVerify?.(token);
              },

              "expired-callback": () => {
                onExpire?.();
              },

              "error-callback": () => {
                onExpire?.();
                setLoadError(true);
              },
            }
          );
      } catch (error) {
        console.error(
          "Unable to load hCaptcha:",
          error
        );

        if (!cancelled) {
          setLoadError(true);
        }
      }
    };

    renderCaptcha();

    return () => {
      cancelled = true;

      if (
        window.hcaptcha &&
        widgetIdRef.current !== null
      ) {
        try {
          window.hcaptcha.remove(
            widgetIdRef.current
          );
        } catch {
          // The widget may already have been removed.
        }
      }

      widgetIdRef.current = null;
    };
  }, [onVerify, onExpire]);

  return (
    <div className="captcha-section">
      <div
        ref={containerRef}
        className="h-captcha"
      />

      {loadError && (
        <p
          className="captcha-error"
          role="alert"
        >
          The security check could not be
          loaded. Disable content blockers or
          refresh the page and try again.
        </p>
      )}
    </div>
  );
});

export default Web3Captcha;