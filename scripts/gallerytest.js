jQuery(document).ready(function () {
    jQuery("#nanoGallery").nanoGallery({
        thumbnailWidth: 'auto',
        thumbnailHeight: 100,
        locationHash: false,
        thumbnailHoverEffect:'borderLighter,imageScaleIn80',
        itemsBaseURL:'http://nanogallery.brisbois.fr/demonstration/'
    });
});