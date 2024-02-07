import React from 'react';
import { useRecoilValue } from 'recoil';

import { Headline } from '@neos-project/react-ui-components';

import { useIntl } from '@media-ui/core';
import { IconLabel } from '@media-ui/core/src/components';
import { AssetUsagesToggleButton } from '@media-ui/feature-asset-usage/src/index';
import { SimilarAssetsToggleButton } from '@media-ui/feature-similar-assets';
import { AssetReplacementButton } from '@media-ui/feature-asset-upload/src/components';
import { OpenAssetEditDialogButton } from '@media-ui/feature-asset-editing';
import { useSelectedAsset } from '@media-ui/core/src/hooks';
import { applicationContextState, featureFlagsState } from '@media-ui/core/src/state';

import DownloadAssetButton from '../../Actions/DownloadAssetButton';
import DeleteAssetButton from '../../Actions/DeleteAssetButton';

import classes from './Tasks.module.css';

const Tasks: React.FC = () => {
    const { translate } = useIntl();
    const selectedAsset = useSelectedAsset();
    const applicationContext = useRecoilValue(applicationContextState);
    const { showSimilarAssets } = useRecoilValue(featureFlagsState);

    if (!selectedAsset) return null;

    return (
        <div className={classes.tasks}>
            <Headline type="h2">
                <IconLabel icon="tasks" label={translate('inspector.actions', 'Tasks')} />
            </Headline>
            <div className={classes.buttonWrapper}>
                <AssetUsagesToggleButton />
                {showSimilarAssets && <SimilarAssetsToggleButton />}
                <DownloadAssetButton asset={selectedAsset} style="lighter" />
                {!selectedAsset.assetSource.readOnly && applicationContext !== 'details' && (
                    <>
                        <OpenAssetEditDialogButton />
                        <AssetReplacementButton />
                    </>
                )}
                <DeleteAssetButton asset={selectedAsset} style="lighter" />
            </div>
        </div>
    );
};

export default React.memo(Tasks);
