export type Ayah = {
    number: number;           // Numéro du verset
    text: string;             // Texte du verset en arabe
    numberInSurah: number;    // Numéro du verset dans la sourate
    juz: number;              // Numéro du Juz
    manzil: number;           // Numéro du Manzil
    page: number;             // Page dans le Coran
    ruku: number;             // Numéro du Ruku
    hizbQuarter: number;      // Numéro du Hizb quarter
    sajda: boolean;           // Indique s'il y a une sajda dans ce verset
};

export type Surah = {
    number: number;                  // Numéro de la sourate
    name: string;                    // Nom de la sourate en arabe
    englishName: string;             // Nom de la sourate en anglais
    englishNameTranslation: string;  // Traduction du nom de la sourate
    revelationType: string;          // Type de révélation (Mecque/Médine)
    ayahs: Ayah[];                   // Tableau des versets (Ayah)
};

export type CoranResponse = {
    surahs: Surah[];  // Liste des sourates
};

export type CoranResponseWithParams = {
    response: CoranResponse;
};
