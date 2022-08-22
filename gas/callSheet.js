const scriptProperties = PropertiesService.getScriptProperties();
const sheetId = scriptProperties.getProperty('sheetId');

const spreadsheet = SpreadsheetApp.openById(sheetId);
const sheet = spreadsheet.getSheets()[0];

const inputCells = sheet.getRange('C3:C16');
const outoutCells = sheet.getRange('C17:C33');

function updateInput(values) {
  inputCells.setValues(values.map((val) => [val]));
}

function getValue(range) {
  return range.getValues().map((cell) => cell[0]);
}

function formatOutput(data) {
  data = data.map((val) => val.toString());
  const robertsonAndReid = data[5];

  return {
    dailyCalories: data[0],
    BMI: data[1],
    WHtR: data[2],
    bodyFat: {
      skinfolds: data[3],
      lines: data[4],
    },
    BMR: {
      robertsonAndReidLow: robertsonAndReid.split('(')[1].split('~')[0],
      robertsonAndReidMean: robertsonAndReid.split('(')[0].trim(),
      robertsonAndReidHigh: robertsonAndReid.split('~')[1].replace(')', ''),
      revisedHarrisBenedict: data[6],
      mifflinStJeor: data[7],
      katchMcArdle: data[8],
      oxfordEquation: data[9],
    },
    TDEE: {
      FAO: data[10],
      redman: data[11],
    },
    BSA: {
      doubois: data[12],
      duboisCorrected: data[13],
      yu: data[14],
      haycock: data[15],
      mosteller: data[16],
    },
  };
}

function getAns(inputCase = null) {
  if (inputCase === null) {
    inputCase = getTestCase(0);
  } else {
    inputCase = formatTestCase(inputCase);
  }

  const input = getValue(inputCells);

  inputCase.forEach((val, i) => {
    if (val === undefined) {
      return;
    }
    input[i] = val;
  });

  updateInput(input);
  const ans = getValue(outoutCells);
  return formatOutput(ans);
}
