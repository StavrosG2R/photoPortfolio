document
	.getElementById("contact-form")
	.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevent the form from submitting the traditional way

		var formData = new FormData(this); // Create a FormData object from the form

		fetch("../mail.php", {
			// Replace with the path to your PHP script
			method: "POST",
			body: formData,
		})
			.then((response) => response.text())
			.then((data) => console.log(data))
			.catch((error) => console.error("Error:", error));
	});
