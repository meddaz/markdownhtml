var converter = Markdown.getSanitizingConverter();
var editor = new Markdown.Editor(converter);
editor.run();

function copy() {
    var copyText = document.getElementById('wmd-preview');

    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     navigator.clipboard.writeText(copyText.value);
}