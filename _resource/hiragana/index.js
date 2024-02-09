// Function to toggle mute state
function toggleMute() {
    const muteButton = document.getElementById('muteButton');
    muteButton.classList.toggle('muted');
}

const hiraganaData = {
    "a": {
        "imageURL": "https://upload.wikimedia.org/wikipedia/commons/2/21/%E3%81%82-bw.png",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hiragana_%E3%81%82_stroke_order_animation.gif",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/あ-2464554.mp3"
    },
    "i": {
        "imageURL": "https://upload.wikimedia.org/wikipedia/commons/7/7b/%E3%81%84-bw.png",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Hiragana_%E3%81%84_stroke_order_animation.gif",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/い-2464554.mp3"
    },
    "u": {
        "imageURL": "https://upload.wikimedia.org/wikipedia/commons/0/06/%E3%81%86-bw.png",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Hiragana_%E3%81%86_stroke_order_animation.gif",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/う-2464554.mp3"
    },
    "e": {
        "imageURL": "https://upload.wikimedia.org/wikipedia/commons/e/e3/%E3%81%88-bw.png",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Hiragana_%E3%81%88_stroke_order_animation.gif",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/え-2464554.mp3"
    },
    "o": {
        "imageURL": "URL_TO_IMAGE_FOR_お",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Hiragana_%E3%81%8A_stroke_order_animation.gif",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/お-2464554.mp3"
    },
    "ka": {
        "imageURL": "URL_TO_IMAGE_FOR_か",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/9/97/Hiragana_%E3%81%8B_stroke_order_animation.gif",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/か-2464554.mp3"
    },
    "ki": {
        "imageURL": "URL_TO_IMAGE_FOR_き",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/1/18/Hiragana_%E3%81%8D_stroke_order_animation.gif",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/き-2464554.mp3"
    },
    "ku": {
        "imageURL": "URL_TO_IMAGE_FOR_く",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/6/68/Hiragana_%E3%81%8F_stroke_order_animation.gif",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/く-2464554.mp3"
    },
    "ke": {
        "imageURL": "URL_TO_IMAGE_FOR_け",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/け-2464555.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/5/57/Hiragana_%E3%81%91_stroke_order_animation.gif"
    },
    "ko": {
        "imageURL": "URL_TO_IMAGE_FOR_こ",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/こ-2464555.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/8/83/Hiragana_%E3%81%93_stroke_order_animation.gif"
    },
    "sa": {
        "imageURL": "URL_TO_IMAGE_FOR_さ",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/さ-2464555.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/7/79/Hiragana_%E3%81%95_stroke_order_animation.gif"
    },
    "shi": {
        "imageURL": "URL_TO_IMAGE_FOR_し",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/し-2464555.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Hiragana_%E3%81%97_stroke_order_animation.gif"
    },
    "su": {
        "imageURL": "URL_TO_IMAGE_FOR_す",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/す-2464555.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/0/05/Hiragana_%E3%81%99_stroke_order_animation.gif"
    },
    "se": {
        "imageURL": "URL_TO_IMAGE_FOR_せ",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/せ-2464555.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Hiragana_%E3%81%9B_stroke_order_animation.gif"
    },
    "so": {
        "imageURL": "URL_TO_IMAGE_FOR_そ",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/そ-2464555.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Hiragana_%E3%81%9D_stroke_order_animation.gif"
    },
    "ta": {
        "imageURL": "URL_TO_IMAGE_FOR_た",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/た-2464555.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Hiragana_%E3%81%9F_stroke_order_animation.gif"
    },
    "chi": {
        "imageURL": "URL_TO_IMAGE_FOR_ち",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/ち-2464556.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/3/32/Hiragana_%E3%81%A1_stroke_order_animation.gif"
    },
    "tsu": {
        "imageURL": "URL_TO_IMAGE_FOR_つ",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/つ-2464556.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/3/32/Hiragana_%E3%81%A1_stroke_order_animation.gif"
    },
    "te": {
        "imageURL": "URL_TO_IMAGE_FOR_て",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/て-2464556.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/1/15/Hiragana_%E3%81%A6_stroke_order_animation.gif"
    },
    "to": {
        "imageURL": "URL_TO_IMAGE_FOR_と",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/と-2464556.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Hiragana_%E3%81%A8_stroke_order_animation.gif"
    },
    "na": {
        "imageURL": "URL_TO_IMAGE_FOR_な",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/な-2464556.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/8/83/Hiragana_%E3%81%AA_stroke_order_animation.gif"
    },
    "ni": {
        "imageURL": "URL_TO_IMAGE_FOR_に",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/に-2464556.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/2/27/Hiragana_%E3%81%AB_stroke_order_animation.gif"
    },
    "nu": {
        "imageURL": "URL_TO_IMAGE_FOR_ぬ",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/ぬ-2464556.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Hiragana_%E3%81%AC_stroke_order_animation.gif"
    },
    "ne": {
        "imageURL": "URL_TO_IMAGE_FOR_ね",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/ね-2464556.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Hiragana_%E3%81%AD_stroke_order_animation.gif"
    },
    "no": {
        "imageURL": "URL_TO_IMAGE_FOR_の",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/の-2464557.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/0/05/Hiragana_%E3%81%AE_stroke_order_animation.gif"
    },
    "ha": {
        "imageURL": "URL_TO_IMAGE_FOR_は",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/は-2464557.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/4/43/Hiragana_%E3%81%AF_stroke_order_animation.gif"
    },
    "hi": {
        "imageURL": "URL_TO_IMAGE_FOR_ひ",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/ひ-2464557.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/4/40/Hiragana_%E3%81%B2_stroke_order_animation.gif"
    },
    "fu": {
        "imageURL": "URL_TO_IMAGE_FOR_ふ",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/ふ-2464557.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Hiragana_%E3%81%B5_stroke_order_animation.gif"
    },
    "he": {
        "imageURL": "URL_TO_IMAGE_FOR_へ",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/へ-2464557.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/4/40/Hiragana_%E3%81%B8_stroke_order_animation.gif"
    },
    "ho": {
        "imageURL": "URL_TO_IMAGE_FOR_ほ",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/ほ-2464557.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/9/96/Hiragana_%E3%81%BB_stroke_order_animation.gif"
    },
    "ma": {
        "imageURL": "URL_TO_IMAGE_FOR_ま",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/ま-2464557.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/6/65/Hiragana_%E3%81%BE_stroke_order_animation.gif"
    },
    "mi": {
        "imageURL": "URL_TO_IMAGE_FOR_み",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/み-2464557.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Hiragana_%E3%81%BF_stroke_order_animation.gif"
    },
    "mu": {
        "imageURL": "URL_TO_IMAGE_FOR_む",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/む-2464558.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Hiragana_%E3%82%80_stroke_order_animation.gif"
    },
    "me": {
        "imageURL": "URL_TO_IMAGE_FOR_め",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/め-2464558.mp3",
        "gifURL": "https://upload.wikimedia.org/wikipedia/commons/5/58/Hiragana_%E3%82%81_stroke_order_animation.gif"
    },
    "mo": {
        "imageURL": "URL_TO_IMAGE_FOR_も",
        "gifURL": "URL_TO_GIF_FOR_ん",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/も-2464558.mp3"
    },
    "ya": {
        "imageURL": "URL_TO_IMAGE_FOR_や",
        "gifURL": "URL_TO_GIF_FOR_や",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/や-2464558.mp3"
    },
    "yu": {
        "imageURL": "URL_TO_IMAGE_FOR_ゆ",
        "gifURL": "URL_TO_GIF_FOR_ゆ",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/ゆ-2464558.mp3"
    },
    "yo": {
        "imageURL": "URL_TO_IMAGE_FOR_よ",
        "gifURL": "URL_TO_GIF_FOR_よ",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/よ-2464558.mp3"
    },
    "ra": {
        "imageURL": "URL_TO_IMAGE_FOR_ら",
        "gifURL": "URL_TO_GIF_FOR_ら",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/ら-2464558.mp3"
    },
    "ri": {
        "imageURL": "URL_TO_IMAGE_FOR_り",
        "gifURL": "URL_TO_GIF_FOR_り",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/り-2464558.mp3"
    },
    "ru": {
        "imageURL": "URL_TO_IMAGE_FOR_る",
        "gifURL": "URL_TO_GIF_FOR_る",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/る-2465912.mp3"
    },
    "re": {
        "imageURL": "URL_TO_IMAGE_FOR_れ",
        "gifURL": "URL_TO_GIF_FOR_れ",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/れ-2465912.mp3"
    },
    "ro": {
        "imageURL": "URL_TO_IMAGE_FOR_ろ",
        "gifURL": "URL_TO_GIF_FOR_ろ",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/ろ-2465912.mp3"
    },
    "wa": {
        "imageURL": "URL_TO_IMAGE_FOR_わ",
        "gifURL": "URL_TO_GIF_FOR_わ",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/わ-2465967.mp3"
    },
    "wo": {
        "imageURL": "URL_TO_IMAGE_FOR_を",
        "gifURL": "URL_TO_GIF_FOR_を",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/を-2465967.mp3"
    },
    "n": {
        "imageURL": "URL_TO_IMAGE_FOR_ん",
        "gifURL": "URL_TO_GIF_FOR_ん",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/ん-2465967.mp3"
    },
    "ga": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/ga-2464548.mp3"
    },
    "gi": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/gi-2464548.mp3"
    },
    "gu": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/gu-2464548.mp3"
    },
    "ge": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/ge-2464548.mp3"
    },
    "go": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/go-2464548.mp3"
    },
    "za": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/za-2464553.mp3"
    },
    "ji": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/ji-2466174.mp3"
    },
    "zu": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/zu-2464553.mp3"
    },
    "ze": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/ze-2464553.mp3"
    },
    "zo": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/zo-2464553.mp3"
    },
    "da": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/da-2464547.mp3"
    },
    "di": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/di-2464547.mp3"
    },
    "du": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/du-2464547.mp3"
    },
    "de": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/de-2464547.mp3"
    },
    "do": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/do-2464547.mp3"
    },
    "ba": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://cdn.discordapp.com/attachments/1205404034450718720/1205404059834646538/pronunciation_ja_.mp3"
    },
    "bi": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/bi-2464546.mp3"
    },
    "bu": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/bu-2464546.mp3"
    },
    "be": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/be-2464546.mp3"
    },
    "bo": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://cdn.discordapp.com/attachments/1205404034450718720/1205404901014896660/pronunciation_ja_.mp3"
    },
    "pa": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/pa-2464550.mp3"
    },
    "pi": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/pi-2464550.mp3"
    },
    "pu": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/pu-2464551.mp3"
    },
    "pe": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/pe-2464550.mp3"
    },
    "po": {
        "imageURL": "",
        "gifURL": "",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/po-2464551.mp3"
    },
    "kya": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/kya-2464549.mp3",
    },
    "kyu": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/kyu-2464550.mp3",
    },
    "kyo": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/kyo-2464550.mp3",
    },
    "sha": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/sha-2466778.mp3",
    },
    "shu": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/shu-2464552.mp3",
    },
    "sho": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/sho-2501082.mp3",
    },
    "cha": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/cha-2464546.mp3",
    },
    "chu": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/chu-2464547.mp3",
    },
    "cho": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/cho-2464547.mp3",
    },
    "nya": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/nya-2464550.mp3",
    },
    "nyu": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/nyu-2464550.mp3",
    },
    "nyo": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/nyo-2464550.mp3",
    },
    "hya": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/hya-2464549.mp3",
    },
    "hyu": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/hyu-2464549.mp3",
    },
    "hyo": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/hyo-2464549.mp3",
    },
    "mya": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/mya-2501678.mp3",
    },
    "myu": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/myu-2501678.mp3",
    },
    "myo": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/myo-2501678.mp3",
    },
    "rya": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/rya-2464551.mp3",
    },
    "ryu": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/ryu-2464552.mp3",
    },
    "ryo": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/ryo-2464551.mp3",
    },
    "gya": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/gya-2464548.mp3",
    },
    "gyu": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/gyu-2464548.mp3",
    },
    "gyo": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/gyo-2464548.mp3",
    },
    "ja": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/ja-2464549.mp3",
    },
    "ju": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/ju-2464549.mp3",
    },
    "jo": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/jo-2464549.mp3",
    },
    "bya": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://cdn.discordapp.com/attachments/1205404034450718720/1205411723914248192/pronunciation_ja_.mp3",
    },
    "byu": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://cdn.discordapp.com/attachments/1205404034450718720/1205411739160813628/pronunciation_ja_.mp3",
    },
    "byo": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://cdn.discordapp.com/attachments/1205404034450718720/1205411760232734740/pronunciation_ja_.mp3",
    },
    "pya": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/pya-2464551.mp3",
    },
    "pyu": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/pyu-2464551.mp3",
    },
    "pyo": {
        "imageURL": "URL_TO_IMAGE",
        "gifURL": "URL_TO_GIF",
        "audioURL": "https://content.app-sources.com/s/60388582350729606/uploads/audio/pyo-2464551.mp3",
    }
};


