import { useQuery } from '@apollo/client';

import { ASSET_COLLECTIONS_RESTRICTED } from '../queries/assetCollectionsRestricted';

interface AssetCollectionsRestrictedQueryResult {
    assetCollectionsRestricted: AssetCollection[];
}

export default function useAssetCollectionsRestrictedQuery() {
    const { data, loading } = useQuery<AssetCollectionsRestrictedQueryResult>(ASSET_COLLECTIONS_RESTRICTED);
    return { assetCollectionsRestricted: data?.assetCollectionsRestricted || [], loading };
}
