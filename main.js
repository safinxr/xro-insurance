
function scrollToTarget (){
    document.getElementById("career").scrollIntoView()
}





window.onload = function () {
    
    document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {
            const btnText = document.getElementById("btnText")
            const btnImg = document.getElementById("btnImg")
            btnText.classList.add('hidden')
            btnImg.classList.remove('hidden')
            event.preventDefault();
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
            };

            // These IDs are from your Email.js service and template
            emailjs
                .send(
                    "service_13xe0ld",
                    "template_sifzm1n",
                    formData,
                    "fjm3jS7pxUvuDOb2i"
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

                        setTimeout(myFunction, 5000);
                    },
                    function (error) {
                        console.log("Failed to send email:", error);
                    }
                );
        });
};