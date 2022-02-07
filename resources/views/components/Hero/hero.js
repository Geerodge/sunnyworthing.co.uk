if (window.innerWidth  < 641 ) {
  document.getElementsByName('email_address')[0].placeholder = 'Subscribe to newsletter';
}
else { 
  document.getElementsByName('email_address')[0].placeholder = 'Enter email address';
}