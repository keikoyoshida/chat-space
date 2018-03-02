$(function () {

  function buildHTML(message){
    var html = `<div class ="messages__item">
                  <div class ="userName">
                    ${message.user_name}
                  </div>
                  <div class ="sentTime">
                    ${message.created_at}
                  </div>
                  <div class ="text">
                    ${message.text}
                  </div>
                  <div class ="image">
                    ${ message.image == null ? "" : '<img src="' + message.image + '">' }
                  </div>`
    return html;
  }

  function flash() {
    var html =
      `<p class="notice">メッセージを送信しました</p>`
    $('.javascript_flash').append(html);
    $('.notice').fadeIn(500).fadeOut(2000);
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = window.location.href;
    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      processData: false,
      contentType: false,
      dataType: 'json'
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.submit__form__inputArea__text').val('');
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      flash();
    })
    .fail(function(){
      alert('error');
    });
    return false;
  });

});
