
function scrollToTarget (){
    document.getElementById("career").scrollIntoView()
}





window.onload = function () {
    
    document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {         
            event.preventDefault();
            const btnText = document.getElementById("btnText")
            const btnImg = document.getElementById("btnImg")
            btnText.classList.add('hidden')
            btnImg.classList.remove('hidden')
            const url = window.location.href
            const hostname = window.location.hostname;
            const pathname = window.location.pathname.slice(+1);



            // Extract form data
            const formData = {
                name: this.name.value,
                email: this.email.value,
                phone: this.phone.value,
                position: this.position.value,
                salary: this.salary.value,
                location: this.location.value,
                visaStatus: this.visaStatus.value,
                animal: this.animal.value,
                description: this.description.value,
                leavingReason: this.leavingReason.value,
                whyCandidate: this.whyCandidate.value,
                weaknesses: this.weaknesses.value,
                whatCanYouDo: this.whatCanYouDo.value,
                resumeSummary: this.resumeSummary.value,
                pageUrl: url,
                hostname: hostname,
                pathname: pathname,
            };

            // These IDs are from your Email.js service and template
            emailjs
                .send(
                    "service_ovzmebw",
                    "template_0zflxy1",
                    formData,
                    "pEchiJh5AQZLHamcq"
                )
                .then(
                    function (response) {
                        btnText.classList.remove('hidden')
                        btnImg.classList.add('hidden')
                        console.log("Email sent successfully:", response);
                        const toast = document.getElementById("toast");
                        toast.classList.remove("opacity-0", "absolute");
                        document.getElementById("contact-form").reset()
                        function myFunction() {
                            toast.classList.add("opacity-0", "absolute");
                        }

                        setTimeout(myFunction, 20000);
                    },
                    function (error) {
                        console.log("Failed to send email:", error);
                    }
                );
        });
};
