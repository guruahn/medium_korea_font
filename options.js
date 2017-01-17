// Saves options to chrome.storage.sync.
function save_options() {
  var font = document.getElementById('font').value;
  chrome.storage.sync.set({
    font: font
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = ' ';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'FF0000' and likesColor = true.
  chrome.storage.sync.get({
    font: 'NotoSansKR'
  }, function(items) {
    console.log(items.font)
    document.getElementById('font').value = items.font;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('font').addEventListener('change', save_options);
