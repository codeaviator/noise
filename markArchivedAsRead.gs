function markArchivedAsRead() {
  var threads = GmailApp.search('label:unread -label:inbox'); // Search all archived emails.
  GmailApp.markThreadsRead(threads); // Mark archived emails as read.
}
