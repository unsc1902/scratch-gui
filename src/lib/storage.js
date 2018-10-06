import ScratchStorage from 'scratch-storage';

import defaultProjectAssets from './default-project';
import config from '../config.js';

const PROJECT_SERVER = 'https://projects.scratch.mit.edu';
const ASSET_SERVER = 'https://cdn.assets.scratch.mit.edu';

/**
 * Wrapper for ScratchStorage which adds default web sources.
 * @todo make this more configurable
 */
class Storage extends ScratchStorage {
    constructor () {
        super();
        this.addWebSource(
            [this.AssetType.Project],
            projectAsset => {
                const id = window.location.hash.substring(1);
                return `${config.services.lessonService}/${id}/project.json`;
                // const [projectId, revision] = projectAsset.assetId.split('.');
                // return revision ?
                //     `${PROJECT_SERVER}/internalapi/project/${projectId}/get/${revision}` :
                //     `${PROJECT_SERVER}/internalapi/project/${projectId}/get/`;
            }
        );
        this.addWebSource(
            [this.AssetType.ImageVector, this.AssetType.ImageBitmap, this.AssetType.Sound],
            // asset => `${ASSET_SERVER}/internalapi/asset/${asset.assetId}.${asset.dataFormat}/get/`
            asset => `/storage/${asset.assetId}.${asset.dataFormat}`
        );
        this.addWebSource(
            [this.AssetType.Sound],
            asset => `cdn.codingmarch.com/storage/${asset.assetId}.${asset.dataFormat}`
            // asset => `www.codingmarch.com/storage/${asset.assetId}.${asset.dataFormat}`
        );
        defaultProjectAssets.forEach(asset => this.cache(
            this.AssetType[asset.assetType],
            this.DataFormat[asset.dataFormat],
            asset.data,
            asset.id
        ));
    }
}

const storage = new Storage();

export default storage;
