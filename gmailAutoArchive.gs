function gmailAutoArchive() {
  
  var delayDays = 7;                              // Will only impact emails more than "x" days old.
  var maxDate = new Date();                       // Create object maxDate of class Date.
  maxDate.setDate(maxDate.getDate() - delayDays); // What was the date at that time?
  
  // Create an array containing all the search strings matching the emails we want to be treated automatically.
  var searches = [
    'SEARCH STRING HERE', // Search string 1.
    'SEARCH STRING HERE'  // Search string 2 ...
  ];
  
  // Create an array containing all the threads matching the searches above.
  var threads = [];
  for (var i = 0; i < searches.length; i++) {
    var tmp_threads = GmailApp.search(searches[i], 0, 100); // Limit the search to "x" results (max = 500).
    var threads = threads.concat(tmp_threads);              // Append search results.
  }
  
  // Archive all the threads if they are older than the time limit set in delayDays.
  for (var i = 0; i < threads.length; i++) {
    if (threads[i].getLastMessageDate() < maxDate)
    {
      threads[i].moveToArchive();
    }
  }
}
