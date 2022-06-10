function ageCheck() {
    let currentYear = 2022;
    var birthYear = Number(document.getElementById('year').value)
    var yearChecked = currentYear - birthYear

    if (yearChecked > 18){
            alert('Sistema liberado, divirta-se!')
            window.location.href = "https://www.youtube.com/watch?v=-ngW1svbSfw";
    } else{
        alert('Volte quando for maior de 18 anos!!')
    }
}