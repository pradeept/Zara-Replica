//Bags Data
const beautyData = [
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6581/810/102/2/w/444/6581810102_15_1_1.jpg?ts=1634201998255",
        productName: "QUILTED MINI CROSSBODY BAG",
        strikedPrice: "₹ 2,990.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "CROSSBODY BAG",
        sale: "45%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6317/610/201/2/w/444/6317610201_6_5_1.jpg?ts=1631027149696",
        productName: "ANIMAL PRINT QUILTED CROSSBODY BAG ",
        strikedPrice: "₹ 2,590.00",
        price: "₹ 1,190.00",
        itemGender: "Women",
        itemCategory: "PRINTED BAG",
        sale: "50%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6580/810/030/2/w/444/6580810030_15_1_1.jpg?ts=1634130634421",
        productName: "QUILTED MINI CROSSBODY BAG",
        strikedPrice: "₹ 2,990.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "QUILTED MINI BAG ",
        sale: "45%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6445/710/049/2/w/444/6445710049_15_1_1.jpg?ts=1625228282861",
        productName: "NYLON MINI TOTE BAG",
        strikedPrice: "₹ 2,590.00",
        price: "₹ 1,190.00",
        itemGender: "Women",
        itemCategory: "NYLON MINI BAG",
        sale: "45%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6592/810/050/2/w/444/6592810050_15_2_1.jpg?ts=1624984495781",
        productName: "TRANSPARENT MINI TOTE BAG",
        strikedPrice: "₹ 2,990.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "TOTE BAG",
        sale: "45%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6503/810/030/2/w/444/6503810030_15_1_1.jpg?ts=1630065416081",
        productName: "QUILTED CITY BAG WITH CHAIN STRAP",
        strikedPrice: "₹ 4,290.00",
        price: "₹ 2,790.00",
        itemGender: "Women",
        itemCategory: "CHAIN STRAP BAG",
        sale: "30%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6029/810/116/2/w/444/6029810116_15_1_1.jpg?ts=1630323732927",
        productName: "FAUX FUR SHOULDER BAG WITH CHAIN",
        strikedPrice: "₹ 3,590.00",
        price: "₹ 2,290.00",
        itemGender: "Women",
        itemCategory: "SHOULDER BAG",
        sale: "35%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6608/810/040/2/w/444/6608810040_15_1_1.jpg?ts=1630514948974",
        productName: "QUILTED FABRIC CROSSBODY BAG",
        strikedPrice: "₹ 2,990.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "CROSSBODY BAG",
        sale: "45%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6512/810/084/2/w/444/6512810084_6_1_1.jpg?ts=1630432194277",
        productName: "SHOULDER BAG WITH CHAIN",
        strikedPrice: "₹ 2,990.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "CHAIN BAG",
        sale: "45%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6108/710/050/2/w/444/6108710050_15_1_1.jpg?ts=1631618498118",
        productName: " TOTE BAG WITH INTERWOVEN BASE",
        strikedPrice: "₹ 2,990.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "INTERWOVEN BASE BAG",
        sale: "45%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6893/710/111/2/w/444/6893710111_15_1_1.jpg?ts=1622806066556",
        productName: "PICNIC CASE",
        strikedPrice: "₹ 4,990.00",
        price: "₹ 3,990.00",
        itemGender: "Women",
        itemCategory: "PICNIC CASE",
        sale: "20%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6121/710/100/2/w/444/6121710100_15_1_1.jpg?ts=1631546741904",
        productName: "NYLON TOTE BAG WITH HANDLES AT THE FRONT",
        strikedPrice: "₹ 2,990.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "NYLON TOTE BAG ",
        sale: "45%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6789/810/040/2/w/444/6789810040_6_2_1.jpg?ts=1634572283204",
        productName: "STUDDED MOBILE PHONE BAG",
        strikedPrice: "₹ 2,590.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "PHONE BAG",
        sale: "35%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6600/810/081/2/w/444/6600810081_6_1_1.jpg?ts=1620914770944",
        productName: "BRAIDED SHOULDER BAG",
        strikedPrice: "₹ 2,490.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "BRAIDED BAG",
        sale: "35%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6075/610/040/2/w/444/6075610040_15_1_1.jpg?ts=1641806427123",
        productName: "RIGID TRAVEL CASE",
        strikedPrice: "₹ 4,990.00",
        price: "₹ 3,990.00",
        itemGender: "Women",
        itemCategory: " TRAVEL CASE",
        sale: "20%",
    },

    {
        imageURL:
            "https://static.zara.net/photos///2021/V/1/1/p/6553/810/090/2/w/444/6553810090_15_1_1.jpg?ts=1621249588574",
        productName: "PURPLE® WRISTBAND",
        strikedPrice: "₹ 2,490.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "WRISTBAND",
        sale: "35%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6349/810/020/2/w/444/6349810020_15_1_1.jpg?ts=1633021361998",
        productName: "QUILTED BACKPACK",
        strikedPrice: "₹ 3,590.00",
        price: "₹ 2,290.00",
        itemGender: "Women",
        itemCategory: "BACKPACK",
        sale: "35%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/V/1/1/p/6049/710/111/2/w/444/6049710111_15_1_1.jpg?ts=1617117401764",
        productName: "CROCHET MAXI BUCKET BAG",
        strikedPrice: "₹ 3,290.00",
        price: "₹ 2,290.00",
        itemGender: "Women",
        itemCategory: "MAXI BUCKET BAG",
        sale: "30%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6137/810/070/2/w/444/6137810070_15_1_1.jpg?ts=1626278058891",
        productName: "SATIN BUCKET BAG",
        strikedPrice: "₹ 2,590.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "BUCKET BAG",
        sale: "35%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6130/810/111/2/w/444/6130810111_15_1_1.jpg?ts=1622125323420",
        productName: "JUTE TOTE BAG",
        strikedPrice: "₹ 2,590.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "JUTE TOTE BAG",
        sale: "35%",
    },
];

