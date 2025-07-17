// تاريخ اللقاء الأول
const firstMeetingDate = new Date('2022-12-01');
const yearsCounter = document.getElementById('years-counter');
const monthsCounter = document.getElementById('months-counter');
const daysCounter = document.getElementById('days-counter');

// حساب الفرق بين التاريخين (سنين، شهور، أيام)
function calculateDifference() {
    const today = new Date();

    let years = today.getFullYear() - firstMeetingDate.getFullYear();
    let months = today.getMonth() - firstMeetingDate.getMonth();
    let days = today.getDate() - firstMeetingDate.getDate();

    // تعديل الشهور إذا كانت سالبة
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    // تعديل الأيام إذا كانت سالبة
    if (days < 0) {
        months -= 1;
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0); // آخر يوم في الشهر السابق
        days += previousMonth.getDate();
    }

    // تحديث العدادات في الصفحة
    yearsCounter.textContent = years;
    monthsCounter.textContent = months;
    daysCounter.textContent = days;
}

// استدعاء الوظيفة عند تحميل الصفحة
calculateDifference();
