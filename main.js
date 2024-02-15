$("#selectPolje").change(function(){
    var value = $("#selectPolje").val()
    if(value != "0"){
        if(value == "2"){
            $('#drugi').show()
            $('#textGordan').hide()
            $('#textDanilo').show()
            $('#blok').hide()
            $('#imgVelika').prop("src", "danilo.jpg")
            $('#imgVelika').animate({height: 'show'}, 500)
            $('#textDanilo').delay(1000).fadeIn(2000)
            if($('#textDanilo').css("color") != "rgb(255, 0, 0)"){
                $('#gifAfter').delay(1000).fadeIn(2000)
            }
            $('#textDanilo').delay(3000).queue(function(n) {
                $(this).html("Али не исправан! <br>Изаберите друго име")
                $(this).css({"color" : "red", "font-size" : "30px"})
                $('#gifAfter').hide()
            })
        }
        if(value == "3"){
            $('#drugi').show()
            $('#textDanilo').hide()
            $('#blok').hide()
            $('#textGordan').show()
            $('#imgVelika').prop("src", "gordan.jpg")
            $('#imgVelika').animate({height: 'show'}, 500)
            $('#textGordan').delay(1000).fadeIn(2000)
            $('#textGordan').delay(2000).queue(function(n) {
                $(this).html("Али не исправно! <br>Изаберите друго име")
                $(this).css({"color" : "red", "font-size" : "30px"})
                $('#gifAfter').hide()
            })
        }
        if(value == "1"){
            var arrayFraze = ["Сигурно?", "А срцуленце?", "Медуленце :)?", "Сквики?", "Да ли си и даље сигурна?", "Молим?", "Шта?", "Ништа!", "Меденце?", "Ок шалим се", "Нећу више", "Доста"]
            $('#drugi').hide()
            $('#blok').show()
            var size = parseInt($("#textMilence").css("font-size"));
            var arrayCounter = 0;
            var clickCounter = 1
            $('#textDa').click(function(){
                size += 10;
                $('#textDa').css({"font-size" : size+"px"})
                $('#textMilence').html(arrayFraze[arrayCounter])
                arrayCounter++;
                if(arrayCounter == 13){
                    $("#centerSelect").hide();
                    $("#centerDiv").css("margin-top", "0px");
                    $("#blok").html("");
                    $("#blok").append("<img id='imgSlider'/>").append("<img id='panda'/>").append("<img id='rodjendan'/>")
                    $("#panda").prop("src", "panda.gif")
                    $("#panda").css("width", "400px")
                    $("#rodjendan").prop("src", "rodjendan.png")
                    $("#rodjendan").css("width", "400px")
                    var i = 1;                
                   
                    function myLoop() {        
                    setTimeout(function() {  
                        $("#imgSlider").prop("src", i+".png")
                        i++;
                        if (i <= 10) {
                        myLoop();
                        }
                    }, 2000)
                    }

                    myLoop();

                }
            })
            $('#textNe').click(function(){
                var oddEven = "-";
                if(clickCounter % 2 === 0){
                    oddEven = "+";
                }
                $('#textNe').css("top", oddEven+Math.random()*200+"px")
                $('#textNe').html(":)")
                clickCounter++;
            })

            
        }
    }
})