//Adding bags data to local storage
localStorage.setItem('bagData', JSON.stringify(bagData));


//Shoes Data
const shoesData = [
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/2/p/2216/820/001/2/w/444/2216820001_6_1_1.jpg?ts=1625150699838",
        productName: "MULTI-PIECE SNEAKERS",
        strikedPrice: "₹ 3,590.00",
        price: "₹ 1,990.00",
        itemGender: "Men",
        itemCategory: "SNEAKERS",
        sale: "40%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/2/p/2600/820/010/2/w/444/2600820010_6_1_1.jpg?ts=1622715909338",
        productName: "DECK SHOES",
        strikedPrice: "₹ 2,590.00",
        price: "₹ 990.00",
        itemGender: "Men",
        itemCategory: "SNEAKERS",
        sale: "60%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/V/1/2/p/2617/720/010/2/w/444/2617720010_6_1_1.jpg?ts=1617782241039",
        productName: "SOFT LEATHER LOAFERS",
        strikedPrice: "₹ 4,990.00",
        price: "₹ 2,990.00",
        itemGender: "Men",
        itemCategory: "LOAFERS",
        sale: "40%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/2/p/2702/820/107/2/w/444/2702820107_6_1_1.jpg?ts=1625075869351",
        productName: "JETFOAM CLOGS",
        strikedPrice: "₹ 2,290.00",
        price: "₹ 1,290.00",
        itemGender: "Men",
        itemCategory: "SANDALS",
        sale: "40%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/2/p/2201/820/203/2/w/444/2201820203_15_2_1.jpg?ts=1626253165134",
        productName: "CONTRAST TRAINERS",
        strikedPrice: "₹ 2,990.00",
        price: "₹ 1,990.00",
        itemGender: "Men",
        itemCategory: "TRAINERS",
        sale: "30%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/2/p/2001/820/102/2/w/444/2001820102_6_1_1.jpg?ts=1630572812137",
        productName: "SPLIT SUEDE LEATHER ANKLE BOOTS WITH CHUNKY SOLE",
        strikedPrice: "₹ 6,990.00",
        price: "₹ 3,990.00",
        itemGender: "Men",
        itemCategory: "BOOTS",
        sale: "40%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/2/p/2121/822/092/2/w/444/2121822092_6_1_1.jpg?ts=1635508326451",
        productName: "METALLIC HIGH-TOP SNEAKERS",
        strikedPrice: "₹ 3,990.00",
        price: "₹ 2,490.00",
        itemGender: "Men",
        itemCategory: "SNEAKERS",
        sale: "35%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/2/p/2722/720/023/2/w/444/2722720023_6_1_1.jpg?ts=1621412679217",
        productName: "CONTRAST ESPADRILLES",
        strikedPrice: "₹ 2,290.00",
        price: "₹ 1,290.00",
        itemGender: "Men",
        itemCategory: "ESPADRILLES",
        sale: "40%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/2/p/2513/820/040/2/w/444/2513820040_6_1_1.jpg?ts=1627907045349",
        productName: "CHUNKY MONK SHOES",
        strikedPrice: "₹ 3,990.00",
        price: "₹ 2,490.00",
        itemGender: "Men",
        itemCategory: "SHOES",
        sale: "35%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/2/p/2504/721/010/2/w/444/2504721010_15_2_1.jpg?ts=1626345181708",
        productName: "SOFT SPLIT SUEDE DERBY SHOES",
        strikedPrice: "₹ 3,990.00",
        price: "₹ 2,490.00",
        itemGender: "Men",
        itemCategory: "SHOES",
        sale: "35%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/2/p/2708/820/040/24/w/444/2708820040_15_2_1.jpg?ts=1626776813846",
        productName: "WOVEN STRAP SANDALS",
        strikedPrice: "₹ 2,990.00",
        price: "₹ 1,790.00",
        itemGender: "Men",
        itemCategory: "SANDALS",
        sale: "40%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/2/p/2027/820/040/2/w/444/2027820040_6_1_1.jpg?ts=1633078438378",
        productName: "CHELSEA BOOTS WITH CHUNKY SOLES",
        strikedPrice: "₹ 5,590.00",
        price: "₹ 2,990.00",
        itemGender: "Men",
        itemCategory: "BOOTS",
        sale: "45%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/2/p/2323/820/202/2/w/444/2323820202_6_1_1.jpg?ts=1630655451343",
        productName: "MULTI-PIECE RUNNING TRAINERS",
        strikedPrice: "₹ 3,990.00",
        price: "₹ 2,490.00",
        itemGender: "Men",
        itemCategory: "TRAINERS",
        sale: "40%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/2/p/2422/820/040/2/w/444/2422820040_6_1_1.jpg?ts=1632998842475",
        productName: "PATENT LACE-UP SHOES",
        strikedPrice: "₹ 3,990.00",
        price: "₹ 2,490.00",
        itemGender: "Men",
        itemCategory: "LACE-UP SHOES",
        sale: "30%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/2/p/2332/821/202/2/w/444/2332821202_6_1_1.jpg?ts=1632151209366",
        productName: "TREK SNEAKERS",
        strikedPrice: "₹ 3,990.00",
        price: "₹ 2,490.00",
        itemGender: "Men",
        itemCategory: "SNEAKERS",
        sale: "35%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/2/p/2715/720/040/2/w/444/2715720040_15_2_1.jpg?ts=1626266812552",
        productName: "STRAPPY SANDALS",
        strikedPrice: "₹ 2,990.00",
        price: "₹ 1,790.00",
        itemGender: "Men",
        itemCategory: "SANDALS",
        sale: "40%",
    },
    //WOMEN
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/2171/810/004/2/w/444/2171810004_15_1_1.jpg?ts=1634135333139",
        productName: "LEATHER ANKLE BOOTS WITH TRACK SOLE",
        strikedPrice: "₹ 9,990.00",
        price: "₹ 4,990.00",
        itemGender: "Women",
        itemCategory: "BOOTS",
        sale: "60%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/2400/810/040/2/w/444/2400810040_15_1_1.jpg?ts=1623339091236",
        productName: "CONTRAST SNEAKERS ",
        strikedPrice: "₹ 5,990.00",
        price: "₹ 2,990.00",
        itemGender: "Women",
        itemCategory: "SNEAKERS",
        sale: "60%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/1667/810/032/2/w/444/1667810032_15_1_1.jpg?ts=1630667317869",
        productName: "FLAT TOWELLING SANDALS",
        strikedPrice: "₹ 4,990.00",
        price: "₹ 2,990.00",
        itemGender: "Women",
        itemCategory: "SANDALS",
        sale: "60%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/3426/810/012/2/w/444/3426810012_15_1_1.jpg?ts=1628600447468",
        productName: "CONTRAST-COLOURED HIGH-TOP TRAINERS",
        strikedPrice: "₹ 2,590.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "TRAINERS",
        sale: "60%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/1250/810/040/2/w/444/1250810040_15_1_1.jpg?ts=1636548037926",
        productName: "LEATHER SLINGBACK SHOES WITH METAL HEEL",
        strikedPrice: "₹ 8,990.00",
        price: "₹ 5,990.00",
        itemGender: "Women",
        itemCategory: "SANDALS",
        sale: "60%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/2052/810/040/2/w/444/2052810040_15_1_1.jpg?ts=1632902031213",
        productName: "FLAT LEATHER BOOTS WITH BUCKLE",
        strikedPrice: "₹ 11,990.00",
        price: "₹ ₹ 7,990.00",
        itemGender: "Women",
        itemCategory: "BOOTS",
        sale: "60%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/5003/810/202/2/w/444/5003810202_15_1_1.jpg?ts=1629977624324",
        productName: "RUNNING TRAINERS",
        strikedPrice: "₹ 7,990.00",
        price: "₹ 5,990.00",
        itemGender: "Women",
        itemCategory: "TRAINERS",
        sale: "60%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/1634/810/102/2/w/444/1634810102_15_1_1.jpg?ts=1623753251462",
        productName: "FLAT SANDALS WITH LEATHER STRAPS",
        strikedPrice: "₹ 4,990.00",
        price: "₹ 2,990.00",
        itemGender: "Women",
        itemCategory: "SANDALS",
        sale: "60%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/1240/810/070/2/w/444/1240810070_15_1_1.jpg?ts=1625744421037",
        productName: "WOODEN FUR CLOGS WITH STUDS",
        strikedPrice: "₹ 11,990.00",
        price: "₹ 7,990.00",
        itemGender: "Women",
        itemCategory: "WOODEN FUR CLOGS",
        sale: "60%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/1839/810/040/2/w/444/1839810040_15_1_1.jpg?ts=1633526440137",
        productName: " LIMITED EDITION LEATHER PENNY LOAFERS",
        strikedPrice: "₹ 7,990.00",
        price: "₹ 7,990.00",
        itemGender: "Women",
        itemCategory: "LOAFERS",
        sale: "60%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/1671/810/002/2/w/444/1671810002_15_1_1.jpg?ts=1636375203768",
        productName: "FLAT FABRIC SANDALS",
        strikedPrice: "₹ 10,990.00",
        price: "₹ 7,990.00",
        itemGender: "Women",
        itemCategory: "SANDALS",
        sale: "60%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/3500/810/002/2/w/444/3500810002_15_1_1.jpg?ts=1622555767213",
        productName: "LACE ESPADRILLES",
        strikedPrice: "₹ 2,590.00",
        price: "₹ 1,490.00",
        itemGender: "Women",
        itemCategory: "ESPADRILLES",
        sale: "60%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/5305/810/030/2/w/444/5305810030_15_1_1.jpg?ts=1634824580107",
        productName: "CONTRAST COLOURED TRAINERS",
        strikedPrice: "₹ 2,990.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "TRAINERS",
        sale: "60%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/3154/810/032/2/w/444/3154810032_15_1_1.jpg?ts=1632153912376",
        productName: "STRETCH FABRIC ANKLE BOOTS",
        strikedPrice: "₹ 4,990.00",
        price: "₹ 2,990.00",
        itemGender: "Women",
        itemCategory: "BOOTS",
        sale: "60%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/3649/710/040/2/w/444/3649710040_15_1_1.jpg?ts=1624270135742",
        productName: "FLAT RUBBERISED SANDALS",
        strikedPrice: "₹ 2,290.00",
        price: "₹ ₹ 1,190.00",
        itemGender: "Women",
        itemCategory: "SANDALS",
        sale: "60%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/3423/810/090/2/w/444/3423810090_15_1_1.jpg?ts=1628508304491",
        productName: "COLOURFUL TRAINERS",
        strikedPrice: "₹ 2,590.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "TRAINERS",
        sale: "60%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/0/1/p/3920/221/600/2/w/334/3920221600_6_1_1.jpg?ts=1631116860085",
        productName: "MOBILE PHONE BAG WITH PURSE",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,790.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "40%",
    },
    // 12==2
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/0/1/p/4736/394/641/2/w/334/4736394641_6_1_1.jpg?ts=1635233612330",
        productName: "CONTRASTING STONE BEAD NECKLACE",
        price: "₹ 990.00",
        strikedPrice: "₹ 2,590.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "60%",
    },
    // 12==3
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/0/1/p/1124/230/303/2/w/334/1124230303_2_1_1.jpg?ts=1636388922593",
        productName: "PEARL NECKLACE PLATED IN 24K GOLD",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "50%",
    },
    // 12==4
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/0/1/p/3920/284/800/2/w/334/3920284800_6_1_1.jpg?ts=1634906572935",
        productName: "DIAMOND JACQUARD SCARF",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,590.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "35%",
    },
    // 12==5
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/0/1/p/1023/211/083/2/w/334/1023211083_6_1_1.jpg?ts=1635178064567",
        productName: "KNIT FRETWORK BEANIE",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,590.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "35%",
    },
    // 12==6
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/0/1/p/3739/278/500/2/w/334/3739278500_2_1_1.jpg?ts=1636562697064",
        productName: "KNIT SCARF WITH FRINGING",
        price: "₹ 1,590.00",
        strikedPrice: "₹ 2,590.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "35%",
    },
    // 12==7
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/0/1/p/4319/292/330/2/w/334/4319292330_6_1_1.jpg?ts=1629368173209",
        productName: "MAXI RHINESTONE BELT",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "50%",
    },
    // 12==8
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/0/1/p/4548/227/641/2/w/334/4548227641_1_1_1.jpg?ts=1635344489601",
        productName: "ROUND STONE NECKLACE",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "50%",
    },
    // 12==9
    {
        imageURL:
            "https://static.zara.net/photos///2022/V/0/1/p/4736/002/800/2/w/331/4736002800_1_1_1.jpg?ts=1637842608605",
        productName: "STRETCH DIAMANTÉ BELT",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,990.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "40%",
    },
    // 12==10
    {
        imageURL:
            "https://static.zara.net/photos///2021/V/2/1/p/0047/056/999/2/w/331/0047056999_6_1_1.jpg?ts=1610612773197",
        productName: "PARIS 10ML",
        price: "₹ 290.00",
        strikedPrice: "₹ 390.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "20%",
    },
    // 12==11
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6723/810/040/2/w/331/6723810040_15_1_1.jpg?ts=1631721686681",
        productName: "NYLON TOTE BAG - YOGA COLLECTION",
        price: "₹ 3,990.00",
        strikedPrice: "₹ 4,990.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "20%",
    },
    // 12==12
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/0/1/p/4736/249/303/2/w/334/4736249303_6_1_1.jpg?ts=1625156556307",
        productName: "PACK OF ASSORTED BRACELETS",
        price: "₹ 990.00",
        strikedPrice: "₹ 1,590.00",
        itemGender: "female",
        itemCategory: "ACCESSORIES",
        sale: "40%",
    },
];

//Adding shoe data to local storage
localStorage.setItem('shoesData', JSON.stringify(shoesData));