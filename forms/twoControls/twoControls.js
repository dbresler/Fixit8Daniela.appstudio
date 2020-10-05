/*changed background color to artic blue*/ 

Dropdown1.onclick = function(s) {
    if (typeof(s) == "Login") {
        return;
    }
    NSB.MsgBox("you selected " + Dropdown1.selection);
};
/*changed background color of dropdown to purple,
made the font italic 
bolded the letters of drop down
*/

Pagination1.onclick = function(choice) {
  NSB.MsgBox("This is the page you chose: " + choice);
};

/*changed the background color to pink 
made the font bold
changed the numbers inside the pagination 
indented a differerent number
*/