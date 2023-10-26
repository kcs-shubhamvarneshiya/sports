const axios = require('axios')

const events = (s_id, result) => {

    const parameters = {
        method: 'GET',
        url: 'https://flashlive-sports.p.rapidapi.com/v1/events/list',
        params:
        {
            locale: 'en_INT',
            sport_id: s_id,
            indent_days: '0',
            timezone: '-4'
        },
        headers: {
            'X-RapidAPI-Key': '39ee93099amsh90a94bf48362163p15e903jsnc3338d887776',
            'X-RapidAPI-Host': 'flashlive-sports.p.rapidapi.com'
        }
    };

    axios.request(parameters).then((response) => {
        result(null, response.data)

    }).catch((error) => {
        //If there is a problem with internet connection
        if (error.code == 'ENOTFOUND') {
            result((error, { errorMsg: 'Could not reach , Please check your internet connection ' }), null)
        }
        //If user enter Invalid AccessKey
        else if (error.code == 'ERR_BAD_REQUEST' && error.response.status == 400) {
            result((error, { errorMsg: 'Invalid Host name , Please check !!' }), null)
        }
        //If user enter Invalid Accesskey
        else if (error.code == 'ERR_BAD_REQUEST' && error.response.status == 403) {
            result((error, { errorMsg: 'Invalid Access key , Please check !!' }), null)
        }
        //If Montly subscription is expired 
        else if (error.code == 'ERR_BAD_REQUEST' && error.response.status == 429) {
            result((error, { errorMsg: 'Your Free Api usege is end , Please upgrade your plan !!' }))
        }
        //If any other error would be occure that will be handle here..
        else {
            result(error.message)
        }
    });
}


module.exports = events
