function unique_list(column_title,date_column,date_range_start,date_range_end){
  
}

function update_ss_data(date_column,date_range_start,date_range_end){
  
//  var date_range_start = new Date();
//  date_range_start.setDate(date_range_start.getDate() - 2);
//  date_range_start.setHours(0);
//  date_range_start.setMinutes(0);
//  date_range_start.setSeconds(0);
  
  var ss = SpreadsheetApp.openById(SSID);
//  var sheet = ss.getSheets()[0];
  var sheet = ss.getSheetByName('Sheet3');
  var dataValues = sheet.getRange(1,1,sheet.getLastRow(),sheet.getLastColumn()).getValues();
  var dataDisplayValues = sheet.getRange(1,1,sheet.getLastRow(),sheet.getLastColumn()).getDisplayValues();
  
  var arr = [];
  
  for(var r=0;r<dataValues.length;r++){
//    if(r==0){
//      arr.push(dataDisplayValues[r])
//    } 
//    if(r>0){
//      if(new Date(dataValues[r][13]) >= date_range_start){
        arr.push(dataDisplayValues[r])
//      };
//    }
  }
  
  SS_DATA_ARR = arr;//dataDisplayValues;
  return SS_DATA_ARR;
}
