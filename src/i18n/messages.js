import {LOCALES } from './locales';

export const messages = {
  [LOCALES.ENGLISH]: {
    learn_to: "Hello, let's learn how to use React-Intl",
    price_display:
      "How {n, number, ::currency/USD} is displayed in your selected language",
    number_display:
      "This is how {n, number} is formatted in the selected locale",
    start_today: "Start Today: {d, date}",
    about_project: "About the project",
    contact_us: "Contact us",
  },
  [LOCALES.TAMIL]: {
    learn_to: "வணக்கம், React-Intl ஐ எவ்வாறு பயன்படுத்துவது என்பதைக் கற்றுக்கொள்வோம்",
    price_display:
      "நீங்கள் தேர்ந்தெடுத்த மொழியில் எண் எவ்வாறு காட்டப்படும் {n, number, ::currency/USD}",
    number_display:
      "தேர்ந்தெடுக்கப்பட்ட இடத்தில் எண் இப்படித்தான் வடிவமைக்கப்படுகிறது: {n, number}",
    start_today: "இன்றே தொடங்குங்கள்: {d, date}",
    about_project: "திட்டம் பற்றி",
    contact_us: "எங்களை தொடர்பு கொள்ள",
  },
};