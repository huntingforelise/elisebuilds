"use client";

import type { JSX } from "react";

const APPOINTMENT_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3l7taapC5pWms5Ont5__0Bo1mCwPnseQRmaTuhfcBAF-vBjLutJ6sZSuEE4St--zEKgUp6YswX?gv=true";
const BUTTON_LABEL = "Schedule 30 minutes with me";

type GoogleAppointmentButtonProps = {
  variant?: "primary" | "secondary";
};

export const GoogleAppointmentButton = ({
  variant = "primary",
}: GoogleAppointmentButtonProps): JSX.Element => {
  return (
    <a
      href={APPOINTMENT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={variant === "primary" ? "cta-primary" : "cta-secondary"}
    >
      {BUTTON_LABEL}
    </a>
  );
};
