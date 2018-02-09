function doGet(e) {
  //?page=test.html
  var pgToLoad = e.parameter.page;
  var taskid = e.parameter.taskid;
  var view = e.parameter.view;
  var cat = e.parameter.cat;
  var defaultPageTitle = 'Black Hat Security Dashboard';
  var defaultFaviconUrl = 'https://blackhatsecurity.com/favicon.png';
  if (!e.parameter.page) {
    var t = HtmlService.createTemplateFromFile('index.html');
    t.data = view;
    t.cat = cat;
    return t.evaluate()
    .setTitle(defaultPageTitle)
    .setFaviconUrl(defaultFaviconUrl);
  }

  if ( e.parameter.page == 'map.html' || e.parameter.page == 'test.html' ){
    var t =  HtmlService.createTemplateFromFile(pgToLoad);
    t.data = view;
    t.cat = cat;
    return t.evaluate()
    .setTitle(defaultPageTitle)
    .setFaviconUrl(defaultFaviconUrl);
  }
  return HtmlService.createTemplateFromFile(pgToLoad).evaluate()
//    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setTitle(defaultPageTitle)
    .setFaviconUrl(defaultFaviconUrl);
}