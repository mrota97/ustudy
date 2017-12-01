$(document).ready(function() {
    $("#add").click(function() {
        var intId = $("#buildyourform div").length + 1;
        var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
        var Question = $("<input type=\"text\" placeholder=\"Enter a question\" class=\"fieldname form-control\" />");
        var c1 = $("<input type=\"text\" placeholder=\"Enter a choice\" class=\"fieldname form-control\" />");
        var c2 = $("<input type=\"text\" placeholder=\"Enter a choice\" class=\"fieldname form-control\" />");
        var c3 = $("<input type=\"text\" placeholder=\"Enter a choice\" class=\"fieldname form-control\" />");
        var Answer = $("<input type=\"text\" placeholder=\"Enter the answer\" class=\"fieldname form-control\" />");
        // var fType = $("<select class=\"fieldtype\"><option value=\"checkbox\">Checked</option><option value=\"textbox\">Text</option><option value=\"textarea\">Paragraph</option></select>");
        var removeButton = $("<input type=\"button\" class=\"remove btn btn-primary btn-md\" value=\"-\" />");
        removeButton.click(function() {
            $(this).parent().remove();
        });
        fieldWrapper.append(Question);
        fieldWrapper.append(c1);
        fieldWrapper.append(c2);
        fieldWrapper.append(c3);
        fieldWrapper.append(Answer);
        // fieldWrapper.append(fType);
        fieldWrapper.append(removeButton);

        $("#buildyourform").append(fieldWrapper);
    });
    var shuf = function (array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
    };
    $("#preview").click(function() {
        $("#yourform").remove();
        var fieldSet = $("<fieldset id=\"yourform\"><legend>Quiz Preview</legend></fieldset>");
        localStorage.quizAns = [];
        $("#buildyourform div").each(function() {
            var id = "input" + $(this).attr("id").replace("field","");
            var val1 = "$(this).find(\"input.fieldname\").first().next().val()";
            var val2 = "$(this).find(\"input.fieldname\").first().next().next().val()";
            var val3 = "$(this).find(\"input.fieldname\").first().next().next().next().val()";
            var correct = "$(this).find(\"input.fieldname\").first().next().next().next().next().val()";
            var pick = shuf([val1, val2, val3, correct]);
            localStorage.quizAns.concat([$(eval(correct))]);
            var label = $("<label for=\"" + id + "\" class=\"strokeme\">" + $(this).find("input.fieldname").first().val() + "</label>");
            var a1 = $("<div class=\"radio\"><label><input type=\"radio\" id=\"" + id + "\" name=\"optradio\">"+ eval(pick[0]) +"</label>");
            var a2 = $("<div class=\"radio\"><label><input type=\"radio\" id=\"" + id + "\" name=\"optradio\">"+ eval(pick[1]) +"</label>");
            var a3 = $("<div class=\"radio\"><label><input type=\"radio\" id=\"" + id + "\" name=\"optradio\">"+ eval(pick[2]) +"</label>");
            var a4 = $("<div class=\"radio\"><label><input type=\"radio\" id=\"" + id + "\" name=\"optradio\">"+ eval(pick[3]) +"</label>");
            fieldSet.append(label);
            var form = $('<form></form>');
            form.append(a1);
            form.append(a2);
            form.append(a3);
            form.append(a4);
            fieldSet.append(form);
        });
        localStorage.quizHTML = fieldSet;
        $("body").append(fieldSet);
    });
});
