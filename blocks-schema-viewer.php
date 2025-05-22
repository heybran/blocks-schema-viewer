<?php
/**
 * Plugin Name:       Blocks Schema Viewer
 * Description:       Display the JSON representation of all blocks on the current page within the Gutenberg editor for debugging and analysis.
 * Version:           0.3.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Brandon Zhang
 * Author URI:        https://github.com/heybran
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blocks-schema-viewer
 *
 * @package           Blocks Schema Viewer
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define( 'BLOCKS_SCHEMA_VIEWER_VERSION', '0.3.0' );

/**
 * Enqueue JavaScript and CSS files for the plugin.
 *
 * This function enqueues the main JavaScript file for the plugin, which renders the
 * block schema viewer sidebar. It also enqueues the CSS file for the plugin.
 *
 * @since 0.1.0
 */
function blocks_json_viewer_enqueue_assets() {
	wp_enqueue_script(
		'blocks-schema-viewer',
		plugins_url( 'build/blocks-schema-viewer/index.js', __FILE__ ),
		array( 'wp-plugins', 'wp-edit-post', 'wp-components', 'wp-element', 'wp-data', 'wp-i18n' ),
		BLOCKS_SCHEMA_VIEWER_VERSION,
		true
	);

	wp_enqueue_style(
		'blocks-schema-viewer',
		plugins_url( 'build/blocks-schema-viewer/index.css', __FILE__ ),
		array(),
		BLOCKS_SCHEMA_VIEWER_VERSION
	);
}
add_action( 'enqueue_block_editor_assets', 'blocks_json_viewer_enqueue_assets' );
