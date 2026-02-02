import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    es: {
        translation: {
            carta: {
                subtitle: "nuestra carta",
                title: "Carta",
                back: "Volver",
                // Entrantes
                entrantes: "Entrantes",
                panCoca: "Pan de coca con tomate y aceite de oliva",
                jamon: "Jamón ibérico de bellota",
                queso: "Tabla de quesos variados",
                croquetas: "Croquetas caseras (jamón, pollo o espinacas)",
                gambas: "Gambas al ajillo",
                //Ensaladas
                ensaladas: "Ensaladas",
                ensaladaNarela: "Ensalada Narela (lechuga, tomate, cebolla, atún, huevo y aceitunas)",
                cesar: "Ensalada César (lechuga, pollo, queso parmesano, picatostes y salsa César)",
                mediterranea: "Ensalada Mediterránea (mezclum, tomate, pepino, cebolla roja, aceitunas y queso feta)",
                burrata: "Burrata con tomate cherry y pesto",
                // Carnes
                carnes: "Carnes",
                solomillo: "Solomillo de ternera con salsa de champiñones",
                pollo: "Pechuga de pollo a la plancha con guarnición",
                costillas: "Costillas de cerdo a la barbacoa",
                entrecot: "Entrecot a la parrilla con patatas fritas",
                secreto: "Secreto ibérico",
                //Mariscos
                mariscos: "Mariscos",
                pulpo: "Pulpo a la gallega",
                polpoBrasa: "Pulpo a la brasa con patatas panaderas",
                calamares: "Calamares a la romana",
                mejillones: "Mejillones al vapor",
                langostinos: "Langostinos a la plancha",
                //Pescados
                pescados: "Pescados",
                dorada: "Dorada a la sal",
                lubina: "Lubina al horno con verduras",
                salmón: "Salmón a la plancha con salsa de limón",
                bacalao: "Bacalao al pil-pil",
                atún: "Atún a la plancha con guarnición",
                //Paella
                paella: "Paellas",
                paellaMariscos: "Paella de mariscos",
                paellaMixta: "Paella mixta (mariscos y carne)",
                paellaVegetariana: "Paella vegetariana",
                //Postres
                postres: "Postres",
                cremaCatalana: "Crema catalana",
                tartaQueso: "Tarta de queso casera",
                brownie: "Brownie con helado de vainilla",
                helado: "Helado (varios sabores)",
                frutaTemporada: "Fruta de temporada"
            }
        }
    },
    ca: {
        translation: {
            carta: {
                subtitle: "la nostra carta",
                title: "Carta",
                back: "Tornar",
                // Entrants
                entrantes: "Entrants",
                panCoca: "Pa de coca amb tomàquet i oli d'oliva",
                jamon: "Pernil ibèric de gla",
                queso: "Taula de formatges variats",
                croquetas: "Croquetes casolanes (pernil, pollastre o espinacs)",
                gambas: "Gambes a l'all",
                //Amanides
                ensaladas: "Amanides",
                ensaladaNarela: "Amanida Narela (enciam, tomàquet, ceba, tonyina, ou i olives)",
                cesar: "Amanida Cèsar (enciam, pollastre, formatge parmesà, crostons i salsa Cèsar)",
                mediterranea: "Amanida Mediterrània (mesclum, tomàquet, cogombre, ceba vermella, olives i formatge feta)",
                burrata: "Burrata amb tomàquet cherry i pesto",
                // Carns
                carnes: "Carns",
                solomillo: "Solomillo de vedella amb salsa de xampinyons",
                pollo: "Pit de pollastre a la planxa amb guarnició",
                costillas: "Costelles de porc a la barbacoa",
                entrecot: "Entrecot a la graella amb patates fregides",
                secreto: "Secret ibèric",
                //Mariscs
                mariscos: "Mariscs",
                pulpo: "Pop a la gallega",
                polpoBrasa: "Pop a la brasa amb patates panadera",
                calamares: "Calamars a la romana",
                mejillones: "Musclos al vapor",
                langostinos: "Llagostins a la planxa",
                //Peixos
                pescados: "Peixos",
                dorada: "Orada a la sal",
                lubina: "Llobarro al forn amb verdures",
                salmón: "Salmó a la planxa amb salsa de llimona",
                bacalao: "Bacallà al pil-pil",
                atún: "Tonyina a la planxa amb guarnició",
                //Paelles
                paella: "Paelles",
                paellaMariscos: "Paella de mariscs",
                paellaMixta: "Paella mixta (mariscs i carn)",
                paellaVegetariana: "Paella vegetariana",
                //Postres
                postres: "Postres",
                cremaCatalana: "Crema catalana",
                tartaQueso: "Pastís de formatge casolà",
                brownie: "Brownie amb gelat de vainilla",
                helado: "Gelat (diversos sabors)",
                frutaTemporada: "Fruita de temporada"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'es',
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;