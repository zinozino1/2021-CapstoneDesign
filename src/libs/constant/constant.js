export const CLIENT_URL = "http://localhost:3000";

export const BACK_URL = "http://localhost:4000";

export const CLASS_DURATION_HOUR = ["0h", "1h", "2h", "3h", "4h", "5h"];

export const CLASS_DURATION_MINUTE = Array.from(
  { length: 60 },
  (v, i) => i + "m",
);

export const ABSENCE_TIME = Array.from({ length: 60 }, (v, i) => i + "m");

export const ALERT_ATMOSPHERE = Array.from({ length: 60 }, (v, i) => i + "m");
