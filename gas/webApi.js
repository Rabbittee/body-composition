function pass(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function doPost(e) {
  const data = e.postData.contents;
  if (data === undefined || data === null) {
    return pass({});
  }

  const input = JSON.parse(data);

  let ans = {};
  if (Array.isArray(input)) {
    ans = input.map(getAns);
  } else {
    ans = getAns(input);
  }
  return pass(ans);
}
