export function imageToBase64(img) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", img, true);
    xhr.responseType = "blob";
    xhr.onload = function (e) {
      var reader = new FileReader();
      reader.onload = function (event) {
        var res = event.target.result;
        resolve(res);
      };
      var file = this.response;
      reader.readAsDataURL(file);
    };
    xhr.send();
  });
}
