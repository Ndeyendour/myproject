$(document).ready(function() {
    // Initialiser en français
    var currentLang = 'fr';
    $('.nav-link[data-lang="en"]').hide(); // Cacher les liens en anglais initialement
    $('.nav-link[data-lang="fr"]').show(); // Montrer les liens en français initialement
    
    // Gestion du changement de langue
    $('.lang-switcher').on('click', function(e) {
        e.preventDefault();
        var lang = $(this).data('lang');

        if (lang === currentLang) {
            return; // Si la langue est déjà active, ne rien faire
        }

        currentLang = lang;

        // Mettre à jour l'icône de langue actuelle
        var newFlagSrc = $(this).find('img').attr('src');
        $('#currentLangFlag').attr('src', newFlagSrc);

        // Masquer tous les éléments de langue
        $('.nav-link[data-lang="en"], .nav-link[data-lang="fr"]').hide();

        // Afficher les éléments de la langue sélectionnée
        $('.nav-link[data-lang="' + lang + '"]').show();
    });

    // Toggle dropdown visibility
    $('.btn-selector').on('click', function(e) {
        e.preventDefault();
        $('#dropdown-content').toggleClass('show');
    });

    // Close the dropdown if the user clicks outside of it
    $(window).on('click', function(e) {
        if (!$(e.target).closest('#lang-selector').length) {
            $('#dropdown-content').removeClass('show');
        }
    });
});
