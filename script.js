function submitInput(){
    var day = parseInt($('#day').val())
    var month = parseInt($('#month').val())
    var year = parseInt($('#year').val())

    var cMonth = new Date().getMonth() + 1
    var cDay = new Date().getDate()
    var cYear = new Date().getFullYear()

    var dYear = cYear - year
    var dMonth = cMonth + month
    var dDay = cDay - day

    if(cMonth < month ){
        dYear = dYear - 1
    }
    if (dMonth > 12){
        dMonth = dMonth - 12
    }
    if(month == cMonth){
        dMonth = '--'
    }
    if(dDay == 0){
        dDay = '--'
    }
    if(dYear == 0){
        dYear == '--'
    }
    

    console.log(day+'/'+month+'/'+year)
    console.log("CURRENT : "+dDay+'/'+dMonth+'/'+dYear)

    if(dDay == '--' && dMonth == '--'){
        $('#disDate').attr('hidden', true)
        $('#disBday').attr('hidden', false)
        $('#age').text(dYear)
    }else if(dDay == '--' && dMonth == '--' && dYear == 0){
        $('#disDate').attr('hidden', true)
        $('#disBday').attr('hidden', false)
        $('#wish').text('Welcome to the world')
        $('#age').attr('hidden', true)
    }else{
        $('#disBday').attr('hidden', true)
        $('#disDate').attr('hidden', false)
        $('#disYear').text(dYear)
        $('#disMonth').text(dMonth)
        $('#disDay').text(dDay)
    }
}