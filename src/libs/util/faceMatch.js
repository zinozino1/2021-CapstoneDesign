import * as faceapi from "face-api.js";
const MODEL_URL = "/models";

/**
 * @author 박진호
 * @version 1.0
 * @summary faceAPI
 * @deprecated flask서버와의 연동으로 사용되지 않음
 */

export default class FaceMatch {
  constructor(input, appendedElement = document.body) {
    this.input = input;
    this.canvas = faceapi.createCanvasFromMedia(input);
    this.canvas.width = input.videoWidth;
    this.canvas.height = input.videoHeight;
    this.context = this.canvas.getContext("2d");
    appendedElement.appendChild(this.canvas);
    faceapi.matchDimensions(this.canvas, this.displaySize);
  }
  get displaySize() {
    return {
      width: this.input.videoWidth,
      height: this.input.videoHeight,
    };
  }
  async getDetectSingleFace() {
    const detection = await faceapi
      .detectSingleFace(this.input, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptor()
      .withAgeAndGender()
      .withFaceExpressions();
    return detection && faceapi.resizeResults(detection, this.displaySize);
  }
  async getDetectAllFace() {
    const detections = await faceapi
      .detectAllFaces(this.input, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptors()
      .withAgeAndGender()
      .withFaceExpressions();
    return faceapi.resizeResults(detections, this.displaySize);
  }
  getTwoPointDegree(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    const rad = Math.atan2(dx, dy);
    return (rad * 180) / Math.PI;
  }
  getMatchFacePositionType(detection, allowable = 33.333) {
    const { nosePosition, faceDegree } = this.getMatchFacePosition(detection);
    if (faceDegree > 25) {
      return null;
    }
    return nosePosition < allowable
      ? "left"
      : nosePosition > 100 - allowable
      ? "right"
      : "center";
  }
  getMatchFacePosition(detection) {
    const landmark = detection.landmarks;
    const nosePoints = landmark.getNose();
    const topNosePoint = nosePoints[0];
    // Face points
    const facePoints = landmark.getJawOutline();
    // Check face is not a center alignment
    const middleFacePoint = facePoints[Math.floor(facePoints.length / 2)];
    const leftFacePoint = facePoints[0];
    const rightFacePoint = facePoints[facePoints.length - 1];
    const percentOfNosePosition = Math.abs(
      ((rightFacePoint.x - topNosePoint.x) /
        (leftFacePoint.x - rightFacePoint.x)) *
        100,
    );
    return {
      faceDegree: Math.abs(
        this.getTwoPointDegree(topNosePoint, middleFacePoint),
      ),
      nosePosition: percentOfNosePosition,
    };
  }
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  drawLandmark(detection) {
    this.clear();
    faceapi.draw.drawFaceLandmarks(this.canvas, detection);
  }
  static async loadModel() {
    return Promise.all([
      faceapi.loadTinyFaceDetectorModel(MODEL_URL),
      faceapi.loadMtcnnModel(MODEL_URL),
      faceapi.loadSsdMobilenetv1Model(MODEL_URL),
      faceapi.loadFaceLandmarkModel(MODEL_URL),
      faceapi.loadFaceRecognitionModel(MODEL_URL),
      faceapi.loadFaceExpressionModel(MODEL_URL),
      faceapi.loadAgeGenderModel(MODEL_URL),
    ]);
  }
}
