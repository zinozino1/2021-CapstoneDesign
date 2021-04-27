export const CLIENT_URL = "http://localhost:3000";

export const BACK_URL = "http://localhost:4000";

export const CLASS_DURATION_HOUR = ["0h", "1h", "2h", "3h", "4h", "5h"];

export const CLASS_DURATION_MINUTE = Array.from(
  { length: 60 },
  (v, i) => i + "m",
);

export const ABSENCE_TIME = Array.from({ length: 60 }, (v, i) => i + "m");

export const ALERT_ATMOSPHERE = Array.from({ length: 60 }, (v, i) => i + "m");

export const AZURE_FACEAPI = `https://koreacentral.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=true&returnFaceAttributes=headPose&recognitionModel=recognition_03&returnRecognitionModel=true&detectionModel=detection_01&faceIdTimeToLive=86400`;
