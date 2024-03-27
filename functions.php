<?php

// ==========================================================================
// テーマセットアップ
// ==========================================================================

function original_theme_setup()
{
    add_theme_support('post-thumbnails');
    add_theme_support('automatic-feed-links');
    add_theme_support('title-tag');
    add_theme_support(
        'html5',
        array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
        )
    );
}
add_action('after_setup_theme', 'original_theme_setup');
/**
 * menu
 **/
function original_menu_init()
{
    register_nav_menus(
        array(
            'header' => 'ヘッダーメニュー',
            'footer' => 'フッターメニュー',
        )
    );
}
add_action('init', 'original_menu_init');




// ==========================================================================
// type="text/javascriptをカット
// ==========================================================================
add_action('wp_loaded', 'prefix_output_buffer_start');
function prefix_output_buffer_start()
{
    ob_start("prefix_output_callback");
}

add_action('shutdown', 'prefix_output_buffer_end');
function prefix_output_buffer_end()
{
    ob_end_flush();
}

function prefix_output_callback($buffer)
{
    return preg_replace("%[ ]type=[\'\"]text\/(javascript|css)[\'\"]%", '', $buffer);
}
// ==========================================================================
// crossorigin="anonymous" を付加するフィルターフック
// ==========================================================================
add_filter('script_loader_tag', 'custom_script_loader_tag', 10, 2);

function custom_script_loader_tag($tag, $handle)
{
    if ($handle !== 'jquery') {
        return $tag;
    }

    return str_replace('></script>', 'integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>', $tag);
}

// ==========================================================================
// css&js読込
// ==========================================================================
function original_css_js_init()
{

    // google fonts CSS
    wp_enqueue_style('google_font_style', 'https://fonts.googleapis.com/css2?family=Dosis:wght@300;500&family=Noto+Sans+JP:wght@400;500;700;800&family=Noto+Serif+JP:wght@700&family=Roboto:wght@400;500;700&family=Sawarabi+Mincho&display=swap', array(), null);
    //CSSはこの中に書いてください
    wp_enqueue_style('style', get_template_directory_uri() . '/assets/css/style.css', '', 1.0,);

    //JSはこの中に書いてください
    if (!is_admin()) {
        wp_deregister_script('jquery');
        wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.7.1.min.js', array(), NULL, true);
        wp_enqueue_script('site', get_template_directory_uri() . '/assets/js/site.js', array(), NULL, true);
    }
}
add_action('wp_enqueue_scripts', 'original_css_js_init');

// 投稿にサムネイルを許可
add_theme_support('post-thumbnails');
add_image_size( 'eyecatch', 311, 182, true );