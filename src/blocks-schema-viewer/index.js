/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { TextareaControl, Modal, Button } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';
import { useState } from '@wordpress/element';

// https://github.com/alenaksu/json-viewer
import '@alenaksu/json-viewer';

/**
 * Internal dependencies
 */
import './editor.scss';

if ( document.querySelector( '#editor' ) ) {
	const BlocksSchemaViewer = () => {
		const [ isModalOpen, setIsModalOpen ] = useState( false );

		// Retrieve all blocks on the page.
		const blocks = useSelect(
			( select ) => select( 'core/block-editor' ).getBlocks(),
			[]
		);

		const blocksJSON = JSON.stringify( blocks, null, 2 );

		return (
			<PluginDocumentSettingPanel
				name="blocks-schema-viewer"
				className="blocks-schema-viewer"
				icon="networking"
				title={ __( 'Blocks Schema', 'blocks-schema-viewer' ) }
			>
				<Button
					variant="secondary"
					className="blocks-schema-viewer__button"
					onClick={ () => setIsModalOpen( true ) }
				>
					{ __( 'View in Modal', 'blocks-schema-viewer' ) }
				</Button>
				<TextareaControl
					label={ __( 'Blocks Schema', 'blocks-schema-viewer' ) }
					className="blocks-schema-viewer__textarea"
					value={ blocksJSON }
					rows={ 25 }
				/>

				{ isModalOpen && (
					<Modal
						title={ __( 'Blocks Schema', 'blocks-schema-viewer' ) }
						onRequestClose={ () => setIsModalOpen( false ) }
						className="blocks-schema-viewer__modal"
						bodyOpenClassName="blocks-schema-viewer-modal-open"
					>
						<json-viewer>{ blocksJSON }</json-viewer>
					</Modal>
				) }
			</PluginDocumentSettingPanel>
		);
	};

	// Register the plugin.
	registerPlugin( 'blocks-schema-viewer', { render: BlocksSchemaViewer } );
}
