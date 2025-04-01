function send(){
    let sendBtn = document.querySelectorAll(".davomat #send")

    let checkingSt = []
    sendBtn.forEach((e,i)=>{
        e.addEventListener("click", (d)=>{
            d.preventDefault();
            let check = e.parentElement.querySelectorAll("ol li input");
            check.forEach(f=>{
                if(f.checked){
                    let checking = f.parentElement.querySelector("p").innerText;
                    checkingSt.push(checking)
                }
            })
            
            let now = new Date();
            // console.log(now.toLocaleString());
            let sts = `${now.toLocaleString()} \nDarsga kelgan o'quvchilar: `
            for (let i = 0; i < checkingSt.length; i++) {
                sts+= ` \n - ${checkingSt[i]}`   
            }
            console.log(sts);
            let botToken = "7237504070:AAFl_54E3MLr4w5Mo3iPsfxLUPrh7lpg21g"; // Shu yerga bot tokenini qo'ying
            let chatId = "5126880787"; // Shu yerga o'z chat ID'ingizni yozing
            let chatId2 = "-1001951784852"; 

            let apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(sts)}`;
            let apiUrl2 = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId2}&text=${encodeURIComponent(sts)}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        alert("Xabar muvaffaqiyatli yuborildi!");
                    } else {
                        alert("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
                    }
                })
                .catch(error => alert("Internet yoki serverda muammo bor!"));
            fetch(apiUrl2)
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        alert("Xabar muvaffaqiyatli yuborildi!");
                    } else {
                        alert("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
                    }
                })
                .catch(error => alert("Internet yoki serverda muammo bor!"));
        
        })
    })
}
function sendActive(){
    let sendBtn = document.querySelectorAll(".active #send")

    let checkingSt = [];
    let scoreBall = [];
    sendBtn.forEach((e,i)=>{
        e.addEventListener("click", (d)=>{
            d.preventDefault();
            let score = e.parentElement.querySelectorAll("ol li input");
            score.forEach(f=>{
                if(f.value != ""){
                    let checking = f.parentElement.querySelector("p").innerText;
                checkingSt.push(checking)
                scoreBall.push(f.value)
                }
                
            })
            
            let now = new Date();
            // console.log(now.toLocaleString());
            let sts = `${now.toLocaleString()} \nFaollik: `
            for (let i = 0; i < checkingSt.length; i++) {
                sts+= ` \n - ${checkingSt[i]}:  ${scoreBall[i]} / 10`   
            }
            console.log(sts);
            let botToken = "7237504070:AAFl_54E3MLr4w5Mo3iPsfxLUPrh7lpg21g"; // Shu yerga bot tokenini qo'ying
            let chatId = "5126880787"; // Shu yerga o'z chat ID'ingizni yozing
            let chatId2 = "-1001951784852"; 

            let apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(sts)}`;
            let apiUrl2 = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId2}&text=${encodeURIComponent(sts)}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        alert("Xabar muvaffaqiyatli yuborildi!");
                    } else {
                        alert("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
                    }
                })
                .catch(error => alert("Internet yoki serverda muammo bor!"));
            fetch(apiUrl2)
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        alert("Xabar muvaffaqiyatli yuborildi!");
                    } else {
                        alert("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
                    }
                })
                .catch(error => alert("Internet yoki serverda muammo bor!"));
        
        })
    })
}
function sendHomework(){
    let sendBtn = document.querySelectorAll(".homework #send")

    let checkingSt = [];
    let scoreBall = [];
    sendBtn.forEach((e,i)=>{
        e.addEventListener("click", (d)=>{
            d.preventDefault();
            let score = e.parentElement.querySelectorAll("ol li input");
            score.forEach(f=>{
                    if(f.value != ""){
                        let checking = f.parentElement.querySelector("p").innerText;
                    checkingSt.push(checking)
                    scoreBall.push(f.value)
                    }
                
            })
            
            let now = new Date();
            // console.log(now.toLocaleString());
            let sts = `${now.toLocaleString()} \nUyga vazifa: `
            for (let i = 0; i < checkingSt.length; i++) {
                sts+= ` \n - ${checkingSt[i]}: \n ${scoreBall[i]} \n bajarib kelish!`   
            }
            console.log(sts);
            let botToken = "7237504070:AAFl_54E3MLr4w5Mo3iPsfxLUPrh7lpg21g"; // Shu yerga bot tokenini qo'ying
            let chatId = "5126880787"; // Shu yerga o'z chat ID'ingizni yozing
            let chatId2 = "-1001951784852"; 

            let apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(sts)}`;
            let apiUrl2 = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId2}&text=${encodeURIComponent(sts)}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        alert("Xabar muvaffaqiyatli yuborildi!");
                    } else {
                        alert("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
                    }
                })
                .catch(error => alert("Internet yoki serverda muammo bor!"));
            fetch(apiUrl2)
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        alert("Xabar muvaffaqiyatli yuborildi!");
                    } else {
                        alert("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
                    }
                })
                .catch(error => alert("Internet yoki serverda muammo bor!"));
        })
    })
}
send()
sendActive()
sendHomework()