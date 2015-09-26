<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>Intelligent Shopping</title>
<!-- Bootstrap -->
<link rel="icon" type="image/x-icon" href="favicon.ico" />
<link rel="stylesheet" href="app/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<!-- Font Awesome -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    
<link rel="stylesheet" href="app/css/main.css"/>
</head>
<body>

	<header>
		<ng-include src="'app/partials/nav/nav-main.html'" class="container-fluid"/>
	</header>

	<main class="container-fluid" role="main">
		<div class="container-fluid" ng-view></div>
	</main>
	
	<footer>
		<ng-include src="'app/partials/footer/footer.html'" class="container-fluid"/>
	</footer>

<script data-main="index" src="./lib/require.js"></script>
</body>
</html>