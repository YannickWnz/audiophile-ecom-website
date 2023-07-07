const CURRENY_FORMATTER = new Intl.NumberFormat(undefined, { currency: 'USD', style: 'currency' }); 

export function formatCurrent(currency: number) {
    return CURRENY_FORMATTER.format(currency)
}