// 1

const askDeposit = confirm("Do you want to deposit money?");
const askWithdraw = confirm("Do you want to withdraw money?")
let depositResult;
let withdrawResult;
if (askDeposit === true) {
  depositResult = Number(prompt("How much money do you want to deposit?"))
}
if (askWithdraw === true) {
     withdrawResult = Number(prompt("How much money do you want to withdraw?"))
}
const bankAccount = {
    ownerName: "Tom",
    accountNumber: "123",
    balance: 0,
    deposit: 0,
    withdraw: 0,
    withdrawOrDeposit(newOwnerName, newAccountNumber, newBalance, newDeposit, newWithdraw) {
        this.ownerName = newOwnerName;
        this.accountNumber = newAccountNumber;
        this.balance = newBalance;
        this.deposit = newDeposit;
        this.withdraw = newWithdraw;
    }
}
const balanceResult = bankAccount.balance + depositResult - withdrawResult || bankAccount.balance + depositResult || bankAccount.balance - withdrawResult || bankAccount.balance;
const showBalance = alert(`Your balance:${balanceResult}`)
bankAccount.withdrawOrDeposit("Sviatoslav", "121", balanceResult, depositResult, withdrawResult)
console.log(balanceResult);
console.log(bankAccount);






// 2
let getTemperature = Number(prompt("What is the temperature outside?"));
const weather = {
    temperature: "",
    humidity: "4",
    windSpeed: "9",
    ifGetTrue: true,
    ifGetFalse: false,
}
if (getTemperature < 0) {
        console.log(weather.ifGetTrue);
       alert("температура нижче 0 градусів Цельсія")
}
    if (getTemperature >= 0) {
        console.log(weather.ifGetFalse);
        alert("температура вища або дорівнює 0 градусів Цельсія")
    }


// 3

const user = {
 name: "Yurii",
 email: "test@example.com",
 password: "qwerty123",
 login(inputEmail, inputPassword) {
 if (inputEmail === this.email && inputPassword === this.password) {
return "Успішний вхід!";
} else {
return "Невірний email або пароль!";
}
  },
};
console.log(user.login("test@example.com", "qwerty123")); 
console.log(user.login("wrong@mail.com", "12345"));       

// // 4


const movie = {
     title: "nn",
   director: "nn",
   year: 2021,
    rating: 4.7,
    qualityPlus: true,
    qualityMinus: false,
  
    changeMovie(newTitle, newDirector, newYear, newRating) {
        this.title = newTitle;
        this.director = newDirector;
        this.year = newYear;
        this.rating = newRating
    }
   
}
if (movie.rating > 8) {
      console.log(movie.qualityPlus);
      
}
    if (movie.rating <= 8) {
      console.log(movie.qualityMinus);
      
    }
 movie.changeMovie(3, "newName");
 console.log(movie);