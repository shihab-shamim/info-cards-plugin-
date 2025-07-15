<?php
/**
 * Plugin Name:       Info Cards
 * Description:       Create beautiful cards with text and image.
 * Requires at least: 5.8
 * Requires PHP:      7.1
 * Version:           1.0.11
 * Author:            bPlugins
 * Author URI:        http://bplugins.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       info-cards
 */

if ( !defined( 'ABSPATH' ) ) { exit; }



class BPICB_Info_Cards{
    private static $instance;

    private function __construct()
    {
        $this->constants_define();
        add_action( 'init', [$this, 'onInit'] );
        add_action('enqueue_block_assets', [$this,'load_unicorn_studio_script']);
    }

    public static function get_instance(){
        if( self::$instance ){
            return self::$instance;
        }

        self::$instance = new self();
        return self::$instance;
    }

    private function constants_define() {
        // Constant
        define( 'ICB_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.11' );
        define( 'ICB_DIR', plugin_dir_url( __FILE__ ) );
    }

    public function onInit(){
        register_block_type( __DIR__ . '/build' );
    }
    function load_unicorn_studio_script() {
			 wp_enqueue_script(
        'unicorn-studio',
        'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.25/dist/unicornStudio.umd.js',
        array(), 
        '1.4.25',     
        true     
    );
		}

}
BPICB_Info_Cards::get_instance();


