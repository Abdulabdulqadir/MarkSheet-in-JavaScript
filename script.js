var form = document.getElementById('container')
var res = document.getElementById('res')
function showRes() {
    // ----
    var name = document.getElementById('name').value;
    var rollNum = document.getElementById('rollNum').value;
    var engMarks = + document.getElementById('e').value;
    var sciMarks = + document.getElementById('s').value;
    var urdMarks = + document.getElementById('u').value;
    var islMarks = + document.getElementById('i').value
    var mathsMarks = + document.getElementById('m').value;
    var compMarks = + document.getElementById('c').value;
    // ------
    if ((name != "") && (rollNum != "") && (engMarks != "" && engMarks <= "100") && (sciMarks != "" && sciMarks <= "100") && (urdMarks != "" && urdMarks <= "100") && (islMarks != "" && islMarks <= "100") && (mathsMarks != "" && mathsMarks <= "100") && (compMarks != "" && compMarks <= "100")) {
        document.getElementById('g').style.display = "flex";
        res.style.left = '0';
        res.style.width = "100%"
        form.style.display = "none";
        var tot = engMarks + sciMarks + urdMarks + islMarks + mathsMarks + compMarks
        document.getElementById("total").value = tot + "/600"
        document.getElementById("name1").value = name
        document.getElementById("rollNum1").value = rollNum
        document.getElementById('percentage').value = Math.floor(tot / 600 * 100) + "%";
        if (document.getElementById('percentage').value > '90' || document.getElementById('percentage').value > '100' ) {
            document.getElementById('grade').innerHTML = "A+"
        }
        else if (document.getElementById('percentage').value > '80') {
            document.getElementById('grade').innerHTML = "A"
        }
        else if (document.getElementById('percentage').value > '80') {
            document.getElementById('grade').innerHTML = "A"
        }
        else if (document.getElementById('percentage').value > '70') {
            document.getElementById('grade').innerHTML = "B"
        }
        else if (document.getElementById('percentage').value > '60') {
            document.getElementById('grade').innerHTML = "C"
        }
        else if (document.getElementById('percentage').value > '50') {
            document.getElementById('grade').innerHTML = "D"
        }
        else {
            document.getElementById('grade').innerHTML = "F"
        }
    }
    else {
        alert("Invalid Input!")
    }

}
function hideRes() {
    res.style.left = '-105%';
    form.style.display = "block";
    document.getElementById('g').style.display = "none";
}

const inputElements = document.querySelectorAll('.inp input');

inputElements.forEach(input => {
    input.addEventListener('input', () => {
        const value = input.value.trim();
        const tickIcon = input.nextElementSibling;

        if (value) {
            tickIcon.style.display = 'inline-block';
        } else {
            tickIcon.style.display = 'none';
        }
    });
});

