module.exports = {
    getNewEmail: function() {
        const number = Math.floor(1000 + Math.random() * 9000)
        return `${number}`
    },
   

    getPhoneNumber: function(countryCode) {
        const number = Math.floor(1000000000 + Math.random() * 9000000000)
        return `${countryCode}${number}`
    }
};
