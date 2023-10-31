<!DOCTYPE html>
<html>
<head>
    <title>IP Checker</title>
</head>
<body>
    <h1>IP Checker</h1>
    <p id="result"></p>

    <script>
        // Get query parameters from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const ip = urlParams.get('ip');

        // Send a GET request to the external server
        fetch(`https://server2.com/ip?ip=${ip}`)
            .then(response => {
                if (response.status === 200) {
                    document.getElementById('result').textContent = 'Good IP';
                } else {
                    document.getElementById('result').textContent = 'Wrong IP';
                }
            })
            .catch(error => {
                console.error(error);
                document.getElementById('result').textContent = 'Error';
            });
    </script>
</body>
</html>
