$(document).ready(function () {

    $('#send').on('click', function () {
        let name = $('#name').val();
        let lname = $('#lname').val();
        let birthYear = $('#birthyear').val();
        // let sqesi = $('#sqesi').val();

        $('#reg').hide();
        $('#chat').show();

        let question;
        let answerP;
        let answer;

        $('#chat button').on('click', function () {
            $('#music').hide();

            question = $('#chat input').val();
            answerP = $('#chat p');


            if (question.includes('გამარჯობა')) {
                answer = 'გაუმარჯოს!';
            }


            else if (question.includes('როგორ ხარ')) {
                answer = 'კარგად შენ?';
            }
            else if (question.includes('მუსიკა')) {
                answer = 'აი';
                $('#music').show();
            }

            else if (question.includes('ვიდეო')) {
                answer = 'აი';
                $('#video').show();
            }

            else {
                answer = 'არ ვიცი';
            }

            answerP.t(answer);
            $('#chat input').val("");
        })







    })
})