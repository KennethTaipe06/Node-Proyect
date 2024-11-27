fetch('/cgi-bin/obtener_hostname.sh')
    .then(response => response.text())
    .then(data => {
        document.getElementById('hostname').innerText = "My name is " + data;
    });