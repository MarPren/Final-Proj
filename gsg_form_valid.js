
        document.addEventListener("DOMContentLoaded", function () {
            const form = document.querySelector("form");

            form.addEventListener("submit", function (e) {
                let errors = [];

                function validateEmail(email) {
                    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return re.test(email);
                }

                const name = form.elements["name"].value.trim();
                const email = form.elements["email"].value.trim();
                const phone = form.elements["phone"].value.trim();
                const currentWt = form.elements["current_wt"].value.trim();
                const desiredWt = form.elements["desire_wt"].value.trim();

                if (name === "") errors.push("Name is required.");
                if (!validateEmail(email)) errors.push("Valid email is required.");
                if (!/^\d{10,15}$/.test(phone)) errors.push("Phone number must be 10-15 digits.");
                if (isNaN(currentWt) || currentWt === "") errors.push("Current weight must be a number.");
                if (isNaN(desiredWt) || desiredWt === "") errors.push("Desired weight must be a number.");

                const genderChecked = form.querySelector("input[name='gender']:checked");
                const gymBeforeChecked = form.querySelector("input[name='gym_before']:checked");
                const trainerChecked = form.querySelector("input[name='personal_trainer']:checked");

                if (!genderChecked) errors.push("Please select your gender.");
                if (!gymBeforeChecked) errors.push("Please answer the gym experience question.");
                if (!trainerChecked) errors.push("Please indicate if you want a personal trainer.");

                if (errors.length > 0) {
                    e.preventDefault();
                    alert("Please fix the following errors:\n\n" + errors.join("\n"));
                }
            });
        });
