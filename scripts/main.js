var quill = new Quill('#editor', {
    theme: 'snow'
  });

  var quill1 = new Quill('#editor1', {
    theme: 'snow'
  });

function save(){
    document.getElementById('collapseExample').style.display = 'block';
    var content = quill.getContents();
    quill1.setContents(content);
}