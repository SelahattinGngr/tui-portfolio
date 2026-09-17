import { useState } from "react";
import { Button } from "@/components/portfolio/ui/Button";
import { Field } from "@/components/portfolio/ui/Field";
import { FadeUp } from "@/components/portfolio/ui/FadeUp";
import { Rule } from "@/components/portfolio/ui/Rule";
import { CONTACT_CONSTANTS } from "@/lib/constants/contact.constants";
import type { SubmitEventHandler } from "react";

type ContactViewProperties = {
  sent: boolean;
  cName: string;
  cEmail: string;
  cMsg: string;
  onName: (value: string) => void;
  onEmail: (value: string) => void;
  onMsg: (value: string) => void;
  onSubmit: () => void;
};

interface Web3FormsResponse {
  success?: boolean;
  message?: string;
}

interface RateLimitRecord {
  count: number;
  timestamp: number;
}

const RATE_LIMIT_KEY = "selahattin_contact_limit";
const MAX_SUBMISSIONS_PER_DAY = 2;
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

const parseRecord = (raw: string): RateLimitRecord | null => {
  try {
    return JSON.parse(raw) as RateLimitRecord;
  } catch {
    return null;
  }
};

const isRateLimited = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }
  const raw = localStorage.getItem(RATE_LIMIT_KEY);
  if (raw === null) {
    return false;
  }
  const record = parseRecord(raw);
  if (record === null || Date.now() - record.timestamp > ONE_DAY_MS) {
    localStorage.removeItem(RATE_LIMIT_KEY);
    return false;
  }
  return record.count >= MAX_SUBMISSIONS_PER_DAY;
};

const incrementRateLimit = (): void => {
  if (typeof window === "undefined") {
    return;
  }
  const raw = localStorage.getItem(RATE_LIMIT_KEY);
  const now = Date.now();
  if (raw === null) {
    localStorage.setItem(
      RATE_LIMIT_KEY,
      JSON.stringify({ count: 1, timestamp: now })
    );
    return;
  }
  const record = parseRecord(raw);
  const isExpired = record === null || now - record.timestamp > ONE_DAY_MS;
  const count = isExpired ? 1 : record.count + 1;
  const timestamp = isExpired ? now : record.timestamp;
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({ count, timestamp }));
};

const sendWeb3FormsMessage = async (
  name: string,
  email: string,
  message: string
): Promise<Web3FormsResponse> => {
  const formData = new FormData();
  formData.append("access_key", CONTACT_CONSTANTS.WEB3FORMS_ACCESS_KEY);
  formData.append("from_name", "selahattin.dev Portföy");
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);
  formData.append("subject", `Yeni İletişim Mesajı (${name}) — selahattin.dev`);

  const response = await fetch("https://api.web3forms.com/submit", {
    body: formData,
    headers: {
      Accept: "application/json",
    },
    method: "POST",
  });

  return (await response.json()) as Web3FormsResponse;
};

export const ContactView = ({
  sent,
  cName,
  cEmail,
  cMsg,
  onName,
  onEmail,
  onMsg,
  onSubmit,
}: ContactViewProperties) => {
  const { FIELDS, LABELS } = CONTACT_CONSTANTS;
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [botCheck, setBotCheck] = useState("");

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    if (botCheck.length > 0) {
      onSubmit();
      return;
    }

    if (isRateLimited()) {
      setErrorMessage(
        "Spam koruması: Günlük maksimum 2 mesaj gönderme limitine ulaştınız. Lütfen doğrudan e-posta gönderin."
      );
      return;
    }

    if (CONTACT_CONSTANTS.WEB3FORMS_ACCESS_KEY.length === 0) {
      setErrorMessage(CONTACT_CONSTANTS.KEY_MISSING_MESSAGE);
      return;
    }

    setSubmitting(true);
    setErrorMessage(null);

    let data: Web3FormsResponse;
    try {
      data = await sendWeb3FormsMessage(cName, cEmail, cMsg);
    } catch {
      setErrorMessage(CONTACT_CONSTANTS.ERROR_MESSAGE);
      setSubmitting(false);
      return;
    }

    setSubmitting(false);

    if (data.success) {
      incrementRateLimit();
      onSubmit();
    } else {
      setErrorMessage(data.message ?? CONTACT_CONSTANTS.ERROR_MESSAGE);
    }
  };

  const mailtoFallback = `mailto:${FIELDS.MAIL.value}?subject=${encodeURIComponent(
    `Portföy İletişim: ${cName}`
  )}&body=${encodeURIComponent(cMsg)}`;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6.5">
      <FadeUp delayMs={60}>
        {sent ? (
          <div className="border-ok text-ok border px-4 py-3.5 text-[0.82rem]">
            {CONTACT_CONSTANTS.SENT_MESSAGE}
          </div>
        ) : (
          <form className="flex flex-col gap-2.5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="botcheck"
              value={botCheck}
              onChange={(event) => setBotCheck(event.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <label className="sr-only" htmlFor="contact-name">
              {LABELS.NAME}
            </label>
            <Field
              id="contact-name"
              name="name"
              type="text"
              required
              value={cName}
              onChange={(event) => onName(event.target.value)}
              placeholder={CONTACT_CONSTANTS.PLACEHOLDERS.NAME}
            />

            <label className="sr-only" htmlFor="contact-email">
              {LABELS.EMAIL}
            </label>
            <Field
              id="contact-email"
              name="email"
              type="email"
              required
              value={cEmail}
              onChange={(event) => onEmail(event.target.value)}
              placeholder={CONTACT_CONSTANTS.PLACEHOLDERS.EMAIL}
            />

            <label className="sr-only" htmlFor="contact-message">
              {LABELS.MESSAGE}
            </label>
            <Field
              multiline
              id="contact-message"
              name="message"
              required
              rows={5}
              value={cMsg}
              onChange={(event) => onMsg(event.target.value)}
              placeholder={CONTACT_CONSTANTS.PLACEHOLDERS.MESSAGE}
            />

            {errorMessage && (
              <div className="border-line bg-panel flex flex-col gap-1.5 border p-2.5 text-[0.75rem] text-amber-300">
                <span>{errorMessage}</span>
                <a href={mailtoFallback} className="text-accent underline">
                  ↗ Doğrudan E-posta Gönder (mailto)
                </a>
              </div>
            )}

            <Button
              variant="accent"
              className="self-start"
              type="submit"
              disabled={submitting}
            >
              {submitting
                ? CONTACT_CONSTANTS.SENDING_LABEL
                : CONTACT_CONSTANTS.SUBMIT_LABEL}
            </Button>
          </form>
        )}
      </FadeUp>

      <FadeUp delayMs={130}>
        <Rule label={CONTACT_CONSTANTS.DIRECT_LABEL} className="mb-3" />
        <div className="mb-1.75 flex gap-3 text-[0.82rem]">
          <span className="text-muted w-14 shrink-0">{FIELDS.MAIL.label}</span>
          <span>{FIELDS.MAIL.value}</span>
        </div>
        <div className="mb-1.75 flex gap-3 text-[0.82rem]">
          <span className="text-muted w-14 shrink-0">{FIELDS.TZ.label}</span>
          <span>{FIELDS.TZ.value}</span>
        </div>
        <div className="flex gap-3 text-[0.82rem]">
          <span className="text-muted w-14 shrink-0">{FIELDS.NOTE.label}</span>
          <span className="text-muted flex-auto text-pretty">
            {FIELDS.NOTE.value}
          </span>
        </div>
      </FadeUp>
    </div>
  );
};