// Function to show model and play sound with a delay
function showModelAndPlaySound(hiragana, modalId) {
    // Display the corresponding modal
    const modal = document.getElementById("hiraganaModal");

    // Define modalImage and modalGif variables here
    const modalImage = document.getElementById('modalImage');
    // const modalGif = document.getElementById('modalGif');

    // Fetch data from the JSON
    const hiraganaInfo = hiraganaData[hiragana];

    // Set modal content based on hiragana
    modalImage.src = hiraganaInfo.imageURL;
    // modalGif.src = hiraganaInfo.gifURL;

    modal.showModal();

    // Check if mute is enabled
    if (!isMuted()) {
        // Delay before playing the sound (adjust the delay time in milliseconds)
        const delayTime = 1000; // 1 second delay (adjust as needed)
        setTimeout(() => {
            // Play the sound using the audio URL from the JSON
            playSound(hiraganaInfo.audioURL);
        }, delayTime);
    }
}

// Function to play audio
function PlaySound(hiragana) {
    // Fetch data from the JSON
    const hiraganaInfo = hiraganaData[hiragana];
    // Play the sound using the audio URL from the JSON is not muted
    if (!isMuted()) {
        playSound(hiraganaInfo.audioURL);
    }

}

// Function to check if the page is muted
function isMuted() {
    return document.getElementById('muteButton').classList.contains('muted');
}

function playSound(audioURL) {
    const audio = new Audio();
    audio.src = audioURL;
    audio.play();
}
