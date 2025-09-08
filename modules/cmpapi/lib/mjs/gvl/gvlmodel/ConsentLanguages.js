export class ConsentLanguages {
    static langSet = new Set([
        'AR',
        'BG',
        'BS',
        'CA',
        'CS',
        'CY',
        'DA',
        'DE',
        'EL',
        'EN',
        'ES',
        'ET',
        'EU',
        'FI',
        'FR',
        'GL',
        'HE',
        'HR',
        'HU',
        'ID',
        'IT',
        'JA',
        'KA',
        'KO',
        'LT',
        'LV',
        'MK',
        'MS',
        'MT',
        'NL',
        'NO',
        'PL',
        'PT-BR',
        'PT-PT',
        'RO',
        'RU',
        'SK',
        'SL',
        'SQ',
        'SR-LATN',
        'SR-CYRL',
        'SV',
        'SW',
        'TH',
        'TL',
        'TR',
        'UK',
        'VI',
        'ZH',
    ]);
    has(key) {
        return ConsentLanguages.langSet.has(key);
    }
    forEach(callback) {
        ConsentLanguages.langSet.forEach(callback);
    }
    get size() {
        return ConsentLanguages.langSet.size;
    }
}
