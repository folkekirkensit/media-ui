import * as React from 'react';
import Lightbox from 'react-image-lightbox';
import { useRecoilState } from 'recoil';
import 'react-image-lightbox/style.css';

import { createUseMediaUiStyles, useMediaUi, useMediaUiTheme } from '@media-ui/core/src';

import selectedAssetForPreviewState from '../state/selectedAssetForPreviewState';

const useStyles = createUseMediaUiStyles({
    lightbox: {
        '& .ril__image': {
            maxWidth: '100%',
        },
    },
});

export default function AssetPreview() {
    const classes = useStyles();
    const theme = useMediaUiTheme();
    const { containerRef } = useMediaUi();
    const [selectedAssetForPreview, setSelectedAssetForPreview] = useRecoilState(selectedAssetForPreviewState);

    // TODO: Handle pdf fiels with pdf viewer https://github.com/Flowpack/media-ui/issues/29

    if (!selectedAssetForPreview) return null;

    return (
        <Lightbox
            reactModalStyle={{ overlay: { zIndex: theme.lightboxZIndex } }}
            reactModalProps={{ parentSelector: () => containerRef.current }}
            wrapperClassName={classes.lightbox}
            mainSrc={selectedAssetForPreview.previewUrl}
            onCloseRequest={() => setSelectedAssetForPreview(null)}
        />
    );
}