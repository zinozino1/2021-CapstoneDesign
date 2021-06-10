export const CLIENT_URL = "http://localhost:3000";

export const BACK_URL = "http://13.124.11.13:8080";

export const WHOLE_MINUTE = Array.from({ length: 100 }, (v, i) => i * 5);

export const CLASS_DURATION_HOUR = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const CLASS_DURATION_MINUTE = Array.from({ length: 60 }, (v, i) => i);

export const ABSENCE_TIME = Array.from({ length: 60 }, (v, i) => i);

export const ALERT_ATMOSPHERE = Array.from({ length: 60 }, (v, i) => i);

export const AZURE_FACEAPI = `https://koreacentral.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=true&returnFaceAttributes=headPose&recognitionModel=recognition_03&returnRecognitionModel=true&detectionModel=detection_01&faceIdTimeToLive=86400`;

export const YEAR = Array.from({ length: 10 }, (v, i) => 2020 + i);

export const MONTH = Array.from({ length: 12 }, (v, i) => 1 + i);

export const DAY = Array.from({ length: 31 }, (v, i) => 1 + i);
