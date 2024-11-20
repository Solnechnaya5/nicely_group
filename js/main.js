document.addEventListener("DOMContentLoaded", function () {
    function updateDateTime() {
        const currentDate = new Date();

        const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const formattedDate = currentDate.toLocaleDateString('uk-UA', dateOptions);

   
        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const formattedTime = currentDate.toLocaleTimeString('uk-UA', timeOptions);

        document.getElementById("current-date").textContent = formattedDate;
        document.getElementById("current-time").textContent = formattedTime;
    }
   
    updateDateTime();
    setInterval(updateDateTime, 1000);
});
