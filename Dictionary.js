let arrEng = ["people","history","way","art","world","information","map","two","family","government"];
let arrVie = ["người","lịch sử","đường","nghệ thuật","thế giới","thông tin","bản đồ","hai","gia đình","chính phủ"];



function lookfor()
{
    let findWord = document.getElementById("txt").value;
    switch (document.getElementById("dic").value)
    {
        case "AV":
            let dicWordEng = 0;
            for (let i = 0; i < arrEng.length; i++)
            {
                if (findWord === arrEng[i])
                {
                    document.getElementById("result").innerHTML = arrVie[i];
                    dicWord++;
                }
            }
            if (dicWordEng != 1)
            {
                document.getElementById("result").innerHTML = "Không tìm thấy";
            }
            break;
        case "VA":
            let dicWordVie = 0;
            for (let i = 0; i < arrVie.length; i++)
            {
                if (findWord === arrVie[i])
                {
                    document.getElementById("result").innerHTML = arrEng[i];
                    dicWord++;
                }
            }
            if (dicWordVie != 1)
            {
                document.getElementById("result").innerHTML = "Không tìm thấy";
            }
            break;

    }

}

