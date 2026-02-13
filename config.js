const CONFIG = {
    valentineName: "Garu",

    pageTitle: "¿Quieres ser mi San Valentín? 💕",

    floatingEmojis: {
        hearts: ['💕','🩷','💓','💗','♥️','❣️'],
        bears: ['🧸','🌸','🌷','🌹','🌿','🌱']
    },

    questions: {
        first: {
            text: "¿Te gusto?",
            yesBtn: "Sí 💗",
            noBtn: "No 😢",
            secretAnswer: "claro que no, yo te amo y siempre te amare💕"
        },

        second: {
            text: "¿Cuánto amas?",
            startText: "Así de mucho… 💓",
            nextBtn: "Siguiente 💖"
        },

        third: {
            text: "¿Tú quisieras ser mi San Valentín este 13 de febrero? 🌹",
            yesBtn: "Sí, quiero 💕",
            noBtn: "No… pero lo pensare😔"
        },

        fourth: {
            text: "¿Quieres leer una pequeña carta?",
            option1: "Sí, quiero leerla 💌",
            option2: "¿Me la lees tú? 🎧",
            option3: "Mejor nadota 😅"
        }
    },

    loveMessages: {
        extreme: "¿¡Wooow, me amas tanto así!? 🥰💝",
        high: "De aquí hasta la luna, a pasos de tortuga 🐢🌙💕",
        normal: "¡Hasta el infinito y más allá! 🚀💝"
    },

    celebration: {
        title: "Entonces… empecemos de nuevo juntos 💕🌸",
        message: "Quiero construir algo bonito contigo, paso a paso y haciendo las cosas bien 💖",
        emojis: "💕🌿"
    },

    extras: {
        carta: "Aver, aunque esto sea chiquito quiero que pueda quedarse en tu corazón. Gracias por siempre estar ahí para mí, incluso cuando no es fácil, se que soy muy complicado Pero tú sigues ahí, gracias por tu paciencia cuando estamos juntos, por tu atención y lo más importante por no soltarme cuando más lo necesito 💕💗. Quiero decirte que si, realmente si te amo, lo digo desde la sinceridad de mi corazoncito, se que cometo errores, uno más grandes que otros, y no los niego Pero la verdad quiero enmendarlos, demostrarte que puedo hacerlo mejor, y que puedo demostrar que solo te quiero a ti a mi lado 🌸🍃. Me encantaría tener otra oportunidad contigo, construir algo mejor, algo más sano, más bonito y hacer las cosas bien, pero primero hay que conocernos mejor, no saltarnos etapas y disfrutar cada momento 🩷🫶🏻. Pero bueno, para empezar eso, me gustaría que usted y yo pasemos el día de mañana juntos, pero solo si",  // ← AQUÍ pegarás tu carta después
        llamadaTexto: "Entonces márcame… quiero escucharte 💖📞",
        fotoUrl: "https://i.pinimg.com/736x/06/9a/09/069a09641b36dd1294d333dbd5cce7dd.jpg" // ← AQUÍ pondrás la URL de tu imagen
    },

    colors: {
        backgroundStart: "#ffd6e0",
        backgroundEnd: "#ffe5d0",
        buttonBackground: "#ffb3c1",
        buttonHover: "#ffc2d1",
        textColor: "#000000"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
        startText: "🎵 Reproducir música",
        stopText: "🔇 Detener música",
        volume: 25
    }
};

window.VALENTINE_CONFIG = CONFIG;
