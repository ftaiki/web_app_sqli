/* パスワード表示非表示 */
$(function () {
  $(".toggle-pass").on("click", function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    let input = $(this).prev("input");
    if (input.attr("type") == "text") {
      input.attr("type", "password");
    } else {
      input.attr("type", "text");
    }
  });
});

/* nameの文字数カウント */
$(function nameCount() {
  if ($("#name").val().length == 0) {
    $("#btn").prop("disabled", true);
  }
  $("#name").on("keydown keyup keypress change", function () {
    if ($(this).val().length >= 3 && $("#password").val().length >= 3) {
      $("#btn").prop("disabled", false);
      $(".btn").css("animation", "move_d 2s infinite");
    } else {
      $("#btn").prop("disabled", true);
      $(".btn").css("animation", "none");
    }
  });
});

/* passwordの文字数カウント */
$(function passwordCount() {
  if ($("#password").val().length == 0) {
    $("#btn").prop("disabled", true);
  }
  $("#password").on("keydown keyup keypress change", function () {
    if ($(this).val().length >= 3 && $("#name").val().length >= 3) {
      $("#btn").prop("disabled", false);
      $(".btn").css("animation", "move_d 2s infinite");
    } else {
      $("#btn").prop("disabled", true);
      $(".btn").css("animation", "none");
    }
  });
});

/* SignUpボタンクリック時、確認アラート */
$(function () {
  $("#btn").on("click", function () {
    if (
      !confirm(
        "Would it be okay to register with this information?\n\n" +
          "name： " +
          $("#name").val() +
          "\n" +
          "password：" +
          $("#password").val()
      )
    ) {
      // キャンセル時
      return false;
    } else {
      // OK時
      alert("Completion of registration!!!");
    }
  });
});
