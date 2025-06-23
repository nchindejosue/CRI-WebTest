import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Header
      "features": "Features",
      "community": "Community",
      "leadership": "Leadership",
      "faq": "FAQ",
      "connect": "Connect",
      
      // Hero Section
      "hero.title": "Your daily source of",
      "hero.inspiration": "inspiration",
      "hero.and_community": "and community",
      "hero.subtitle": "The official app for the CRI community. Stay connected, listen to inspiring teachings, and get updates on all our events, right in your pocket.",
      "hero.get_on_playstore": "Get on Play Store",
      "hero.download_apk": "Download APK",
      "hero.notify_ios": "Notify Me on iOS",
      "hero.free_download": "Free to download. Join our community today.",
      
      // Value Proposition
      "value.title": "Why Choose CRI-App?",
      "value.subtitle": "Designed with your spiritual growth and community connection in mind",
      "value.stay_connected": "Stay Connected",
      "value.stay_connected_desc": "Never miss important updates from your community. Get real-time notifications about events, announcements, and fellowship opportunities.",
      "value.inspiration_demand": "Inspiration On-Demand",
      "value.inspiration_demand_desc": "Access a rich library of sermons, teachings, and daily devotionals. Listen anytime, anywhere, and grow in your faith journey.",
      "value.share_story": "Share Your Story",
      "value.share_story_desc": "Connect with fellow community members, share prayer requests, and celebrate testimonies together in a safe, welcoming space.",
      
      // Features
      "features.title": "Powerful Features for Your Faith Journey",
      "features.subtitle": "Everything you need to stay connected and grow spiritually",
      "features.library_title": "A Library of Teachings at Your Fingertips",
      "features.library_desc": "Access hundreds of sermons, Bible studies, and inspirational messages. Download for offline listening and never miss a moment of spiritual growth.",
      "features.daily_title": "Start Your Day with Intention",
      "features.daily_desc": "Begin each morning with carefully curated daily devotionals, scripture readings, and reflection questions designed to center your heart and mind.",
      "features.events_title": "Never Miss a Moment",
      "features.events_desc": "Stay updated with all community events, special services, and fellowship opportunities. Set reminders and invite friends to join you.",
      "learn_more": "Learn More",
      
      // Social Proof
      "social.title": "From Our Community",
      "social.quote": "The CRI-App has transformed my daily spiritual routine. Having access to teachings and staying connected with my community has brought so much peace and growth to my life. It's like having a spiritual companion in my pocket.",
      "social.author": "Sarah M.",
      "social.member_since": "Community Member since 2022",
      
      // Leadership
      "leadership.title": "Meet the Leadership",
      "leadership.subtitle": "Dedicated servants committed to fostering spiritual growth and community connection",
      
      // Community
      "community.title": "Join Our Thriving Community",
      "community.subtitle": "Connect with thousands of believers worldwide through our various platforms",
      "community.telegram": "Join Telegram",
      "community.whatsapp": "Join WhatsApp",
      "community.facebook": "Follow Facebook",
      "community.youtube": "Subscribe YouTube",
      "community.members": "Active Members",
      "community.countries": "Countries",
      "community.languages": "Languages",
      
      // Inclusivity
      "inclusivity.title": "Built for Everyone",
      "inclusivity.subtitle": "Our commitment to accessibility and inclusion ensures everyone can participate",
      "inclusivity.accessibility": "Built for Everyone",
      "inclusivity.accessibility_desc": "We are committed to creating a digital experience accessible to all, including those with visual or motor impairments, through high-contrast design and screen reader compatibility.",
      "inclusivity.languages": "Speaking Your Language",
      "inclusivity.languages_desc": "Our community is global. Experience the app in multiple languages, with more on the way.",
      
      // FAQ
      "faq.title": "Frequently Asked Questions",
      "faq.subtitle": "Everything you need to know about the CRI-App",
      
      // Ways to Connect
      "connect.title": "Join Us In Person and Online",
      "connect.subtitle": "While our app keeps you connected digitally, we'd love to meet you in person too",
      "connect.attend": "Attend a Gathering",
      "connect.attend_desc": "Join us for weekly services and special events in your area.",
      "connect.view_locations": "View Locations & Times",
      "connect.small_group": "Join a Small Group",
      "connect.small_group_desc": "Connect with others in intimate fellowship and Bible study.",
      "connect.find_group": "Find a Group",
      "connect.volunteer": "Volunteer With Us",
      "connect.volunteer_desc": "Make a difference by serving in our community outreach programs.",
      "connect.learn_volunteering": "Learn About Volunteering",
      "connect.contact_info": "Contact Information",
      "connect.phone": "Phone",
      "connect.email": "Email",
      "connect.address": "Address",
      
      // Final CTA
      "final_cta.title": "Ready to begin your journey?",
      "final_cta.subtitle": "Join thousands of community members who have already transformed their spiritual life with CRI-App",
      
      // Footer
      "footer.description": "Connecting hearts, inspiring minds, and building community through technology. Join us on this journey of faith and fellowship.",
      "footer.quick_links": "Quick Links",
      "footer.about_us": "About Us",
      "footer.support": "Support",
      "footer.contact": "Contact",
      "footer.follow_us": "Follow Us",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Service",
      "footer.rights": "Centre de Restauration et d'Impact. All rights reserved.",
      
      // Modals
      "modal.playstore_title": "Get CRI-App",
      "modal.playstore_subtitle": "Choose your preferred download method",
      "modal.notify_playstore": "Notify me when available on Play Store",
      "modal.download_apk": "Download APK directly",
      "modal.email_placeholder": "Enter your email address",
      "modal.notify_me": "Notify Me",
      "modal.download": "Download",
      "modal.success_title": "You're on the list!",
      "modal.success_message": "We'll notify you as soon as CRI-App is available. Thank you for your patience!",
      "modal.close": "Close",
      
      // iOS Modal
      "ios_modal.title": "Coming Soon to the App Store!",
      "ios_modal.subtitle": "Be the first to know when CRI-App launches on iOS. We'll send you a notification as soon as it's available.",
      
      // Language Toggle
      "language.english": "English",
      "language.french": "Français"
    }
  },
  fr: {
    translation: {
      // Header
      "features": "Fonctionnalités",
      "community": "Communauté",
      "leadership": "Direction",
      "faq": "FAQ",
      "connect": "Connecter",
      
      // Hero Section
      "hero.title": "Votre source quotidienne d'",
      "hero.inspiration": "inspiration",
      "hero.and_community": "et de communauté",
      "hero.subtitle": "L'application officielle de la communauté CRI. Restez connecté, écoutez des enseignements inspirants et recevez des mises à jour sur tous nos événements, directement dans votre poche.",
      "hero.get_on_playstore": "Obtenir sur Play Store",
      "hero.download_apk": "Télécharger APK",
      "hero.notify_ios": "Me notifier sur iOS",
      "hero.free_download": "Téléchargement gratuit. Rejoignez notre communauté aujourd'hui.",
      
      // Value Proposition
      "value.title": "Pourquoi choisir CRI-App?",
      "value.subtitle": "Conçu en pensant à votre croissance spirituelle et à votre connexion communautaire",
      "value.stay_connected": "Restez Connecté",
      "value.stay_connected_desc": "Ne manquez jamais les mises à jour importantes de votre communauté. Recevez des notifications en temps réel sur les événements, annonces et opportunités de communion.",
      "value.inspiration_demand": "Inspiration à la Demande",
      "value.inspiration_demand_desc": "Accédez à une riche bibliothèque de sermons, d'enseignements et de dévotions quotidiennes. Écoutez à tout moment, n'importe où, et grandissez dans votre parcours de foi.",
      "value.share_story": "Partagez Votre Histoire",
      "value.share_story_desc": "Connectez-vous avec les membres de la communauté, partagez des demandes de prière et célébrez les témoignages ensemble dans un espace sûr et accueillant.",
      
      // Features
      "features.title": "Fonctionnalités Puissantes pour Votre Parcours de Foi",
      "features.subtitle": "Tout ce dont vous avez besoin pour rester connecté et grandir spirituellement",
      "features.library_title": "Une Bibliothèque d'Enseignements à Portée de Main",
      "features.library_desc": "Accédez à des centaines de sermons, d'études bibliques et de messages inspirants. Téléchargez pour une écoute hors ligne et ne manquez jamais un moment de croissance spirituelle.",
      "features.daily_title": "Commencez Votre Journée avec Intention",
      "features.daily_desc": "Commencez chaque matin avec des dévotions quotidiennes soigneusement sélectionnées, des lectures d'Écritures et des questions de réflexion conçues pour centrer votre cœur et votre esprit.",
      "features.events_title": "Ne Manquez Jamais un Moment",
      "features.events_desc": "Restez informé de tous les événements communautaires, services spéciaux et opportunités de communion. Définissez des rappels et invitez des amis à vous rejoindre.",
      "learn_more": "En Savoir Plus",
      
      // Social Proof
      "social.title": "De Notre Communauté",
      "social.quote": "L'application CRI a transformé ma routine spirituelle quotidienne. Avoir accès aux enseignements et rester connecté avec ma communauté a apporté tant de paix et de croissance à ma vie. C'est comme avoir un compagnon spirituel dans ma poche.",
      "social.author": "Sarah M.",
      "social.member_since": "Membre de la communauté depuis 2022",
      
      // Leadership
      "leadership.title": "Rencontrez la Direction",
      "leadership.subtitle": "Serviteurs dévoués engagés à favoriser la croissance spirituelle et la connexion communautaire",
      
      // Community
      "community.title": "Rejoignez Notre Communauté Florissante",
      "community.subtitle": "Connectez-vous avec des milliers de croyants dans le monde entier à travers nos diverses plateformes",
      "community.telegram": "Rejoindre Telegram",
      "community.whatsapp": "Rejoindre WhatsApp",
      "community.facebook": "Suivre Facebook",
      "community.youtube": "S'abonner YouTube",
      "community.members": "Membres Actifs",
      "community.countries": "Pays",
      "community.languages": "Langues",
      
      // Inclusivity
      "inclusivity.title": "Conçu pour Tous",
      "inclusivity.subtitle": "Notre engagement envers l'accessibilité et l'inclusion garantit que chacun peut participer",
      "inclusivity.accessibility": "Conçu pour Tous",
      "inclusivity.accessibility_desc": "Nous nous engageons à créer une expérience numérique accessible à tous, y compris ceux ayant des déficiences visuelles ou motrices, grâce à un design à contraste élevé et une compatibilité avec les lecteurs d'écran.",
      "inclusivity.languages": "Parlant Votre Langue",
      "inclusivity.languages_desc": "Notre communauté est mondiale. Découvrez l'application en plusieurs langues, avec d'autres à venir.",
      
      // FAQ
      "faq.title": "Questions Fréquemment Posées",
      "faq.subtitle": "Tout ce que vous devez savoir sur CRI-App",
      
      // Ways to Connect
      "connect.title": "Rejoignez-nous en Personne et en Ligne",
      "connect.subtitle": "Bien que notre application vous garde connecté numériquement, nous aimerions aussi vous rencontrer en personne",
      "connect.attend": "Assister à un Rassemblement",
      "connect.attend_desc": "Rejoignez-nous pour les services hebdomadaires et les événements spéciaux dans votre région.",
      "connect.view_locations": "Voir les Lieux et Horaires",
      "connect.small_group": "Rejoindre un Petit Groupe",
      "connect.small_group_desc": "Connectez-vous avec d'autres dans une communion intime et une étude biblique.",
      "connect.find_group": "Trouver un Groupe",
      "connect.volunteer": "Faire du Bénévolat avec Nous",
      "connect.volunteer_desc": "Faites la différence en servant dans nos programmes de sensibilisation communautaire.",
      "connect.learn_volunteering": "En Savoir Plus sur le Bénévolat",
      "connect.contact_info": "Informations de Contact",
      "connect.phone": "Téléphone",
      "connect.email": "Email",
      "connect.address": "Adresse",
      
      // Final CTA
      "final_cta.title": "Prêt à commencer votre voyage?",
      "final_cta.subtitle": "Rejoignez des milliers de membres de la communauté qui ont déjà transformé leur vie spirituelle avec CRI-App",
      
      // Footer
      "footer.description": "Connecter les cœurs, inspirer les esprits et construire une communauté grâce à la technologie. Rejoignez-nous dans ce voyage de foi et de communion.",
      "footer.quick_links": "Liens Rapides",
      "footer.about_us": "À Propos",
      "footer.support": "Support",
      "footer.contact": "Contact",
      "footer.follow_us": "Suivez-nous",
      "footer.privacy": "Politique de Confidentialité",
      "footer.terms": "Conditions d'Utilisation",
      "footer.rights": "Centre de Restauration et d'Impact. Tous droits réservés.",
      
      // Modals
      "modal.playstore_title": "Obtenir CRI-App",
      "modal.playstore_subtitle": "Choisissez votre méthode de téléchargement préférée",
      "modal.notify_playstore": "Me notifier quand disponible sur Play Store",
      "modal.download_apk": "Télécharger APK directement",
      "modal.email_placeholder": "Entrez votre adresse email",
      "modal.notify_me": "Me Notifier",
      "modal.download": "Télécharger",
      "modal.success_title": "Vous êtes sur la liste!",
      "modal.success_message": "Nous vous notifierons dès que CRI-App sera disponible. Merci pour votre patience!",
      "modal.close": "Fermer",
      
      // iOS Modal
      "ios_modal.title": "Bientôt sur l'App Store!",
      "ios_modal.subtitle": "Soyez le premier à savoir quand CRI-App sera lancé sur iOS. Nous vous enverrons une notification dès qu'il sera disponible.",
      
      // Language Toggle
      "language.english": "English",
      "language.french": "Français"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;