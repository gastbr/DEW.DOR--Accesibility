$(document).ready(function () {
    // Accessibility Controls
    let fontSize = 16;
    let isHighContrast = false;
    let isScreenReaderEnabled = false;

    // Screen Reader Function
    function speak(text) {
        if ('speechSynthesis' in window && isScreenReaderEnabled) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        }
    }

    // Font Size Control
    $('#increaseFontSize').click(function () {
        fontSize = (fontSize === 24) ? 16 : (fontSize + 2);
        $('body').css('font-size', fontSize + 'px');
        speak('Font size increased');
    });

    // High Contrast Toggle
    $('#toggleContrast').click(function () {
        isHighContrast = !isHighContrast;
        $('body').toggleClass('high-contrast');
        $('.card-body').toggleClass('high-contrast');
        speak(isHighContrast ? 'High contrast mode enabled' : 'High contrast mode disabled');
    });

    // Screen Reader Toggle
    $('#toggleReader').click(function () {
        isScreenReaderEnabled = !isScreenReaderEnabled;
        speak(isScreenReaderEnabled ? 'Screen reader enabled' : 'Screen reader disabled');
    });

    // Media Player Controls
    const video = $('#mainVideo')[0];
    const progressBar = $('.progress-fill');

    $('#playPause').click(function () {
        if (video.paused) {
            video.play();
            $(this).find('i').removeClass('fa-play').addClass('fa-pause');
            speak('Video playing');
        } else {
            video.pause();
            $(this).find('i').removeClass('fa-pause').addClass('fa-play');
            speak('Video paused');
        }
    });

    $('#toggleMute').click(function () {
        video.muted = !video.muted;
        $(this).find('i')
            .toggleClass('fa-volume-up fa-volume-mute');
        speak(video.muted ? 'Audio muted' : 'Audio unmuted');
    });

    // Update progress bar
    video.addEventListener('timeupdate', function () {
        const percentage = (video.currentTime / video.duration) * 100;
        progressBar.css('width', percentage + '%');
    });

    // Navigation Announcements
    $('a').focus(function () {
        speak($(this).text());
    });

    // Keyboard Navigation
    $(document).keydown(function (e) {
        // Press '/' to focus search
        if (e.key === '/' && !$(e.target).is('input, textarea')) {
            e.preventDefault();
            $('#searchInput').focus();
        }

        // Press 'Esc' to close modals
        if (e.key === 'Escape') {
            $('.modal').modal('hide');
        }
    });

    // ARIA Live Regions for Dynamic Content
    $('body').append('<div id="announcer" class="sr-only" aria-live="polite"></div>');

    function announce(message) {
        $('#announcer').text(message);
    }

    // Initialize tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();

    // Form Validation with Accessibility
    $('form').on('submit', function (e) {
        const $form = $(this);
        if (!$form[0].checkValidity()) {
            e.preventDefault();
            e.stopPropagation();

            // Announce form errors
            const errorCount = $form.find(':invalid').length;
            announce(`Form has ${errorCount} errors. Please check your input.`);
        }
        $form.addClass('was-validated');
    });
});
