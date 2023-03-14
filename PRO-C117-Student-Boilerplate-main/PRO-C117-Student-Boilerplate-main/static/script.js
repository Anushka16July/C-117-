$(document).ready(function(){

    console.log('Ready')

    //  Fetch the current date and update it in the DOM
    var date = new Date()
    let display_date= "Date:" + date.toLocaleDateString()
    
   
    $(document).ready(function () {
        $("#display_date").html(display_date)
    })
    



    //  write an event, when Submit button is clicked
    $('').click(function(){

        //  get the text value from the textarea using the 'val()' method
        let text_value = $('').val()

        //  Convert it to JS object.
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = {'' : text_value}
        console.log(input_text)

        //  ajax request
        $.ajax({
                type: 'POST',
                url: "/predict-emotion",
                data: JSON.stringify(input_data),
                dataType: "json",
                contentType: 'application/json',
                success: function (result) {
        

            },

            //  if any error, run this function
            error : function(result){

                console.log(result)
            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
    })
        
})