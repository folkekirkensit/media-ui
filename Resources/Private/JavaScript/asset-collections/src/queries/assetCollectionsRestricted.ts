import { gql } from '@apollo/client';

import { ASSET_COLLECTION_FRAGMENT } from '../fragments/assetCollection';

export const ASSET_COLLECTIONS_RESTRICTED = gql`
    query ASSET_COLLECTIONS_RESTRICTED {
        assetCollectionsRestricted {
            ...AssetCollectionProps
        }
    }
    ${ASSET_COLLECTION_FRAGMENT}
`;
