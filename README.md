This project is based on passwordReset flow backend
here we can create user using
-POST >user/signup
After using email and password to login 
POST ->user/login 
futher we have move forward process
login is used to create login pages and also create token

To verfiy token use
GET ->user/data
to send mail to resetpassword otp use
POST ->user/reset-password
Set new password via otp 
POST->user/getreset-password/:otp/:password
