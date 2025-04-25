function toPersianDigits(str) {
    return str.replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]);
}
export function formatTomanFa(num) {
    if (!num) return "۰ تومان";
    const formatted = num
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${toPersianDigits(formatted)} تومان`;
}

export function applyDiscount(price, discountPercent) {
    if (!price || !discountPercent) return price;
    const discountAmount = (price * discountPercent) / 100;
    return Math.round(price - discountAmount);
}

export function getColorCode(farsiColor, shade = 500) {
    const colorMap = {
        "قرمز": "bg-red-500",
        "آبی": "bg-blue-500",
        "سبز": "bg-green-500",
        "زرد": "bg-yellow-500",
        "نارنجی": "bg-orange-500",
        "صورتی": "bg-pink-500",
        "بنفش": "bg-purple-500",
        "مشکی": "bg-black",
        "سفید": "bg-white",
        "خاکستری": "bg-gray-500",
        "قهوه‌ای": "bg-amber-500",
        "طلایی": "bg-yellow-300",
        "نقره‌ای": "bg-gray-300",
        'تایتانیوم': 'bg-black/50'
    };



    return {
        title: farsiColor,
        color: colorMap[farsiColor.trim()]
    }
}


