import * as THREE from 'three'
import * as env from '@/utils/env';

// 天空盒时间类型
const skyboxType = {
  day: 'day',
  dusk: 'dusk',
  night: 'night'
}
export default class SkyBoxs {
  constructor(viewer) {
    this.viewer = viewer
  }
  /**
   * 
   * @param {*} type 天空盒类型
   */
  setSkybox(type = skyboxType.day) {
    const loaderbox = new THREE.CubeTextureLoader() // 加载贴图
    const cubeTexture = loaderbox.load([
      env.getPath(`images/skybox/${type}/posx.jpg`),
      env.getPath(`images/skybox/${type}/negx.jpg`),
      env.getPath(`images/skybox/${type}/posy.jpg`),
      env.getPath(`images/skybox/${type}/negy.jpg`),
      env.getPath(`images/skybox/${type}/posz.jpg`),
      env.getPath(`images/skybox/${type}/negz.jpg`)
    ])
    this.viewer.scene.background = cubeTexture
  }
}