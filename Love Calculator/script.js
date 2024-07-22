function calculateLove()
{
    // .trim() - used for removing empty space before and after the text
    const name1 = document.getElementById("name1").value.trim(); 
    const name2 = document.getElementById("name2").value.trim(); 

    const result = document.getElementById("result");


    if (name1 == "" || name2 == "") {
        alert('Please enter both names');
    } else {
        const lovePercentage = Math.floor(Math.random() * 101); // 101 para kasama ang 100, excluded ang 101

        if (!numberChecker(name2) && !numberChecker(name1)) {
            result.innerHTML = `${name1} and ${name2}'s Love Percentage: ${lovePercentage}%`;
    
            if (lovePercentage <= 30) {
                result.innerHTML += "<br>Not a great Match!";
            } else if (lovePercentage <= 70) {
                result.innerHTML += "<br>There is a potential. Give it a try!";
            } else {
                result.innerHTML += "<br>Great Match! Love is in the air!";
            }
        } else {
            alert('Please enter valid name.');
        }
    }
}



function numberChecker(str)
{
    let text = str.split('');
    for (let i = 0; i < text.length; i++) {
        if (!Number.isNaN(parseInt(str[i]))) {
            return true; // There's number in input
        }
    }
    return false;
}