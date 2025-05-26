document.addEventListener('DOMContentLoaded', function() {
    const emailService = () => {
        // grab the users email
        const emailId = document.getElementById('emailInput')
        emailId.value
        const subscribeBttn = document.querySelector('#sub-bttn')
        subscribeBttn.addEventListener('click', (ev) => {
            ev.preventDefualt()
            console.log(emailId)
        })
        
    }

    emailService()
})