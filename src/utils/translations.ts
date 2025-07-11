// Local translation dictionary - English to Arabic
export const translations: Record<string, string> = {
  // Navigation and main content
  "THE OTHER SIDE": "الجانب الآخر",
  "Home": "الرئيسية",
  "Book": "الكتاب",
  "العربية": "English",
  
  // Hero section
  "Where shadows dance with light, and fallen angels find their way through the darkest of nights.": "حيث ترقص الظلال مع النور، وتجد الملائكة الساقطة طريقها عبر أحلك الليالي.",
  "Enter the Other Side": "ادخل إلى الجانب الآخر",
  "Discover More": "اكتشف المزيد",
  
  // Features section
  "Explore the Depths": "استكشف الأعماق",
  "Fallen Angels": "الملائكة الساقطة",
  "Witness the stories of those who fell from grace, seeking redemption in the shadows.": "اشهد قصص أولئك الذين سقطوا من النعمة، يبحثون عن الخلاص في الظلال.",
  "Starlit Voids": "الفراغات المضيئة بالنجوم",
  "Journey through cosmic landscapes where darkness meets the infinite expanse of space.": "رحلة عبر المناظر الطبيعية الكونية حيث تلتقي الظلمة مع امتداد الفضاء اللانهائي.",
  "Wings of Sorrow": "أجنحة الحزن",
  "Discover the beauty in melancholy and find solace in the embrace of shadows.": "اكتشف الجمال في الكآبة وجد العزاء في عناق الظلال.",
  
  // Book page content
  "The Chronicles of Fallen Angels": "سجلات الملائكة الساقطة",
  "A haunting tale of redemption, love, and the eternal struggle between light and darkness.": "حكاية مؤثرة عن الخلاص والحب والصراع الأبدي بين النور والظلمة.",
  "In the depths of a realm where shadows reign supreme, fallen angels seek their path to redemption. This epic tale weaves through cosmic landscapes and ethereal dimensions, exploring themes of sacrifice, hope, and the enduring power of love even in the darkest of times.": "في أعماق عالم تحكمه الظلال، تبحث الملائكة الساقطة عن طريقها إلى الخلاص. تنسج هذه الحكاية الملحمية عبر المناظر الطبيعية الكونية والأبعاد الأثيرية، مستكشفة موضوعات التضحية والأمل والقوة الدائمة للحب حتى في أحلك الأوقات.",
  "Join the fallen on their journey through starlit voids and mystical sanctuaries as they discover that sometimes, the greatest light comes from embracing one's darkest shadows.": "انضم إلى الساقطين في رحلتهم عبر الفراغات المضيئة بالنجوم والملاذات الصوفية وهم يكتشفون أن أعظم نور يأتي أحياناً من احتضان أحلك ظلالهم.",
  "Read Now": "اقرأ الآن",
  "Download": "تحميل",
  "Share": "مشاركة",
  
  // Chapter previews
  "Chapter Previews": "معاينات الفصول",
  "Chapter 1: The Fall": "الفصل الأول: السقوط",
  "The beginning of the end, where grace meets despair...": "بداية النهاية، حيث تلتقي النعمة باليأس...",
  "Chapter 2: Wandering Souls": "الفصل الثاني: الأرواح التائهة",
  "Lost in the void, seeking purpose in darkness...": "ضائعة في الفراغ، تبحث عن هدف في الظلمة...",
  "Chapter 3: The Sanctuary": "الفصل الثالث: الملاذ",
  "A haven discovered in the most unlikely of places...": "ملاذ اكتُشف في أكثر الأماكن غير المتوقعة...",
  
  // Meta content
  "Author": "المؤلف",
  "Pages": "الصفحات",
  "Language": "اللغة",
  "English": "الإنجليزية",
  "Arabic": "العربية",
  "Genre": "النوع",
  "Dark Fantasy": "الخيال المظلم",
  "Publication": "النشر",
  "2024": "2024",
  
  // Toast messages
  "Translation Complete": "اكتمل الترجمة",
  "Page content has been translated to Arabic.": "تم ترجمة محتوى الصفحة إلى العربية.",
  "Translation Failed": "فشل الترجمة",
  "Unable to translate the page. Please try again.": "غير قادر على ترجمة الصفحة. يرجى المحاولة مرة أخرى.",
  "Translation Reset": "إعادة تعيين الترجمة",
  "Page content has been restored to English.": "تم استعادة محتوى الصفحة إلى الإنجليزية."
};

// Function to translate text using local dictionary
export const translateText = (text: string): string => {
  // First try exact match
  if (translations[text]) {
    return translations[text];
  }
  
  // If no exact match, try to find partial matches for longer texts
  const trimmedText = text.trim();
  if (translations[trimmedText]) {
    return translations[trimmedText];
  }
  
  // Return original text if no translation found
  return text;
};

// Function to get reverse translation (Arabic to English)
export const reverseTranslateText = (text: string): string => {
  // Create reverse mapping
  const reverseTranslations = Object.fromEntries(
    Object.entries(translations).map(([key, value]) => [value, key])
  );
  
  return reverseTranslations[text] || text;
};