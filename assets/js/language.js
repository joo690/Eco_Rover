/**
 * Language Toggle System for Eco Rover
 */

(function() {
  "use strict";

  // Language data
  const translations = {
    en: {
      // Navigation
      home: "Home",
      parteElettronica: "Electronic Part",
      parteMeccanica: "Mechanical Part",
      parteInformatica: "IT Part",
      
      // Homepage
      welcomeTitle: "Welcome to Eco Rover",
      welcomeSubtitle: "An autonomous robot designed to collect plastic, cans, and organic waste from streets and closed environments",
      elettronicaTitle: "Electronic Part",
      elettronicaDesc: "Electronic components and circuits that power Eco Rover's waste detection and collection systems",
      meccanicaTitle: "Mechanical Part",
      meccanicaDesc: "Mechanical assemblies and components that enable Eco Rover's movement and waste collection mechanisms",
      informaticaTitle: "IT Part",
      informaticaDesc: "Software and programming systems that control Eco Rover's autonomous navigation and waste recognition",
      viewModels: "View Components",
      
      // Parte Elettronica
      elettronicaHeader: "Electronic Part",
      elettronicaSubtitle: "Electronic Components & Circuit Design",
      elettronicaDesc: "Explore the electronic systems that power Eco Rover's sensors, processors, and waste detection capabilities",
      backHome: "Back to Home",
      
      // Parte Meccanica
      meccanicaHeader: "Mechanical Part",
      meccanicaSubtitle: "Mechanical Design & Engineering",
      meccanicaDesc: "Discover the mechanical systems that enable Eco Rover's movement, collection mechanisms, and structural components",
      roboticArm: "3D Robotic Arm",
      wheel: "Wheel",
      model3d: "3D Model",
      roboticArm2: "Robotic Arm 2",
      
      // Parte Informatica
      informaticaHeader: "IT Part",
      informaticaSubtitle: "Programming & Software Architecture",
      informaticaDesc: "Browse the software systems that control Eco Rover's autonomous navigation, waste recognition, and collection algorithms",
      dashboard: "Industrial Robots Performance Tracking Dashboard",
      architecture: "System Architecture",
      robotCode: "Robot Code Implementation",
      softwareInterface: "Software Interface",
      
      // Footer
      footerDesc: "Eco Rover - Autonomous waste collection robot for streets and closed environments",
      copyright: "Copyright",
      allRights: "All Rights Reserved"
    },
    it: {
      // Navigation
      home: "Home",
      parteElettronica: "Parte Elettronica",
      parteMeccanica: "Parte Meccanica",
      parteInformatica: "Parte Informatica",
      
      // Homepage
      welcomeTitle: "Benvenuto in Eco Rover",
      welcomeSubtitle: "Un robot autonomo progettato per raccogliere plastica, lattine e rifiuti organici da strade e ambienti chiusi",
      elettronicaTitle: "Parte Elettronica",
      elettronicaDesc: "Componenti elettronici e circuiti che alimentano i sistemi di rilevamento e raccolta rifiuti di Eco Rover",
      meccanicaTitle: "Parte Meccanica",
      meccanicaDesc: "Assemblaggi e componenti meccanici che consentono i meccanismi di movimento e raccolta rifiuti di Eco Rover",
      informaticaTitle: "Parte Informatica",
      informaticaDesc: "Sistemi software e di programmazione che controllano la navigazione autonoma e il riconoscimento rifiuti di Eco Rover",
      viewModels: "Visualizza Componenti",
      
      // Parte Elettronica
      elettronicaHeader: "Parte Elettronica",
      elettronicaSubtitle: "Componenti Elettronici & Progettazione Circuiti",
      elettronicaDesc: "Esplora i sistemi elettronici che alimentano sensori, processori e capacità di rilevamento rifiuti di Eco Rover",
      backHome: "Torna alla Home",
      
      // Parte Meccanica
      meccanicaHeader: "Parte Meccanica",
      meccanicaSubtitle: "Progettazione Meccanica & Ingegneria",
      meccanicaDesc: "Scopri i sistemi meccanici che consentono il movimento, i meccanismi di raccolta e i componenti strutturali di Eco Rover",
      roboticArm: "Braccio Robotico 3D",
      wheel: "Ruota",
      model3d: "Modello 3D",
      roboticArm2: "Braccio Robotico 2",
      
      // Parte Informatica
      informaticaHeader: "Parte Informatica",
      informaticaSubtitle: "Programmazione & Architettura Software",
      informaticaDesc: "Sfoglia i sistemi software che controllano la navigazione autonoma, il riconoscimento rifiuti e gli algoritmi di raccolta di Eco Rover",
      dashboard: "Dashboard Monitoraggio Prestazioni Robot Industriali",
      architecture: "Architettura Sistema",
      robotCode: "Implementazione Codice Robot",
      softwareInterface: "Interfaccia Software",
      
      // Footer
      footerDesc: "Eco Rover - Robot autonomo per la raccolta rifiuti da strade e ambienti chiusi",
      copyright: "Copyright",
      allRights: "Tutti i Diritti Riservati"
    }
  };

  // Get current language from localStorage or default to English
  let currentLang = localStorage.getItem('ecoRoverLang') || 'en';

  // Function to update all text content
  function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ecoRoverLang', lang);
    const t = translations[lang];

    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (t[key]) {
        if (element.tagName === 'INPUT' && element.type === 'button') {
          element.value = t[key];
        } else {
          element.textContent = t[key];
        }
      }
    });

    // Update elements with data-i18n-html for HTML content
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
      const key = element.getAttribute('data-i18n-html');
      if (t[key]) {
        element.innerHTML = t[key];
      }
    });

    // Update language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.textContent = lang === 'en' ? 'IT' : 'EN';
      langToggle.setAttribute('data-lang', lang === 'en' ? 'it' : 'en');
    }

    // Update document title
    const page = window.location.pathname.split('/').pop() || 'index.html';
    if (page === 'index.html' || page === '') {
      document.title = lang === 'en' ? 'Eco Rover - Home' : 'Eco Rover - Home';
    } else if (page.includes('elettronica')) {
      document.title = lang === 'en' ? 'Electronic Part - Eco Rover' : 'Parte Elettronica - Eco Rover';
    } else if (page.includes('meccanica')) {
      document.title = lang === 'en' ? 'Mechanical Part - Eco Rover' : 'Parte Meccanica - Eco Rover';
    } else if (page.includes('informatica')) {
      document.title = lang === 'en' ? 'IT Part - Eco Rover' : 'Parte Informatica - Eco Rover';
    }
  }

  // Initialize language on page load
  function initLanguage() {
    updateLanguage(currentLang);
  }

  // Language toggle handler
  function setupLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.addEventListener('click', function() {
        const newLang = this.getAttribute('data-lang');
        updateLanguage(newLang);
      });
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initLanguage();
      setupLanguageToggle();
    });
  } else {
    initLanguage();
    setupLanguageToggle();
  }

  // Export for global access
  window.EcoRoverLang = {
    getCurrentLang: () => currentLang,
    updateLanguage: updateLanguage,
    translations: translations
  };

})();

