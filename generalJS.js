function changeCountry(selectedCountry) {
  document.getElementById("selectedCountry").textContent = selectedCountry;
}



// function loadGoogleTranslate() {
//     new google.translate.TranslateElement("google_element");
//   }

function loadGoogleTranslate() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en", // Change 'en' to your desired default language code
      includedLanguages: "en,hi,ar,ja,ko,es,de,fr", // Replace with the language codes you want
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false,
    },
    "google_element"
  );
}



// screenshot restrction


  document.addEventListener('keyup', (e)=>{
    navigator.clipboard.writeText('');
    alert('Screen Shot Disabled');
  })

  document.addEventListener("keyup", function (e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
            if (keyCode == 44) {
                stopPrntScr();
            }
        });
function stopPrntScr() {

            var inpFld = document.createElement("input");
            inpFld.setAttribute("value", ".");
            inpFld.setAttribute("width", "0");
            inpFld.style.height = "0px";
            inpFld.style.width = "0px";
            inpFld.style.border = "0px";
            document.body.appendChild(inpFld);
            inpFld.select();
            document.execCommand("copy");
            inpFld.remove(inpFld);
        }
       function AccessClipboardData() {
            try {
                window.clipboardData.setData('text', "Access   Restricted");
            } catch (err) {
            }
        }
        setInterval("AccessClipboardData()", 300);








 

 // Get the current date
      const currentDate = new Date();

      // Define month names
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      // Get day, month, and year
      const day = currentDate.getDate();
      const monthIndex = currentDate.getMonth();
      const year = currentDate.getFullYear();

      // Format the date
      const formattedDate = `${day} ${monthNames[monthIndex]}, ${year}`;

      // Update the HTML element with the formatted date
      document.getElementById("current-date").textContent = formattedDate;