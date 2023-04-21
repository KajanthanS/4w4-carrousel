<?php
/** 
* Plugin name: Carrousel Kajanthan
* Author: Kajanthan Seevarathinam
* Author URI: https://github.com/KajanthanS
* Version: 1.0.0
* Description: Cette extension carrousel permettra d'afficher dans une boîte modale animée les images d'une galerie.
*/ 


function mon_enqueue_css_js(){
    $version_css = filemtime(plugin_dir_path( __FILE__ ) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");


    wp_enqueue_style('em_plugin_carrousel_css',
                     plugin_dir_url(__FILE__) . "style.css",
                     array(),
                     $version_css);

    wp_enqueue_script('em_plugin_carrousel_js',
                    plugin_dir_url(__FILE__) ."js/carrousel.js",
                    array(),
                    $version_js,
                    true);
}

add_action('wp_enqueue_scripts', 'mon_enqueue_css_js');

function creation_carrousel(){
    return("<button class='carrousel_ouvrir'> Ouvrir le carrousel</button>
    <div class='carrousel'>
    <button class='carrousel__x'>X</button>
    <figure class='carrousel__figure'></figure>
    <form class='carrousel__form'></form>
    </div> 
    
    ");
}

add_shortcode('carrousel', 'creation_carrousel');