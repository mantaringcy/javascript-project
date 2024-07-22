function palindromeCheck()
{
    let input = document.getElementById('inputText').value;

    let success = document.getElementById('success').classList;
    let fail = document.getElementById('fail').classList;
    let noInput = document.getElementById('empty').classList;

    

    if (input != "") {

        if (isPalindrome(input)) {
            success.remove('d-none');
            fail.add('d-none');
        } else {
            success.add('d-none');
            fail.remove('d-none');
        }

        noInput.add('d-none'); // Alert

    } else {
        noInput.remove('d-none');
        success.add('d-none');
        fail.add('d-none');

    }

}

function isPalindrome(str)
{
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');

    return cleanStr === reversedStr;
}