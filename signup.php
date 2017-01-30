
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vinayak Solar ROI</title>
    <meta http-equiv="X-UA-COMPATIBLE" content="" />
    <meta name="description" content="" />
    <meta name="keywords" content="" />

    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.min.js"></script>

    <link rel="stylesheet" href="css/font-awesome.min.css" />
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/style.css" />

</head>



<body>

    <header id="header">
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class ="container-fluid">
                <div class="navbar-header">
                    <a href="hello.html">
                        <h2> Vinayak Solar ROI </h2>
                    </a>
                </div>


                <nav class="nav navbar-nav">
                    <ul class="nav nav-pills">
                        <li class="weatherButton"></li>
                        <li ><a href="index.html"><i class="fa fa-home"></i> Home</a></li>
                        <li> <a href="products.html"><i class="fa fa-building"></i> Products</a> </li>
                        <li > <a href="analytics.html"><i class="fa fa-line-chart"></i> Analytics</a></li>
                        <li> <a href="aboutus.html"> <i class="fa fa-archive"></i> About Us</a> </li>

                        <li class="signButton active"> <a href="#"> Sign Up!</a> </li>
                    </ul>
                </nav>

            </div>
        </nav>

    </header>

    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <section id="login">
                    <form class="formLog" method="post" action="php/login.php" >
                        <fieldset>
                            <h3> Sign In : </h3>
                                <h4>User Name: <input type="text" name="username" size="35" placeholder="Please enter your User Name" /></h4>
                                <h4>Password: <input type="password" size="35" name="password" palceholder="Please enter your Password"/></h4>
                                <input class="logButton" type="submit" name ="signin" value="Sign In" />
                        </fieldset>
                    </form>
                </section>
            </div>


            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <section id="register">
                    <form class="formReg" method="post" action="php/signin.php">
                        <fieldset>
                            <h3> Registration : </h3><br />
                                <h4>First Name: <input type="text" name="fname" size="35" placeholder="Please enter your First Name" /></h4>
                                <h4>Last Name: <input type="text" name="lname" size="35" placeholder="Please enter your Last Name" /></h4>
                                <h4>User Name: <input type="text" name="username" size="35" placeholder="Please enter your desired User Name" /></h4>
                                <h4>Email: <input type="text" name="email" size="35" placeholder="Please enter your Email" /></h4>
                                <h4>Password: <input type="password" name="password" size="35" placeholder="Please enter your password" /></h4>
                                <input class="regButton" type="submit" name ="register" value="Register" />
                        </fieldset>
                    </form>
                </section>
            </div>
        </div>
    </div>



</body>
</html>
