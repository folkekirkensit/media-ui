import { atom } from 'recoil';
import { FeatureFlags } from '../interfaces';

const featureFlagsState = atom<FeatureFlags>({
    key: 'featureFlagsState',
    default: {
        useNewMediaSelection: true,
        queryAssetUsage: false,
        pollForChanges: true,
        showSimilarAssets: false,
        showVariantsEditor: false,
        createAssetRedirectsOption: true,
        pagination: {
            assetsPerPage: 20,
            maximumLinks: 5,
        },
        propertyEditor: {
            collapsed: false,
        },
    },
});

export default featureFlagsState;
