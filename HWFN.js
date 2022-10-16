var anwser = 0
var score = 0
var wrong = 0
function play() {

    alert("ยินดีต้อนรับเข้าสู่เกมทายสี")
    while (true) {
        var round = prompt("คุณต้องการเล่นกี่รอบ")
        console.log("ค่า round:" + round)
        if (round != "") {
            if (round == null) {
                round = 0
            }
            break
        }
    }

    let a = 0
    for (i = 0; i < round; i++) {
        ++a

        // เลขข้อ
        console.log("--------------------")
        console.log("ข้อที่:" + a)

        // สุ่มเลข
        let num = Math.floor(Math.random() * 10)
        console.log("ค่า num " + num)

        // เซ็ตสี
        if (num == 0) {
            var color = ["ดำ", "สีดำ", "black"]
            var color1 = "ดำ"
            var color2 = "สีดำ"
            var color3 = "black"
        }
        else if (num == 1) {
            var color = ["แดง", "สีแดง", "red"]
            var color1 = "แดง"
            var color2 = "สีแดง"
            var color3 = "red"
        }
        else if (num == 2) {
            var color = ["น้ำเงิน", "สีน้ำเงิน", "blue"]
            var color1 = "น้ำเงิน"
            var color2 = "สีน้ำเงิน"
            var color3 = "blue"
        }
        else if (num == 3) {
            var color = ["เขียว", "สีเขียว", "green"]
            var color1 = "เขียว"
            var color2 = "สีเขียว"
            var color3 = "green"
        }
        else if (num == 4) {
            var color = ["เหลือง", "สีเหลือง", "yellow"]
            var color1 = "เหลือง"
            var color2 = "สีเหลือง"
            var color3 = "yellow"
        }
        else if (num == 5) {
            var color = ["ส้ม", "สีส้ม", "orange"]
            var color1 = "ส้ม"
            var color2 = "สีส้ม"
            var color3 = "orange"
        }
        else if (num == 6) {
            var color = ["ม่วง", "สีม่วง", "purple"]
            var color1 = "ม่วง"
            var color2 = "สีม่วง"
            var color3 = "purple"
        }
        else if (num == 7) {
            var color = ["ชมพู", "สีชมพู", "pink"]
            var color1 = "ชมพู"
            var color2 = "สีชมพู"
            var color3 = "pink"
        }
        else if (num == 8) {
            var color = ["เทา", "สีเทา", "gray"]
            var color1 = "เทา"
            var color2 = "สีเทา"
            var color3 = "gray"
        }
        else if (num == 9) {
            var color = ["ขาว", "สีขาว", "white"]
            var color1 = "ขาว"
            var color2 = "สีขาว"
            var color3 = "white"
        }
        else {
            var color1 = "none"
        }
        console.log("คำตอบ :" + color)

        // document.getElementById("pic").src = pic
        while (true) {
            // ตอบ
            let myanw = prompt("ข้อที่ " + a + " ลองทายดูสิ")
            console.log("ค่า myanw:" + myanw)

            // เฉลย
            if (myanw == color1 | myanw == color2 | myanw == color3) {
                alert("ถูกต้องแล้วค้าบบ")
                score += 1
                anwser += 1
                break
            }
            else if (myanw == null) {
                break
            }
            else {
                anwser += 1
                wrong += 1
                alert("ผิดนะ ลองดูใหม่")
            }
        }
        document.getElementById('anw').innerHTML += "<br>ข้อ "+a+" : "+color2
    }
    document.getElementById('round').innerHTML = "เล่นทั้งหมด : " + round + " ข้อ"
    document.getElementById('anwser').innerHTML = "ตอบไป : " + anwser+" ครั้ง"
    document.getElementById('wrong').innerHTML = "ตอบผิด : " + wrong+" ครั้ง"
    document.getElementById('score').innerHTML = "คะแนน : " + score+" คะแนน"
}