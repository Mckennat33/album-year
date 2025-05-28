document.addEventListener('DOMContentLoaded', function() {
    const emailService = () => {
        // grab the users email
        const emailId = document.getElementById('emailInput')
        emailId.value
        const subscribeBttn = document.querySelector('.sub-bttn')
        subscribeBttn.addEventListener('click', (ev) => {
            // ev.preventDefualt()
            console.log(emailId)
            // need to get real URL 
            const emailData = 'ursl for data'
            fetch(emailData, {
                method: 'POST', 
                headers: {
                    "Content-Type": 'application/json', 
                    body: JSON.stringify({

                    })
                }
            }
            )
        })
        
    }

    emailService()
})